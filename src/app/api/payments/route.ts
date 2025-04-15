import {
  handleCheckoutCompleted,
  handleSubscriptionDeleted,
} from "@/lib/payments";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY! ||
    "sk_test_51R5bkjPQG3QEj6dTGoMfa9PNprgqmr0akDfd3phs8TjldoiKLKmhz0V0yNug6VfR9CxP43W7BajYyoGgRrJNtpP5009FwkdPbD",
);

export const POST = async (req: NextRequest) => {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET! ||
        "whsec_Bc3oSa898AbnuPo8w52bnlJk7371wYdb", // O webhook sempre muda caso for test (se testar no local usando o tl --port 3000)
    );

    switch (event.type) {
      case "checkout.session.completed":
        console.log("Checkout session completed");
        const sessionId = event.data.object.id;
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
          expand: ["line_items"],
        });

        await handleCheckoutCompleted({ session, stripe });

        break;

      case "customer.subscription.deleted":
        console.log("Assinatura deletada");
        const subscription = event.data.object as Stripe.Subscription;
        const subscriptionId = event.data.object.id;

        await handleSubscriptionDeleted({ subscriptionId, stripe });

        console.log("Subscription:", subscription);
        break;

      default:
        console.log("Evento não tratado:", event.type);
        break;
    }
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Falha ao processar o evento", error },
      { status: 400 },
    );
  }
  return NextResponse.json({ status: "success" });
};
