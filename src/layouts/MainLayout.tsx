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
      <main className="">
        <HeroPage />
        <AboutPage />
        <ServicePage />
        <OurWorkPage />
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
