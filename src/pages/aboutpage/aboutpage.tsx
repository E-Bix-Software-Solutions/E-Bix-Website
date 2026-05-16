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

            {/* Story Visualization: Growth Path */}
            <div className="mt-auto pt-8 border-t border-border/50 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/70">
                  Client Growth Metric
                </span>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-ebix-blue animate-pulse"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-ebix-blue animate-pulse [animation-delay:200ms]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-ebix-blue animate-pulse [animation-delay:400ms]"></div>
                </div>
              </div>

              <div className="h-32 w-full bg-slate-50/30 dark:bg-slate-900/30 rounded-3xl border border-border/40 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                {/* Decorative Grid */}
                <div className="absolute inset-0 grid grid-cols-6 h-full w-full opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="border-r border-foreground"></div>
                  ))}
                </div>

                <svg
                  className="w-full h-full p-6 relative z-10"
                  viewBox="0 0 240 60"
                >
                  <motion.path
                    d="M10,50 C40,48 60,35 80,30 C110,23 130,28 160,15 C190,2 210,12 230,5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="text-ebix-blue"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  />
                  {/* Milestones */}
                  {[
                    { x: 80, y: 30, d: 1.2 },
                    { x: 160, y: 15, d: 1.8 },
                    { x: 230, y: 5, d: 2.4 },
                  ].map((pt, i) => (
                    <motion.circle
                      key={i}
                      cx={pt.x}
                      cy={pt.y}
                      r="4"
                      fill="currentColor"
                      className="text-ebix-blue"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: pt.d,
                      }}
                      viewport={{ once: true }}
                    />
                  ))}
                </svg>

                {/* Growth Label */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.6 }}
                  viewport={{ once: true }}
                  className="absolute right-6 bottom-4 bg-background/80 dark:bg-card/80 backdrop-blur-md px-3 py-1 rounded-full border border-border/50 shadow-sm"
                >
                  <span className="text-[10px] font-black text-ebix-blue">
                    +45% ROI
                  </span>
                </motion.div>
              </div>

              <p className="mt-5 text-sm font-medium text-muted-foreground/80 leading-relaxed italic">
                Our solutions aren't just code; they're{" "}
                <span className="text-foreground font-semibold">
                  engines for expansion
                </span>
                .
              </p>
            </div>
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

            {/* Team Members List */}

            <h4 className="text-md md:text-lg font-bold text-foreground">
              Co-Founders
            </h4>
            <div className="flex flex-wrap gap-6 mt-4 align-center">
              {[
                {
                  name: "Sahan Dhanujaya",
                  postition: "Software Engineer",
                  linked:
                    "https://www.linkedin.com/in/sahan-dhanujaya-040aa4359/",
                  img: "/sahan.jpeg",
                },
                {
                  name: "Sherul Dhanuska",
                  postition: "Software Engineer",
                  linked:
                    "https://www.linkedin.com/in/sherul-dhanushka-204a58202/",
                  img: "/sherul.jpeg",
                },
                {
                  name: "Mahesh Hansaka",
                  postition: "Software Engineer",
                  linked:
                    "https://www.linkedin.com/in/mahesh-hansaka-1069a3310/",
                  img: "/mahesh2.jpeg",
                },
              ].map((member, idx) => (
                <div key={idx} className="flex flex-col items-center gap-5">
                  <a
                    href={member.linked}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-ebix-blue shadow-lg transition-transform hover:scale-110 cursor-pointer block"
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      title={member.postition}
                      className="w-full h-full object-cover"
                    />
                  </a>
                  <span className="text-sm font-bold text-foreground text-center leading-tight">
                    {member.name.split(" ").map((n, i) => (
                      <span key={i} className="block">
                        {n}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
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
