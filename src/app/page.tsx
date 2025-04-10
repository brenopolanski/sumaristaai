import BgGradient from "@/components/common/bg-gradient";
import CTASection from "@/components/home/cta-section";
import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import PricingSection from "@/components/home/pricing-section";
import Head from "next/head";

export default function Home() {
  return (
    <div className="relative w-full">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content="gh@matheusmartinsviana" />
        <meta
          name="keywords"
          content="Pdf to summary, pdf summary, pdf summarizer, summarize pdf, summarize pdf online, summarize pdf free, summarize pdf tool, summarize pdf app, summarize pdf website"
        />
        <meta name="google" content="notranslate" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#183ab5" />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://sumaristaai.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SumaristaAI | ⚡ Gere sumários com IA" />
        <meta
          property="og:description"
          content="Resumo inteligente de PDF com IA."
        />
        <meta property="og:image" content="https://sumaristaai.vercel.app/meta-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mgtechbr.com" />
        <meta property="twitter:url" content="https://sumaristaai.vercel.app" />
        <meta name="twitter:title" content="SumaristaAI | ⚡ Gere sumários com IA" />
        <meta
          name="twitter:description"
          content="Resumo inteligente de PDF com IA."
        />
        <meta name="twitter:image" content="https://sumaristaai.vercel.app/meta-image.png" />

        {/* Fonts and Favicon */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="canonical" href="https://sumaristaai.vercel.app/" />
        <link rel="manifest" href="public/site.webmanifest" />
        <title>SumaristaAI | ⚡ Gere sumários com IA</title>
      </Head>

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
