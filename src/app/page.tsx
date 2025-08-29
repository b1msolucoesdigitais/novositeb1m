import NavigationBar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofSection from "@/components/SocialProofSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <ProductsSection />
      <HowItWorksSection />
      <SocialProofSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
