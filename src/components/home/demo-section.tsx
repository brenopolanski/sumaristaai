import { Pizza } from "lucide-react";

export default function DemoSection() {
    return (
        <section className="relative">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8
            lg:pt-12">
                <div>

                </div>
                <div className="flex items-center gap-2 flex-col
                text-center space-y-4">
                    <div className="inline-flex items-center justify-center
                    p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20
                    mb-4">
                        <Pizza className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="text-center mb-16">
                        <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">
                            Com a Sumaristaai,{" "}
                            <span className="bg-linear-to-r
                        from-blue-500 to-blue-800 bg-clip-text text-transparent">
                                criar sumários
                            </span>{" "}
                            nunca foi tão fácil.
                        </h3>
                    </div>
                    <div className="flex items-center px-2 justify-center sm:px-4 lg:px-6">
                        {/* SumaristaAI Demo */}
                    </div>
                </div>
            </div>
        </section>
    );
}
