import { isDev } from "./helpers";

export const pricingPlans = [
  {
    name: "Básico",
    price: 5,
    description: "Para usuários ocasional",
    items: ["Armazenamento de 5 sumários", "Processamento padrão", "Suporte por email"],
    id: "basic",
    paymentLink: isDev ? "https://buy.stripe.com/test_3csdUOh2F1IR0JG5kr" : "https://buy.stripe.com/28o5kF2M6dvyg6s9AC",
    priceId: isDev ? "price_1RF6NDPQG3QEj6dT8Q33lwJO" : "price_1RF6amAJAEznduIyIenSb13e",
  },
  {
    name: "Pro",
    price: 14.9,
    description: "Para profissionais e equipes",
    items: [
      "Sumários ilimitados em PDF",
      "Processamento prioritário",
      "Suporte 24/7",
      "Exportação em Markdown",
    ],
    id: "pro",
    paymentLink: isDev ? "https://buy.stripe.com/test_bIY5oicMp1IR3VS8wC" : "https://buy.stripe.com/aEU28t86q636f2o6or",
    priceId: isDev ? "price_1RF6O6PQG3QEj6dTYSVtOdIr" : "price_1RF6aqAJAEznduIy6PaI5tAD",
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