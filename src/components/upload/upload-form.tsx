'use client'

import UploadFormInput from '@/components/upload/upload-form-input';
import { useUploadThing } from '../../utils/uploadthing';
import { z } from 'zod';
import { toast } from "sonner"
import { generatePdfSummary, storePdfSummaryAction } from '@/actions/upload-actions';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const schema = z.object({
    file: z.instanceof(File, { message: 'Arquivo inválido' })
        .refine((file) => file.size <= 24 * 1024 * 1024, 'O arquivo deve ter menos de 24MB')
        .refine((file) => file.type === 'application/pdf', 'O arquivo deve ser um PDF')
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
            console.log('submitted');
            const formData = new FormData(e.currentTarget);
            const file = formData.get('file') as File;

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
                toast.error("Algo deu errado! Por favor, use um arquivo PDF válido/diferente.");
                setIsLoading(false);
                return;
            }

            toast.info("Arquivo enviado! Nossa IA está lendo o seu arquivo... ✨");

            // Parse the PDF para o Langchain
            const result = await generatePdfSummary(response);
            console.log({ result });

            const { data = null, message = null } = result || {};

            if (data) {
                let storeResult: any;
                toast.info("Estamos salvando o seu sumário!... ✨");
                if (data.summary) {
                    // Salvar no banco de dados
                    storeResult = await storePdfSummaryAction({
                        fileUrl: response[0].serverData.file.url,
                        summary: data.summary,
                        title: data.title,
                        fileName: file.name
                    });
                    toast.success("✨ Sumário salvo com sucesso!");
                    formRef.current?.reset();
                    router.push(`/summaries/${storeResult.data.id}`);
                }
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Erro ao enviar o arquivo', error);
            formRef.current?.reset();
        } finally {
            setIsLoading(false);
        }
    };

    // Sumarizar com IA
    // Salvar no banco de dados
    // Redirecionar para a página de visualização do sumário com o ID

    return (
        <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto" >
            <UploadFormInput isLoading={isLoading} ref={formRef} onSubmit={handleSubmit} />
        </div >
    );
};