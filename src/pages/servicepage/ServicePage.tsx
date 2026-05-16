import { motion } from "framer-motion";
import { Smartphone, Play, Building, TrendingUp } from "lucide-react";
import { ModeToggle } from "@/components/button/ModeTogle";

const services = [
  {
    icon: <Smartphone className="w-5 h-5 text-[#1877F2]" />,
    title: "Custom Web Design",
    description: "We build fast, mobile-friendly websites designed to turn your visitors into paying clients."
  },
  {
    icon: <Play className="w-5 h-5 text-[#1877F2]" />,
    title: "AI Video Marketing",
    description: "Stunning cinematic videos without the expensive film crew. We use advanced AI to create viral marketing content at a fraction of the cost."
  },
  {
    icon: <Building className="w-5 h-5 text-[#1877F2]" />,
    title: "Hospitality & OTA Setup",
    description: "We set up and sync your Booking.com, Airbnb, and Google Maps to maximize bookings and eliminate double-booking stress."
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#1877F2]" />,
    title: "SEO & Digital Growth",
    description: "We handle your local SEO, Google My Business, and social media management so you can rank higher and drive real sales."
  }
];

const ServicePage = () => {
  // Animation variants
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

  return (
    <section className="relative min-h-screen py-24 overflow-hidden flex items-center justify-center">
      
      {/* Fixed Background Image (Parallax "Hole" Effect) */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
        style={{ 
          // You can replace this URL with your own local image path like "url('/your-image.jpg')"
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" 
        }}
      />
      
      {/* Overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-background/15 dark:bg-background/25 z-0" />

      {/* Subtle Background Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1877F2]/5 via-transparent to-transparent opacity-50 dark:opacity-100" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            Digital Infrastructure & Growth Strategies
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            We build robust digital foundations and deploy cutting-edge growth 
            strategies so you can easily Work Smarter, Not Harder.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/80 hover:border-border/80 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-xl border border-[#1877F2]/20 bg-[#1877F2]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;
