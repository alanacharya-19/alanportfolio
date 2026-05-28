import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display-alt text-heading tracking-tight">
            My <span className="text-accent font-script">journey</span> so far
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

          <div className="space-y-10 md:space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14 md:pl-16"
              >
                <div className={`absolute left-4 md:left-6 top-1 w-3.5 h-3.5 rounded-full border-2 bg-white dark:bg-[#0a0a0f] ${
                  i === 0 ? "border-accent shadow-[0_0_12px_rgba(108,99,255,0.3)]" : "border-accent/40"
                }`} />

                <div className="card rounded-2xl p-5 md:p-6">
                  <span className="text-xs font-semibold font-display text-accent tracking-wide">{item.period}</span>
                  <h3 className="text-lg font-bold font-display-alt text-heading mt-1 mb-0.5">{item.role}</h3>
                  <p className="text-sm font-medium font-mono text-accent/70 mb-3">{item.company}</p>
                  <p className="text-sm font-grotesk text-body leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
