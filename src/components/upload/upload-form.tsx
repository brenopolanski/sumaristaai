"use client";

import {
    generatePdfSummary,
    generatePdfText,
    storePdfSummaryAction,
} from "@/actions/upload-actions";
import UploadFormInput from "@/components/upload/upload-form-input";
import { sendDiscordNotification } from "@/utils/discord";
import { formatFileNameAsTitle } from "@/utils/format-utils";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useUploadThing } from "../../utils/uploadthing";
import LoadingSkeleton from "./loading-skeleton";

const schema = z.object({
    file: z
        .instanceof(File, { message: "Arquivo inválido" })
        .refine(
            (file) => file.size <= 24 * 1024 * 1024,
            "O arquivo deve ter menos de 24MB",
        )
        .refine(
            (file) => file.type === "application/pdf",
            "O arquivo deve ser um PDF",
        ),
});

export default function UploadForm() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const formRef = useRef<HTMLFormElement>(null);
    const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
        onClientUploadComplete: () => {
            console.log("Upload completed");
        },
        onUploadError: (error: Error) => {
            console.error(`Error uploading file! ${error.message}`);
        },
        onUploadBegin: () => {
            console.log("Uploading...");
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            // Descomente a linha de baixo para testar o loading
            // return;
            console.log("submitted");
            const formData = new FormData(e.currentTarget);
            const file = formData.get("file") as File;

            // Validar o arquivo
            const validatedFields = schema.safeParse({ file });
            if (!validatedFields.success) {
                toast.error("Algo deu errado!");
                setIsLoading(false);
                return;
            }

            toast.info("📄 Enviando arquivo...");

            // Schema com o Zod
            // Upload to UploadThing
            const response = await startUpload([file]);
            if (!response) {
                toast.error(
                    "Algo deu errado! Por favor, use um arquivo PDF válido/diferente.",
                );
                setIsLoading(false);
                return;
            }

            toast.info("Arquivo enviado! Nossa IA está lendo o seu arquivo... ✨");

            let storeResult: any;

            const formattedFileName = formatFileNameAsTitle(file.name);

            const result = await generatePdfText(response[0].serverData.file.url);

            toast.info("Gerando o sumário do PDF... ✨");

            const summaryResult = await generatePdfSummary({
                pdfText: result?.data?.pdfText ?? "",
                fileName: formattedFileName,
            });

            toast.info("Sumário gerado! ✨");

            const { data = null, message = null } = summaryResult || {};

            if (data?.summary) {
                // Salvar no banco de dados
                toast.info("Estamos salvando o seu sumário!... ✨");

                storeResult = await storePdfSummaryAction({
                    fileUrl: response[0].serverData.file.url,
                    summary: data.summary,
                    title: formattedFileName,
                    fileName: file.name,
                });
                toast.success("✨ Sumário gerado com sucesso!");

                await sendDiscordNotification(
                    `📄 +1 Novo sumário salvo!\nTítulo: ${data.title}\nArquivo: ${file.name}`,
                );

                formRef.current?.reset();
                router.push(`/summaries/${storeResult.data.id}`);
            }
        } catch (error) {
            setIsLoading(false);
            await sendDiscordNotification(
                `❌ Erro ao salvar sumário do arquivo. \nErro: ${error}`,
            );
            console.error("Erro ao enviar o arquivo", error);
            formRef.current?.reset();
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
                <UploadFormInput
                    isLoading={isLoading}
                    ref={formRef}
                    onSubmit={handleSubmit}
                />
                {isLoading && (
                    <>
                        <div className="relative">
                            <div
                                className="absolute inset-0 flex items-center justify-center"
                                aria-hidden="true"
                            >
                                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                            </div>
                            <div className="relative flex justify-center mt-4">
                                <span className="bg-transparent px-3 py-1.5 text-muted-foreground text-sm">
                                    Processando
                                </span>
                            </div>
                        </div>
                        <LoadingSkeleton />
                    </>
                )}
            </div>
        </>
    );
}
