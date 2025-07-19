import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import ContactUsSection from "@/components/ContactUsSection";
import CompanySection from "@/components/CompanySection";
import AirSection from "@/components/AirSection";
import LandSection from "@/components/LandSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductSection />
      <ContactUsSection />
      <CompanySection />
      <div className="px-8 md:px-16">
        <AirSection />
      </div>
      <LandSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
