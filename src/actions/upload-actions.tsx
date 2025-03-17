"use server";

import { generateSummaryFromGemini } from "@/lib/gemini";
import { fetchAndExtractText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openai";

export async function generatePdfSummary(
    uploadResponse: [
        {
            serverData: {
                userId: string;
                file: {
                    url: string;
                    name: string;
                };
            };
        }
    ]
) {
    if (!uploadResponse) {
        return {
            success: false,
            error: "Não foi possível enviar o arquivo. Por favor, tente novamente.",
            data: null,
        };
    }

    const {
        serverData: {
            userId,
            file: { url: pdfUrl, name: fileName },
        },
    } = uploadResponse[0];

    if (!pdfUrl) {
        return {
            success: false,
            error: "Não foi possível enviar o arquivo. Por favor, tente novamente.",
            data: null,
        };
    }

    try {
        const pdfText = await fetchAndExtractText(pdfUrl);
        let summary = null;
        try {
            summary = await generateSummaryFromOpenAI(pdfText);
            console.log(summary);
        } catch (openAIError: any) {
            // Se a OpenAI retornar um erro de rate limit, tenta com a Gemini
            console.error("Erro ao tentar gerar sumário com OpenAI:", openAIError);
            if (openAIError instanceof Error && openAIError.message.includes("RATE_LIMIT_EXCEEDED")) {
                console.warn("Tentando com Gemini após falha na OpenAI devido ao rate limit.");
                try {
                    summary = await generateSummaryFromGemini(pdfText);
                } catch (geminiError) {
                    console.error("Erro ao gerar o sumário com Gemini (Requisição feita após OpenAI ter o rate limit excedido): ", geminiError);
                    throw new Error("Erro ao gerar o sumário com as duas IA's disponíveis.");
                }
            }
        }

        if (!summary) {
            return {
                success: false,
                error: "Falha ao gerar o sumário.",
                data: null,
            };
        }

        return {
            success: true,
            message: "Sumário gerado com sucesso!",
            data: {
                summary,
            },
        };

    } catch (error) {
        return {
            success: false,
            error: "Não foi possível enviar o arquivo. Por favor, tente novamente.",
            data: null,
        };
    }
}
