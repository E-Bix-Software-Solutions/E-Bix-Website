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

// Reusable Customized SVG Vesak Lantern Component
function CustomVesakLantern({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center pointer-events-none ${className}`}>
      {/* Lantern Hanging String */}
      <div className="w-[1.5px] h-8 bg-slate-400 dark:bg-slate-500/80 shadow-sm" />
      
      {/* Customized SVG Lantern */}
      <svg
        width="64"
        height="96"
        viewBox="0 0 64 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_4px_10px_rgba(24,119,242,0.4)] dark:drop-shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
      >
        {/* Main Diamond Structure */}
        <path d="M32 4L54 28L32 52L10 28L32 4Z" fill="#1877F2" opacity="0.9" />
        <path d="M32 4V52" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1 1" />
        <path d="M10 28H54" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1 1" />

        {/* Side Triangles / Accents */}
        <path d="M10 28L32 20L54 28L32 36L10 28Z" fill="#60A5FA" opacity="0.7" />

        {/* Outer Frame Highlight */}
        <path d="M32 4L54 28L32 52L10 28L32 4Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />

        {/* Hanging Tassels / Tails */}
        {/* Left Tassel */}
        <path d="M18 40V84" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <path d="M22 46V76" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        
        {/* Center Tassel */}
        <path d="M32 52V92" stroke="#1877F2" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 50V80" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <path d="M36 50V80" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        
        {/* Right Tassel */}
        <path d="M46 40V84" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <path d="M42 46V76" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    </div>
  );
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#home", id: "home" },
    { title: "About Us", href: "#about", id: "about" },
    { title: "Services", href: "#services", id: "services" },
    { title: "Our Work", href: "#ourwork", id: "ourwork" },
    { title: "Contact Us", href: "#contactus", id: "contactus" },
  ];

  const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || "E-Bix";

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
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

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-8">
      <div className="container flex h-16 items-center justify-between">

        {/* Mobile Menu Trigger & Sheet */}
        <div className="flex lg:hidden">
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
              className="w-full sm:w-[350px] border-r-primary/20 bg-background/95 backdrop-blur-xl flex flex-col"
            >
              <SheetHeader className="border-b pb-6">
                <SheetTitle className="text-left flex items-center gap-3">
                  <div className="relative flex flex-col items-center">
                    <div className="relative flex h-7 w-7 items-center justify-center rounded-md bg-[#1877F2] transition-transform group-hover:rotate-12 z-20">
                      <span className="text-white font-black text-lg italic leading-none">
                        E
                      </span>
                    </div>

                    {/* Customized Mobile Lantern */}
                    <CustomVesakLantern className="absolute top-5 origin-top scale-75 animate-[swing_3s_ease-in-out_infinite]" />
                  </div>
                  <span className="text-xl font-bold tracking-tighter text-[#1877F2] ml-1">
                    {COMPANY_NAME}
                  </span>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Drawer Menu Links */}
              <nav className="flex flex-col gap-2 mt-24 overflow-y-auto flex-1">
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

                <div className="mt-auto pt-10 px-4 pb-4">
                  <a
                    href="#contactus"
                    onClick={(e) => handleScroll(e, "contactus")}
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

        {/* Branding / Logo */}
        <div
          onClick={() => {
            const el = document.getElementById("home");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-3 group cursor-pointer relative"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Icon */}
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#1877F2] transition-transform group-hover:rotate-12 z-20">
              <span className="text-white font-black text-xl italic leading-none">
                E
              </span>
            </div>

            {/* Customized Desktop Lantern */}
            <CustomVesakLantern className="absolute top-7 hidden lg:flex origin-top animate-[swing_4s_ease-in-out_infinite] group-hover:scale-105 transition-transform duration-300" />
          </div>

          <span className="text-2xl font-bold tracking-tighter hidden md:inline-block ml-1">
            {COMPANY_NAME}<span className="text-[#1877F2]">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
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
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#1877F2] rounded-full" />
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Global Action Items */}
        <div className="flex items-center gap-2 md:gap-4">
          <ModeToggle />
          <a href="#contactus" onClick={(e) => handleScroll(e, "contactus")}>
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