import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui
import { ArrowRight, Code2, Rocket, ShieldCheck } from "lucide-react";

const HeroPage = () => {
  // Animation variants for the text and images
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const floatingImage = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Replace these with your actual E-Bix asset paths
  const images = [
    { src: "/img1.jpg", icon: <Rocket className="w-6 h-6 text-white" /> },
    { src: "/img2.jpg", icon: <Code2 className="w-6 h-6 text-white" /> },
    { src: "/img3.jpg", icon: <ShieldCheck className="w-6 h-6 text-white" /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1877F2]/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-left"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-[#1877F2] uppercase bg-[#1877F2]/10 rounded-full"
          >
            Next-Gen Software Solutions
          </motion.span>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Engineering the <span className="text-[#1877F2]">Future</span> of Digital.
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg text-muted-foreground mb-8 max-w-lg"
          >
            E-Bix delivers high-performance, scalable software tailored for modern enterprises. 
            We turn complex challenges into seamless user experiences.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white px-8">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#1877F2]/20">
              Our Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated 3-Image Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative grid grid-cols-3 gap-4 h-[400px] md:h-[500px]"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl ${
                index === 1 ? "mt-12 mb-[-3rem]" : "" // Middle image offset
              }`}
            >
              <motion.div
                variants={floatingImage}
                initial="initial"
                animate="animate"
                className="h-full w-full relative"
                style={{ transitionDelay: `${index * 0.5}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  {img.icon}
                </div>
                <img 
                  src={img.src} 
                  alt={`Feature ${index + 1}`} 
                  className="object-cover h-full w-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HeroPage;