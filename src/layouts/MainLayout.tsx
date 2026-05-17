import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import HeroPage from "@/pages/heropage/HeroPage";
import ServicePage from "@/pages/servicepage/ServicePage";
import AboutPage from "@/pages/aboutpage/aboutpage";
import OurWorkPage from "@/pages/ourworkpage/ourwork";

const MainLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
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
      </main>

      {/* Footer at bottom - matching contact route */}
      <div id="contact" className="scroll-mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
