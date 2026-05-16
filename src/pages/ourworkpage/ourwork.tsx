import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ProjectModal from "@/components/modals/ProjectModal";
import { useProjectModal } from "@/hooks/useProjectModal";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const OurWorkPage = () => {
  const { selectedProject, isModalOpen, openModal, closeModal } =
    useProjectModal();

  const caseStudies = [
    {
      title: "Villa Octopus",
      categories: ["Hospitality & Tourism", "Digital Platform"],
      description:
        "Designed a comprehensive digital footprint for a premium villa, including website development, Google Maps pin verification, and seamless OTA synchronization.",
      deepDescription:
        "Villa Octopus required a high-performance digital presence to compete in the luxury rental market. We engineered a custom-built, SEO-optimized platform that integrates directly with major OTA services while maintaining an independent, high-converting direct booking system. Our work included full branding, Google Maps authority building, and a responsive UI that captures the villa's premium essence.",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800",
      liveLink: "https://villaoctopus.com",
      features: [
        "Custom Direct Booking",
        "OTA Sync Engine",
        "Local SEO Strategy",
        "High-End Visual UI",
      ],
    },
    {
      title: "CocoVilla",
      categories: ["Hospitality & Tourism", "Enterprise Software"],
      description:
        "Engineered a complete digital ecosystem for a boutique resort, including web development, technical SEO, corporate email deployment, and local map verification.",
      deepDescription:
        "CocoVilla's challenge was to scale their boutique operations into a streamlined enterprise ecosystem. We provided a robust backend architecture that handles complex room management, employee communications via corporate email, and a front-end that translates luxury into clicks. The project resulted in a 40% increase in direct international inquiries within the first quarter.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      liveLink: "https://cocovilla.lk",
      features: [
        "Enterprise CMS",
        "Booking Dashboard",
        "SEO Dominance",
        "Corporate Infrastructure",
      ],
    },
    {
      title: "Aventra Tours",
      categories: ["Hospitality & Tourism", "Digital Brand"],
      description:
        "A culturally-rich, premium digital ecosystem establishing global trust and driving independent inquiries through direct WhatsApp integrations.",
      deepDescription:
        "Aventra Tours needed to communicate trust and cultural depth to a global audience. We built a narrative-driven platform that integrates seamlessly with real-time communication tools like WhatsApp, allowing potential tourists to connect instantly with agents. The UI focuses on immersive imagery and effortless navigation to simplify complex tour booking paths.",
      image:
        "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",
      liveLink: "https://aventratours.com",
      features: [
        "Real-time Chat Sync",
        "Immersive UI/UX",
        "Trust-Building Social Proof",
        "Global SEO",
      ],
    },
    {
      title: "Job Wave",
      categories: ["Recruitment Tech", "Digital Platform"],
      description:
        "Developed a fast, SEO-optimized job board platform focusing on modern UI/UX design to connect employers with talent efficiently and intuitively.",
      deepDescription:
        "Job Wave was designed to disrupt the local recruitment market with speed and simplicity. We built a lightning-fast search engine for job listings, a streamlined application workflow for candidates, and a powerful dashboard for employers. The platform utilizes advanced filtering and instant notifications to reduce time-to-hire by 50%.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      liveLink: "https://jobwave.lk",
      features: [
        "Instant Listing Index",
        "Employer Dashboard",
        "AI Resume Screening",
        "One-Click Apply",
      ],
    },
    {
      title: "Learnt",
      categories: ["EdTech Platform", "Digital Education"],
      description:
        "Built an educational platform dedicated to simplifying programming concepts. Features a clean, minimalist reading interface and robust backend architecture.",
      deepDescription:
        "Learnt is an EdTech solution focused on reducing the friction of learning complex technical topics. We engineered a distraction-free reading experience with integrated code snippets, interactive quizzes, and a progress tracking system. The architecture is built for extreme scalability, ensuring zero downtime during peak traffic from thousands of students.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
      liveLink: "https://learnt.com",
      features: [
        "Minimalist UI",
        "Interactive Code Sandboxes",
        "Student Progress Analytics",
        "LMS Integration",
      ],
    },
  ];

  return (
    <main className="bg-background transition-colors duration-300 min-h-screen pt-32 pb-24">
      {/* Section : Our Works Grid */}
      <section className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
          >
            Our Work
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg tracking-wide uppercase font-medium"
          >
            Proof in the Pixels. Results in the Bank.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {caseStudies.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-[2rem] overflow-hidden border border-border flex flex-col h-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white font-bold flex items-center gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 flex flex-col flex-1 gap-6">
                <div className="flex flex-wrap gap-2">
                  {work.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="bg-ebix-blue/10 text-ebix-blue text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-foreground">
                  {work.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                  {work.description}
                </p>

                <Button
                  onClick={() => openModal(work)}
                  className="w-full mt-auto bg-ebix-blue text-white hover:bg-blue-600 rounded-xl h-12"
                >
                  View Case Study
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-ebix-blue p-12 md:p-20 rounded-[3rem] text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[100px] -z-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to start your business?
            </h2>
            <p className="text-blue-100 text-lg">
              Let's collaborate to build something truly exceptional for your
              business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-ebix-blue hover:bg-blue-50 px-8 rounded-full font-bold h-14"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Reusable Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </main>
  );
};

export default OurWorkPage;
