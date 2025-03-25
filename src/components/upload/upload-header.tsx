import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import { MotionDiv } from "../common/motion-wrapper";
import { itemVariants } from "@/utils/constants";

export default function UploadHeader() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 text-center">
            <MotionDiv
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-blue-200 via-blue-500 to-blue-800 animate-gradient-x group">
                <Badge
                    variant="secondary"
                    className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors"
                >
                    <Sparkles className="h-6 w-6 mr-2 text-blue-600 animate-pulse" />
                    <p className="text-base font-bold text-blue-600">Conteúdo Criado com IA</p>
                </Badge>
            </MotionDiv>
            <MotionDiv
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comece a enviar{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 px-2">seus PDF's</span>
                    <span
                        className="absolute inset-0 bg-blue-200/50 -rotate-2 rounded-lg transform -skew-y-1"
                        aria-hidden="true"
                    ></span>
                </span>
            </MotionDiv>
            <MotionDiv
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">
                <p>Envie seu PDF e deixe a IA fazer o resto! ✨</p>
            </MotionDiv>
        </div >
    );
}
