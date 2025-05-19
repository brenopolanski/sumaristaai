import { resetUserData } from "@/actions/tests/resetUserData";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const authHeader = req.headers.get("authorization");
  const secret = process.env.CRON_SECRET;

  if (authHeader !== `Bearer ${secret}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    await resetUserData();
    console.log("Dados do usuário resetados com sucesso.");
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error("Erro ao resetar dados de usuários:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
