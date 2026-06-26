import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PosonBanner } from "@/components/banners/PosonBanner"; // Import here
import HeroPage from "@/pages/heropage/HeroPage";
import ServicePage from "@/pages/servicepage/ServicePage";
import AboutPage from "@/pages/aboutpage/aboutpage";
import OurWorkPage from "@/pages/ourworkpage/ourwork";
import ContactPage from "@/pages/contactpage/ContactPage";

const MainLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Session Entry Greeting Ad Popup */}
      <PosonBanner />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <div id="home">
          <HeroPage />
        </div>
        <div id="about" className="scroll-mt-16">
          <AboutPage />
        </div>
        <div id="services" className="scroll-mt-16">
          <ServicePage />
        </div>
        <div id="ourwork" className="scroll-mt-16">
          <OurWorkPage />
        </div>
        <div id="contactus" className="scroll-mt-16">
          <ContactPage />
        </div>
      </main>

      {/* Footer at bottom - matching contact route */}
      <div className="scroll-mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;