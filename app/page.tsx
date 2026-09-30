import Hero from "@/components/Hero";
import WhySeaweed from "@/components/WhySeaweed";
import UseCases from "@/components/UseCases";
import ProductRange from "@/components/ProductRange";
import HowWeManufacture from "@/components/HowWeManufacture";
import TargetMarket from "@/components/TargetMarket";
import FootprintCalculator from "@/components/FootprintCalculator";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhySeaweed />
      <UseCases />
      <ProductRange />
      <HowWeManufacture />
      <TargetMarket />
      <FootprintCalculator />
      <Impact />
      <Footer />
    </main>
  );
}
