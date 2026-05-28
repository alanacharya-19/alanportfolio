import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShoppingBag, FileText, KanbanSquare, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

const previewIcons: Record<number, React.ElementType> = {
  1: BarChart3,
  2: ShoppingBag,
  3: FileText,
  4: KanbanSquare,
  5: ShoppingBag,
  6: FileText,
};

export default function Projects() {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = "none";
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const fallback = parent.querySelector("[data-fallback]") as HTMLElement;
      if (fallback) fallback.style.display = "flex";
    }
  };

  return (
    <section id="projects" className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display-alt text-heading tracking-tight">
              Things I&apos;ve <span className="text-accent font-script">built</span>
            </h2>
          </div>
          <a
            href="https://github.com/alanacharya-19?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium font-mono text-body hover:text-accent transition-colors"
          >
            View all projects
            <ArrowRight size={14} strokeWidth={2} />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => {
            const PreviewIcon = previewIcons[project.id] || BarChart3;
            return (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="card rounded-2xl overflow-hidden group cursor-pointer block"
              >
                <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={handleImgError}
                      />
                      <div data-fallback className="hidden absolute inset-0 flex items-center justify-center">
                        <div className="w-full px-6">
                          <div className="glass rounded-xl p-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <PreviewIcon size={20} className="text-white/60" />
                              <span className="text-white/40 text-xs">● ● ●</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/10 w-3/4" />
                            <div className="h-2 rounded-full bg-white/10 w-1/2" />
                            <div className="flex gap-1.5 mt-2">
                              <span className="h-1.5 rounded-full bg-white/10 flex-1" />
                              <span className="h-1.5 rounded-full bg-white/10 flex-1" />
                              <span className="h-1.5 rounded-full bg-accent/30 flex-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full px-6">
                        <div className="glass rounded-xl p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <PreviewIcon size={20} className="text-white/60" />
                            <span className="text-white/40 text-xs">● ● ●</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/10 w-3/4" />
                          <div className="h-2 rounded-full bg-white/10 w-1/2" />
                          <div className="flex gap-1.5 mt-2">
                            <span className="h-1.5 rounded-full bg-white/10 flex-1" />
                            <span className="h-1.5 rounded-full bg-white/10 flex-1" />
                            <span className="h-1.5 rounded-full bg-accent/30 flex-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="p-2 rounded-xl bg-white/20 backdrop-blur-sm text-white inline-flex">
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold font-grotesk text-heading mb-1.5">{project.title}</h3>
                  <p className="text-sm font-sans text-body leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-accent/5 text-accent text-[11px] font-medium font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <a
            href="https://github.com/alanacharya-19?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium font-mono text-accent"
          >
            View all projects
            <ArrowRight size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
