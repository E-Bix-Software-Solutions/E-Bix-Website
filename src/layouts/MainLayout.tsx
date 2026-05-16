import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import HeroPage from "@/pages/heropage/HeroPage";
import ServicePage from "@/pages/servicepage/ServicePage";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="">
        <HeroPage />
        <ServicePage />
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;