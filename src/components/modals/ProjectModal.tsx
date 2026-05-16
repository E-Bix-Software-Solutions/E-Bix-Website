import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    deepDescription: string;
    image: string;
    categories: string[];
    liveLink?: string;
    features?: string[];
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[110] flex items-center justify-center pointer-events-none p-4"
          >
            <div className="bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-border pointer-events-auto relative custom-scrollbar">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-3 rounded-full bg-background/80 hover:bg-background text-foreground shadow-xl transition-all hover:scale-110 active:scale-95 z-50 border border-border/50"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col">
                {/* Hero Section */}
                <div className="h-72 md:h-96 w-full relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  {/* Floating Title on Image */}
                  <div className="absolute bottom-12 left-8 md:left-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.categories.map((cat, i) => (
                        <span
                          key={i}
                          className="bg-ebix-blue text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground drop-shadow-2xl">
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-14 -mt-6 relative z-10 bg-card rounded-t-[3rem]">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-10">
                      <section>
                        <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                          <span className="w-8 h-[2px] bg-ebix-blue"></span>
                          Case Study Overview
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-medium">
                          {project.deepDescription}
                        </p>
                      </section>

                      <section>
                        <h4 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                          <span className="w-8 h-[2px] bg-ebix-blue"></span>
                          Core Capabilities
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {project.features?.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border/50 group hover:border-ebix-blue/50 transition-colors"
                            >
                              <div className="w-8 h-8 rounded-full bg-ebix-blue/10 flex items-center justify-center shrink-0 group-hover:bg-ebix-blue group-hover:text-white transition-all">
                                <CheckCircle2 className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-semibold text-foreground/80">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="space-y-8">
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2rem] border border-border/50 space-y-6">
                        <h4 className="font-bold text-foreground text-lg">
                          Project Info
                        </h4>
                        <div className="space-y-5">
                          <div>
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">
                              Timeline
                            </p>
                            <p className="text-foreground font-bold italic text-lg">
                              4 Months
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">
                              Tech Stack
                            </p>
                            <p className="text-foreground font-bold italic text-lg">
                              Next.js • Tailwind{" "}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">
                              Role
                            </p>
                            <p className="text-foreground font-bold italic text-lg">
                              Lead Digital Partner
                            </p>
                          </div>
                        </div>
                      </div>

                      {project.liveLink && (
                        <Button
                          className="w-full h-16 rounded-2xl bg-slate-950 dark:bg-ebix-blue text-white hover:bg-slate-800 dark:hover:bg-blue-600 font-black text-lg group shadow-2xl transition-all active:scale-95"
                          asChild
                        >
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Explore Live{" "}
                            <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
