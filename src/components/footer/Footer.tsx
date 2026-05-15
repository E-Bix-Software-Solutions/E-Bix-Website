import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 group cursor-pointer">
              {/* Logo Placeholder with Brand Color */}
              <div className="h-8 w-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-12">
                E
              </div>
              <span className="text-xl font-bold tracking-tighter">
                E-Bix<span className="text-[#1877F2]">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building the next generation of intelligent software solutions with a focus on modern excellence.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:ml-auto">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1877F2]">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/about" className="transition-colors hover:text-[#1877F2]">About Us</a></li>
              <li><a href="/work" className="transition-colors hover:text-[#1877F2]">Our Work</a></li>
              <li><a href="/careers" className="transition-colors hover:text-[#1877F2]">Careers</a></li>
            </ul>
          </div>

          <div className="md:ml-auto">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1877F2]">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/contact" className="transition-colors hover:text-[#1877F2]">Contact</a></li>
              <li><a href="/faq" className="transition-colors hover:text-[#1877F2]">FAQ</a></li>
              <li><a href="/privacy" className="transition-colors hover:text-[#1877F2]">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1877F2]">Stay Updated</h3>
            <p className="text-xs text-muted-foreground">Join our newsletter for the latest tech insights.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input 
                type="email" 
                placeholder="Enter email" 
                className="bg-muted/50 border-border/40 focus-visible:ring-[#1877F2]"
              />
              <Button type="submit" size="icon" className="bg-[#1877F2] hover:bg-[#1877F2]/90 shrink-0">
                <Mail className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} E-Bix Software Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1877F2] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#1877F2] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#1877F2] transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}