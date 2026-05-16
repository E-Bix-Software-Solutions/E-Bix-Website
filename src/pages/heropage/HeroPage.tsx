import { motion, type Variants } from "framer-motion";
import { ArrowRight, Rocket, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust according to your shadcn paths

// Animation Variants for parent-child staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const glowVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.4, 0.5, 0.4],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroPage() {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-4">
      
      {/* --- Ambient Background Glows --- */}
      <motion.div 
        variants={glowVariants as unknown as Variants}
        animate="animate"
        className="absolute top-1/4 -left-20 h-[350px] w-[350px] rounded-full bg-[#1877F2]/20 blur-[100px] pointer-events-none"
      />
      <motion.div 
        variants={glowVariants as unknown as Variants}
        animate="animate"
        className="absolute bottom-1/4 -right-20 h-[400px] w-[400px] rounded-full bg-[#1877F2]/15 blur-[120px] pointer-events-none"
      />

      {/* --- Main Hero Container --- */}
      <motion.div 
        variants={containerVariants as Variants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10"
      >
        
        {/* Left Column: Text & CTAs */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
          
          {/* Badge */}
          <motion.div variants={itemVariants as unknown as Variants} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/20 backdrop-blur-md">
              <Rocket className="h-3.5 w-3.5 animate-pulse" />
              Next-Gen Software Engineering
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants as unknown as Variants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]"
          >
            Empowering Digital Evolution With <span className="text-[#1877F2] bg-gradient-to-r from-[#1877F2] to-[#4fa1ff] bg-clip-text text-transparent">E-Bix</span> Solutions
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants as unknown as Variants}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
          >
            We engineer high-performance, robust software frameworks tailored to elevate your enterprise scale. Turn your architectural visions into production-ready digital realities.
          </motion.p>

          {/* Call To Actions */}
          <motion.div 
            variants={itemVariants as unknown as Variants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <Button size="lg" className="w-full sm:w-auto bg-[#1877F2] hover:bg-[#1877F2]/90 text-white font-medium shadow-lg shadow-[#1877F2]/20 group px-6">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto backdrop-blur-sm hover:bg-muted/50 font-medium px-6">
              Explore Our Architecture
            </Button>
          </motion.div>

        </div>

        {/* Right Column: Visual Interface Frame */}
        <motion.div 
          variants={itemVariants as unknown as Variants}
          className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end"
        >
          {/* Glassmorphism Outer Visual Container */}
          <div className="relative w-full max-w-[440px] aspect-[10/11] rounded-2xl border border-border/40 bg-card/30 backdrop-blur-xl shadow-2xl p-6 flex flex-col justify-between group overflow-hidden">
            
            {/* Embedded interactive top graphic accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#1877F2]/10 rounded-bl-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Decorative Top Mockup Control Bar */}
            <div className="flex items-center justify-between border-b border-border/40 pb-4 relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-[10px] font-mono tracking-wider text-muted-foreground/60 uppercase">e-bix_engine_v3.0</span>
            </div>

            {/* --- Centerpiece Image Section Layout --- */}
            <div className="flex-1 relative my-4 rounded-xl overflow-hidden border border-border/20 bg-muted/20 flex items-center justify-center">
              
              {/* Soft background light behind the image inside the frame */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1877F2]/5 to-transparent mix-blend-overlay pointer-events-none z-10" />
              
              {/* Main Image Node with smooth micro-interaction hover zoom */}
              <motion.img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" // Put your desired image route here
                alt="E-Bix Software Dashboard Core Architecture Overview" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Minimal Dark Ambient Vignette Grid overlay atop the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none z-10" />
            </div>

            {/* Micro Metrics Metrics Footer Data */}
            <div className="grid grid-cols-2 gap-4 border-t border-border/40 pt-4 bg-muted/5 rounded-b-xl px-2 relative z-10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">System Integrity</span>
                  <span className="text-xs font-mono font-bold text-foreground">99.98% Passed</span>
                </div>
              </div>
              <div className="flex items-center gap-2 border-l border-border/40 pl-4">
                <div className="flex flex-col w-full">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Sync Latency</span>
                  <span className="text-xs font-mono font-bold text-[#1877F2] flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    1.2ms
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}