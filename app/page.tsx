import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import ServicesSection from "./components/services";
import TrustSection from "./components/trust";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
    </>
  );
}
