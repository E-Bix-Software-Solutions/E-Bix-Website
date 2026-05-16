import { motion, type Variants } from "framer-motion";

const AboutPage = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-background transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-16"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="bg-slate-950 dark:bg-ebix-blue text-white text-[11px] font-bold tracking-[0.2em] px-6 py-2.5 rounded-full uppercase shadow-xl transition-colors duration-300">
              Work Smarter, Not Harder
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] max-w-4xl tracking-tight transition-colors duration-300"
          >
            We Design Dreams, <br className="hidden md:block" /> Not Just
            Websites.
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Card: The Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card p-10 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-border border-t-8 border-t-slate-950 dark:border-t-ebix-blue flex flex-col gap-6 transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              The Story
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              <span className="font-bold text-foreground">
                E-Bix Software Solutions
              </span>{" "}
              helps{" "}
              <span className="font-bold text-foreground">
                Sri Lankan businesses grow online.
              </span>{" "}
              We use AI and creative ideas to build powerful digital tools not
              just websites that{" "}
              <span className="font-bold text-foreground">
                increase your income.
              </span>
            </p>
          </motion.div>

          {/* Card: The Team */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-card p-10 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-border border-t-8 border-t-slate-950 dark:border-t-ebix-blue flex flex-col gap-6 transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              The Team
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              We are tech innovators who believe in{" "}
              <span className="font-bold text-foreground">
                "Working Smarter."
              </span>{" "}
              We bring high-end digital tools to{" "}
              <span className="font-bold text-foreground">
                everyday businesses
              </span>{" "}
              saving you time, cutting your costs, and growing your online
              presence.
            </p>
          </motion.div>
        </div>

        {/* Bottom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#0a121e] dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-center text-white flex flex-col gap-8 shadow-2xl relative overflow-hidden transition-colors duration-300"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10"></div>

          <div className="max-w-4xl mx-auto space-y-10">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium italic leading-relaxed text-slate-100">
              "Business is like a game of Chess. You can't win with just one
              piece. You need a strategy."
            </p>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              At{" "}
              <span className="text-white font-semibold">
                E-Bix Software Solutions
              </span>
              , we act as your strategic partner. We align the right digital
              pieces from Bishops to Queens to ensure your business always wins
              the game.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
