'use client'

import { Download } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function DownloadSummaryButton({
    title,
    summaryText,
    fileName,
    createdAt,
}: {
    title: string;
    summaryText: string;
    fileName: string;
    createdAt: string;
}) {
    const handleDownload = () => {
        const summaryContent = `
# ${title}
Gerado em ${new Date(createdAt).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})}

${summaryText}

Fonte: ${fileName}
Gerado por Sumarista AI
`;

        const blob = new Blob([summaryContent], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Sumário-${title.replace(/ /g, "-")}-${createdAt}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success("Resumo baixado com sucesso!");
    }
    return <Button size="sm" className="h-8 px-3 hover:bg-blue-400" onClick={handleDownload}>
        <Download className="h-4 w-4 mr-1" />
        Download
    </Button>;
}   
