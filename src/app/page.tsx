import { Promo } from "./components/Promo";
import { BestSelling } from "./components/BestSelling";
import { CategoriesSection } from "./components/CategoriesSection";
import { FlashSales } from "./components/FlashSales";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ExploreProducts } from "./components/ExploreProducts";
import { StoreBenefits } from "./components/StoreBenefits";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FlashSales />
      <CategoriesSection />
      <BestSelling />
      <Promo />
      <ExploreProducts />
      <StoreBenefits />
      <Footer />
    </>
  );
}
