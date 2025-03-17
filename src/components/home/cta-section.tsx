import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="bg-gray-50 py-12">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Precisa entender um documento sem perder horas lendo?</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Carregue seu PDF e receba um resumo limpo e direto ao ponto feito por IA em segundos.</p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                        <Button size={"lg"} variant={"link"} className="w-full min-[400px]:w-auto bg-linear-to-r from-slate-900 to-blue-500 hover:from-blue-500 hover:to-slate-900
                         hover:text-white text-white transition-all duration-300 hover:no-underline rounded-full">
                            <Link href="/#pricing" className="flex items-center justify-center">
                                Começar{" "}
                                <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
