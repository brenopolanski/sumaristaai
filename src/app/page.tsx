import BgGradient from "@/components/common/bg-gradient";
import CTASection from "@/components/home/cta-section";
import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import PricingSection from "@/components/home/pricing-section";

export const metadata = {
  title: "SumaristaAI | ⚡ Gere sumários com IA",
  description: "Resumo inteligente de PDF com IA.",
  keywords:
    "Pdf to summary, pdf summary, pdf summarizer, summarize pdf, summarize pdf online, summarize pdf free, summarize pdf tool, summarize pdf app, summarize pdf website",
  authors: [{ name: "gh@matheusmartinsviana" }],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#183ab5",
  robots: "index, follow",
  alternates: {
    canonical: "https://sumaristaai.vercel.app",
  },
  openGraph: {
    title: "SumaristaAI | ⚡ Gere sumários com IA",
    description: "Resumo inteligente de PDF com IA.",
    url: "https://sumaristaai.vercel.app",
    type: "website",
    images: [
      {
        url: "https://sumaristaai.vercel.app/meta-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SumaristaAI | ⚡ Gere sumários com IA",
    description: "Resumo inteligente de PDF com IA.",
    images: ["https://sumaristaai.vercel.app/meta-image.png"],
    site: "https://sumaristaai.vercel.app",
  },
};

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </div>
    </div>
  );
}
