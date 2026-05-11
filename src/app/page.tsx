import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Customers from "@/components/Customers";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Customers />
        <Pricing />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
