"use server";

import { getDbConnection } from "@/lib/db";

export async function resetUserData() {
  const sql = await getDbConnection();

  const testEmail = "matheusmviana@outlook.com.br";

  try {
    await sql`
      UPDATE users 
      SET upload_count = 0 
      WHERE email = ${testEmail}
    `;

    const userId = await sql`
      SELECT id FROM users WHERE email = ${testEmail}
    `;

    if (userId.length === 0) {
      throw new Error("Usuário não encontrado");
    }

    await sql`
      DELETE FROM pdf_summaries 
      WHERE user_id = ${userId[0].id}
    `;

    return {
      success: true,
      message: `Dados do usuário de teste (${testEmail}) resetados com sucesso.`,
    };
  } catch (error) {
    console.error("Erro ao resetar dados:", error);
    throw new Error("Falha ao resetar dados");
  }
}
