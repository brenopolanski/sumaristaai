import { isDev } from "./helpers";

export const pricingPlans = [
  {
    name: "Básico",
    price: 19,
    description: "Para usuários ocasional",
    items: ["5 sumários por mês", "Processamento padrão", "Suporte por email"],
    id: "basic",
    paymentLink: isDev ? "https://buy.stripe.com/test_fZe8Au27LbjrgIEbIM" : "https://buy.stripe.com/fZe6oJeuObnq7zW8ww",
    priceId: isDev ? "price_1RDG9qPQG3QEj6dTRmUWvwAk" : "price_1RDGy1AJAEznduIyGBtFtfGk",
  },
  {
    name: "Pro",
    price: 89,
    description: "Para profissionais e equipes",
    items: [
      "Sumários ilimitados em PDF",
      "Processamento prioritário",
      "Suporte 24/7",
      "Exportação em Markdown",
    ],
    id: "pro",
    paymentLink: isDev ? "https://buy.stripe.com/test_8wM8Au7s5cnvcsodQV" : "https://buy.stripe.com/00g6oJfySdvy4nKfYZ",
    priceId: isDev ? "price_1RDGFuPQG3QEj6dTEDS7dq5f" : "price_1RDGybAJAEznduIydwORw4sN",
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