import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Rocket, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-video lg:aspect-square">
              <img
                src="/about-us.png"
                alt="About E-Bix Software Solutions"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Decorative elements for premium feel */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ebix-blue rounded-3xl -z-10 opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-ebix-blue rounded-3xl -z-10 opacity-10 blur-xl"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-ebix-blue font-bold tracking-widest text-sm uppercase mb-2 block">
                ABOUT US
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Innovating with <span className="text-ebix-blue">Purpose</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                At E-Bix Software Solutions, we don't just build software; we engineer growth. Our mission is to bridge the gap between complex technology and tangible business success through intelligent design and robust engineering.
              </p>
              <p>
                With a focus on reliability, innovation, and scalability, we partner with businesses to deliver custom digital solutions that solve real-world problems and drive long-term value.
              </p>
            </div>

            {/* Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex flex-col gap-2 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-ebix-blue">
                  <Shield size={20} />
                </div>
                <h4 className="font-bold text-slate-900">Reliability</h4>
                <p className="text-sm text-slate-500">Systems built to perform consistently.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex flex-col gap-2 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-ebix-blue">
                  <Rocket size={20} />
                </div>
                <h4 className="font-bold text-slate-900">Innovation</h4>
                <p className="text-sm text-slate-500">Pioneering new ways to solve challenges.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="flex flex-col gap-2 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-ebix-blue">
                  <Layers size={20} />
                </div>
                <h4 className="font-bold text-slate-900">Scalability</h4>
                <p className="text-sm text-slate-500">Solutions that grow alongside your team.</p>
              </motion.div>
            </div>

            <div className="mt-6">
              <Link to="/about">
                <Button className="bg-ebix-blue hover:bg-ebix-blue/90 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
