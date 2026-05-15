import React from "react";
import { ModeToggle } from "@/components/button/ModeTogle";
import { Button } from "@/components/ui/button";
import { Menu, ChevronRight } from "lucide-react"; 
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Pricing", href: "/pricing" },
    { title: "Portfolio", href: "/portfolio" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-8">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[350px] border-r-primary/20 bg-background/95 backdrop-blur-xl">
              <SheetHeader className="border-b pb-6">
                <SheetTitle className="text-left flex items-center gap-3">
                   {/* Brand Logo Integration */}
                   <img src="/logo-icon.png" alt="E-Bix" className="h-10 w-10 object-contain" />
                   <span className="text-2xl font-bold tracking-tighter text-[#1877F2]">E-Bix</span>
                </SheetTitle>
              </SheetHeader>
              
              {/* Modern Responsive Menu Items */}
              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="group flex items-center justify-between rounded-lg p-4 text-lg font-medium transition-all hover:bg-[#1877F2]/10 hover:text-[#1877F2]"
                  >
                    {link.title}
                    <ChevronRight className="h-5 w-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                ))}
                
                <div className="mt-auto pt-10 px-4">
                  <Button className="w-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-white shadow-lg shadow-blue-500/20 py-6 text-lg">
                    Get Started
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Branding */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#1877F2] transition-transform group-hover:rotate-12">
            {/* The "E-Bix" stylized monogram placeholder */}
            <span className="text-white font-black text-xl italic leading-none">E</span>
          </div>
          <span className="text-2xl font-bold tracking-tighter hidden md:inline-block">
            E-Bix<span className="text-[#1877F2]">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuLink 
                  href={link.href} 
                  className={`${navigationMenuTriggerStyle()} font-medium hover:text-[#1877F2] transition-colors`}
                >
                  {link.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions & Theme Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          <ModeToggle />
          <Button variant="default" className="hidden sm:flex bg-[#1877F2] hover:bg-[#1877F2]/90 text-white rounded-full px-6">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}