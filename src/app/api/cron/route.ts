import { getDbConnection } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const authHeader = req.headers.get("authorization");
  const secret = process.env.CRON_SECRET;

  if (authHeader !== `Bearer ${secret}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  
  const sql = await getDbConnection();

  try {
    await sql`UPDATE users SET upload_count = 0`;
    console.log("Campo upload_count zerado com sucesso!");
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error("Erro ao zerar upload_count:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
