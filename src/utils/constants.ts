import { isDev } from "./helpers";

export const pricingPlans = [
  {
    name: "Básico",
    price: 20,
    description: "Para usuários ocasional",
    items: ["5 sumários por mês", "Processamento padrão", "Suporte por email"],
    id: "basic",
    paymentLink: isDev ? "https://buy.stripe.com/test_dR6g2W27L87f2ROcMM" : "",
    priceId: isDev ? "price_1R5c14PQG3QEj6dTiLvhuM15" : "",
  },
  {
    name: "Pro",
    price: 90,
    description: "Para profissionais e equipes",
    items: [
      "Sumários ilimitados em PDF",
      "Processamento prioritário",
      "Suporte 24/7",
      "Exportação em Markdown",
    ],
    id: "pro",
    paymentLink: isDev ? "https://buy.stripe.com/test_fZedUO7s55Z71NKaEF" : "",
    priceId: isDev ? "price_1R5c7pPQG3QEj6dTWWn0Ft22" : "",
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 15, duration: 0.8 },
  },
};