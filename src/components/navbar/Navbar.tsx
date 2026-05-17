import React, { useState, useEffect } from "react";
import { ModeToggle } from "../button/ModeTogle";
import { Button } from "../ui/button";
import { Menu, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#home", id: "home" },
    { title: "About Us", href: "#about", id: "about" },
    { title: "Services", href: "#services", id: "services" },
    { title: "Our Work", href: "#ourwork", id: "ourwork" },
    { title: "Contact Us", href: "#contact", id: "contact" },
  ];

  // 1. Smart Scroll spy using Intersection Observer API
  useEffect(() => {

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies focal viewport space
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // 2. Intercept click for seamless scroll behaviors
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false); // Close mobile tray immediately
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-8">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Mobile Menu Trigger & Sheet */}
        <div className="flex md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-full sm:w-[350px] border-r-primary/20 bg-background/95 backdrop-blur-xl"
            >
              <SheetHeader className="border-b pb-6">
                <SheetTitle className="text-left flex items-center gap-3">
                  <img
                    src="/logo-icon.png"
                    alt="E-Bix"
                    className="h-10 w-10 object-contain"
                  />
                  <span className="text-2xl font-bold tracking-tighter text-[#1877F2]">
                    E-Bix
                  </span>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Drawer Menu Links */}
              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.title}
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.id)}
                      className={`group flex items-center justify-between rounded-lg p-4 text-lg font-medium transition-all ${
                        isActive
                          ? "bg-[#1877F2]/10 text-[#1877F2]"
                          : "text-foreground hover:bg-muted/60"
                      }`}
                    >
                      {link.title}
                      <ChevronRight
                        className={`h-5 w-5 transition-all ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                      />
                    </a>
                  );
                })}

                <div className="mt-auto pt-10 px-4">
                  <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "contact")}
                    className="block w-full text-center"
                  >
                    <Button className="w-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-white shadow-lg shadow-blue-500/20 py-6 text-lg rounded-xl">
                      Get In Touch
                    </Button>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Branding */}
        <div 
          onClick={() => {
            const el = document.getElementById("home");
            if(el) el.scrollIntoView({ behavior: "smooth" });
          }} 
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#1877F2] transition-transform group-hover:rotate-12">
            <span className="text-white font-black text-xl italic leading-none">
              E
            </span>
          </div>
          <span className="text-2xl font-bold tracking-tighter hidden md:inline-block">
            E-Bix<span className="text-[#1877F2]">.</span>
          </span>
        </div>

        {/* Desktop Navigation Link UI Hook */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <NavigationMenuItem key={link.title}>
                  <NavigationMenuLink
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.id)}
                    className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-200 relative cursor-pointer ${
                      isActive 
                        ? "text-[#1877F2]" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.title}
                    {/* Next-gen subtle underline active bar layout indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#1877F2] rounded-full" />
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Global Action items */}
        <div className="flex items-center gap-2 md:gap-4">
          <ModeToggle />
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            <Button
              variant="default"
              className="hidden sm:flex bg-[#1877F2] hover:bg-[#1877F2]/90 text-white rounded-full px-6"
            >
              Get In Touch
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}