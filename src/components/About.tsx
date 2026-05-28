import { motion } from "framer-motion";
import { Calendar, Cpu, Zap } from "lucide-react";
import { personalInfo, techStack } from "@/lib/data";
import { useState, useEffect } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function About() {
  const words = ["Alan", "Web-Explorer", "App-Developer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
        },
        isDeleting ? 50 : 100
      );
    }
    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting]);

  return (
    <section id="about" className="py-14 md:py-20 relative">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/12 dark:bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-light/12 dark:bg-accent-light/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="card rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 text-accent text-xs font-semibold font-mono mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                About Me
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display-alt text-heading leading-[1.2] mb-6">
                Code. Design. Solve.{" "}
                <span className="text-accent font-script">Repeat.</span>
              </h2>

              <div className="space-y-4 mb-8">
                <p className="text-body leading-relaxed text-base font-grotesk">
                  <span className="text-3xl font-display-alt text-accent float-left mr-2 mt-1 leading-none">
                    I
                  </span>
                  &nbsp;started coding out of curiosity and fell in love with building things that people actually use. From web apps to mobile experiences, I enjoy the full journey of creation.
                </p>
                <p className="text-body leading-relaxed text-base font-grotesk">
                  I&apos;m currently a <span className="text-accent font-semibold">{personalInfo.education}</span>, balancing academics with building real-world projects.
                </p>
                <p className="text-body leading-relaxed text-base font-grotesk">
                  When I&apos;m not coding, I&apos;m exploring new tech or leveling up my skills. Every line of code is a step toward something better.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8">
                {[
                  { icon: Calendar, value: "20", label: "Years Old", color: "from-accent/20 to-accent/5" },
                  { icon: Zap, value: "1yr", label: "Experience", color: "from-amber-400/20 to-amber-400/5" },
                  { icon: Cpu, value: "∞", label: "Curiosity", color: "from-emerald-400/20 to-emerald-400/5" },
                ].map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="rounded-xl p-3.5 text-center border border-gray-100 dark:border-white/5"
                  >
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${fact.color} mb-2`}>
                      <fact.icon size={14} className="text-accent" />
                    </div>
                    <p className="text-lg font-bold font-display text-heading leading-tight">{fact.value}</p>
                    <p className="text-[10px] font-mono text-body">{fact.label}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-3xl sm:text-4xl font-signature text-accent font-bold min-h-[48px]">
                {text}<span className="animate-pulse">|</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold font-display text-heading mb-6 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-accent inline-block" />
                My Toolkit
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {(["Web", "App"] as const).map((category) => {
                  const items = techStack.filter((t) => t.category === category);
                  return (
                    <div key={category}>
                      <p className="text-[11px] font-mono text-body/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-1 h-3 rounded-full bg-accent/40 inline-block" />
                        {category === "Web" ? "Web Development" : "App Development"}
                      </p>
                      <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 gap-2.5"
                      >
                        {items.map((tech) => (
                          <motion.div
                            key={tech.name}
                            variants={item}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="card rounded-xl p-3.5 flex items-center gap-3 cursor-default relative group"
                          >
                            <div className={`w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center shadow-sm`}>
                              <img
                                src={`https://cdn.simpleicons.org/${tech.icon}/ffffff`}
                                alt={tech.name}
                                className="w-5 h-5"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-medium font-mono text-heading block truncate">{tech.name}</span>
                              <div className="w-full h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden mt-1.5">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${tech.level}%` }}
                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
                                />
                              </div>
                            </div>
                            <span className="text-[10px] font-mono text-accent/50">{tech.level}%</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
