import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { success: false, message: "Mensagem inválida" },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { success: false, message: "Webhook URL não configurado" },
        { status: 500 },
      );
    }

    let content = message;

    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    if (!discordRes.ok) {
      throw new Error(`Erro do Discord: ${discordRes.statusText}`);
    }

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso ao Discord!",
    });
  } catch (error: any) {
    console.error("Erro ao enviar notificação:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao enviar mensagem para o Discord.",
        error: error.message,
      },
      { status: 500 },
    );
  }
};
