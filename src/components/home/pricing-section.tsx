import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";

type PriceType = {
    name: string;
    price: number;
    description: string;
    items: string[];
    id: string;
    paymentLink: string;
    priceId: string;
};

const plans: PriceType[] = [
    {
        name: 'Básico',
        price: 9,
        description: 'Para usuários ocasional',
        items: [
            '5 sumários por mês',
            'Processamento padrão',
            'Suporte por email',
        ],
        id: 'basic',
        paymentLink: '',
        priceId: '',
    },
    {
        name: 'Pro',
        price: 19,
        description: 'Para profissionais e equipes',
        items: [
            'Sumários ilimitados em PDF',
            'Processamento prioritário',
            'Suporte 24/7',
            'Exportação em Markdown',
        ],
        id: 'pro',
        paymentLink: '',
        priceId: '',
    },
];

export default function PricingSection() {
    return (
        <section className="relative overflow-hidden" id="pricing">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8
            lg:pt-12">
                <div className="flex justify-center items-center w-full pb-12 ">
                    <h2 className="font-bold text-xl uppercase mb-8 text-blue-500">
                        Preços
                    </h2>
                </div>
                <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
                    {plans.map((plan) => (
                        <PricingCard key={plan.id} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const PricingCard = ({ name,
    price,
    description,
    items,
    id,
    paymentLink
}: PriceType) => {
    return (
        <div className="relative w-full max-w-lg hover:scale-105 transition-all duration-300">
            <div className={
                cn("relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px]  border-gray-500/20 rounded-2xl",
                    id === "pro" && "border-blue-500 gap-5 border-2")}> {/* Fazendo o card do plano pro ficar mais destacado se estiver selecionado */}

                <div className="flex justify-between items-center gap-4">
                    <div>
                        <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
                        <p className="text-base-content/80 mt-2">{description}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <p className="text-5xl tracking-tighter font-extrabold">R$ {price}</p>
                    <div className="flex flex-col gap-1 justify-end mb-[4px]">
                        <p className="text-xs uppercase font-semibold">BRL</p>
                        <p className="text-xs">/mês</p>
                    </div>
                </div>

                <div className="space-y-2.5 leading-relaxed text-base">
                    <ul>
                        {items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <CheckIcon size={16} strokeWidth={1.5} className="text-green-500" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-2 flex justify-center w-full">
                    <Link href={paymentLink} className={cn("w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-500  to-blue-600 hover:to-blue-600 hover:from-blue-900 transition-all duration-500 h-12 text-white font-semibold text-lg",
                        id === "pro" ? "border-blue-900" : "border-blue-200 from-blue-400 to-blue-500"
                    )}>Comprar agora <ArrowRight size={16} strokeWidth={1.5} className="text-white" /></Link>
                </div>
            </div>
        </div>
    );
};
