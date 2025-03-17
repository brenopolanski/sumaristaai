import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";

type Step = {
    label: string;
    description: string;
    icon: React.ReactNode;
}

const steps: Step[] = [
    {
        icon: <FileText size={64} strokeWidth={1.5} />,
        label: "Envie o seu PDF",
        description: "Apenas araste e solte o seu PDF ou clique para enviar o seu PDF para o Sumaristaai",
    },
    {
        icon: <BrainCircuit size={64} strokeWidth={1.5} />,
        label: "Análise com IA",
        description: "Nosso IA irá analisar o seu PDF e criar um sumário detalhado em segundos",
    },
    {
        icon: <FileOutput size={64} strokeWidth={1.5} />,
        label: "Baixe o seu sumário",
        description: "Receba um sumário detalhado com base no seu PDF",
    },
]


export default function HowItWorksSection() {
    return (
        <section className="relative overflow-hidden bg-gray-50 pb-16">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8
            lg:pt-12">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                >
                    <div
                        className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.9%, 97.5% 26.9%, 85.5% 1%, 80.7% 7.7%, 72.5% 32.5%, 60.2% 49.6%, 47.5% 58.3%, 45.2% 58.9%, 32.8% 53.6%, 21.1% 41.7%, 19.4% 39.7%, 9.8% 30.4%, 5.4% 36.9%, 0.0% 54.2%, 3.3% 69.4%, 13.4% 72.1%, 25.0% 71.4%, 27.6% 67.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
            </div>

            <div className="text-center mb-16">
                <h2 className="font-bold text-xl uppercase mb-4 text-blue-500">
                    Como funciona?
                </h2>
                <h3 className="font-bold text-xl md:text-2xl max-w-1xl mx-auto">
                    Sumaristaai é uma ferramenta que permite criar sumários em apenas 3 passos.
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative justify-items-center items-center">
                {steps.map((step, idx) => (
                    <div className="flex relative items-stretch" key={idx}>
                        <StepItem {...step} />
                        {idx < steps.length - 1 && <div className="hidden absolute md:block top-1/2 -right-4 transform -translate-y-1/2 z-10">
                            <MoveRight size={32} className="text-blue-500" strokeWidth={1} />
                        </div>
                        }
                    </div>
                ))}
            </div>

        </section>
    );
}

function StepItem({ icon, label, description }: Step) {
    return (
        <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border
         border-white hover:border-blue-500/100 transition-colors group w-full shadow-lg
          shadow-blue-500/10 hover:shadow-blue-500/20 max-w-sm ">
            <div className="flex flex-col gap-4 h-full">
                <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl
                 bg-linear-to-br from-blue-500/10 to-transparent group-hover:from-blue-500/20 transition-colors">
                    <div className="text-blue-500">{icon}</div>
                </div>
                <div className="flex flex-col flex-1 gap-1 justify-between">
                    <h4 className="text-center font-bold text-xl">{label}</h4>
                    <p className="text-center text-gray-600 text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
}