import UpgradeRequired from "@/components/common/upgrade-required";
import { hasActivePlan } from "@/lib/user";
import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Enviar PDF 📄 | SumaristaAI",
  description: "Envie seu PDF e gere um sumário com IA",
  openGraph: {
    images: [{ url: "/opengraph-image.png" }],
  },
};

export default async function UploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const hasActiveSubscription = await hasActivePlan(
    user.emailAddresses[0].emailAddress,
  );

  if (!hasActiveSubscription) {
    return <UpgradeRequired />;
  }

  return <section className="min-h-screen">{children}</section>;
}
