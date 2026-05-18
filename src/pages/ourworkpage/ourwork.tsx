import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ProjectModal from "@/components/modals/ProjectModal";
import { useProjectModal } from "@/hooks/useProjectModal";
import { caseStudies } from "@/data/projects";

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
              whileHover={isMobile ? undefined : { y: -10 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: isMobile ? 0 : idx * 0.1 }}
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
          viewport={{ once: true, amount: 0.15 }}
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
              <a
                href="#contactus"
                onClick={(e) => handleScroll(e, "contactus")}
              >
                <Button
                  size="lg"
                  className="bg-white text-ebix-blue hover:bg-blue-50 px-8 rounded-full font-bold h-14"
                >
                  Contact Us
                </Button>
              </a>
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
