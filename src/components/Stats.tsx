import { motion } from "framer-motion";
import { Code2, Sparkles, Zap, Smile } from "lucide-react";
import { stats } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Code2, Zap, Smile,
};

function useInViewOnce(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInViewOnce(ref);
  const num = parseInt(value);
  const isNumeric = !isNaN(num);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = num / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, num, isNumeric]);

  return (
    <span ref={ref} className="text-xl sm:text-2xl md:text-3xl font-bold font-display-alt text-heading tracking-tight">
      {isNumeric ? count : value}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card rounded-2xl md:rounded-3xl p-6 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
            {stats.map((stat, i) => {
              const Icon = iconMap[stat.icon] || Sparkles;
              return (
                <div key={stat.label} className={`relative flex items-center gap-3 md:gap-4 md:justify-center md:px-6 ${i < 2 ? "border-b md:border-b-0 pb-4 md:pb-0" : ""} md:border-b-0 ${i === 0 ? "border-r md:border-r-0" : ""} border-gray-100 dark:border-white/5`}>
                  {i > 0 && (
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-100 dark:bg-white/5" />
                  )}
                  <div className="p-2.5 rounded-xl bg-accent/5 text-accent shrink-0">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <AnimatedValue value={stat.value} />
                    <p className="text-xs md:text-sm font-script text-body whitespace-nowrap">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
