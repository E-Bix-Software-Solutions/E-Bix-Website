import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageSquare, User } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    // %0A represents a newline character in URLs
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    
    // WhatsApp number format (assuming Sri Lanka country code +94 for 0750747029)
    const whatsappNumber = "94750747029";
    
    // Construct the WhatsApp API URL
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    // Open WhatsApp in a new tab
    window.open(url, "_blank");
  };

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
    <section className="relative min-h-screen py-24 bg-background overflow-hidden flex items-center justify-center">
      {/* Subtle Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1877F2]/10 via-transparent to-transparent opacity-50 dark:opacity-100" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            Let's Build Something <span className="text-[#1877F2]">Great</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Ready to transform your digital presence? Send us a message and we'll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Left Side: Contact Information */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-[#1877F2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Call Us</h3>
                <p className="text-muted-foreground text-sm">Mon-Fri from 8am to 5pm</p>
                <p className="font-medium mt-1">+94 75 074 7029</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-[#1877F2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email Us</h3>
                <p className="text-muted-foreground text-sm">Our friendly team is here to help.</p>
                <p className="font-medium mt-1">hello@e-bix.com</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-[#1877F2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                <p className="text-muted-foreground text-sm">Come say hello at our office HQ.</p>
                <p className="font-medium mt-1">Colombo, Sri Lanka</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Interactive WhatsApp Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-border/80 transition-all duration-300"
          >
            <form onSubmit={handleWhatsAppSend} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-muted-foreground group-focus-within:text-[#1877F2] transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1877F2]/50 focus:border-[#1877F2]/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-muted-foreground group-focus-within:text-[#1877F2] transition-colors" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1877F2]/50 focus:border-[#1877F2]/50 transition-all"
                    placeholder="07X XXX XXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <div className="relative group">
                  <div className="absolute top-3.5 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-muted-foreground group-focus-within:text-[#1877F2] transition-colors" />
                  </div>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-11 pr-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1877F2]/50 focus:border-[#1877F2]/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-1 active:translate-y-0"
              >
                <Send className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
