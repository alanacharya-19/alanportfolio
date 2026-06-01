import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Star, Zap } from "lucide-react";
import { personalInfo } from "@/lib/data";
import alanImg from "@/assets/alan.png";
import { useIsMobile } from "@/lib/useIsMobile";

export default function Hero() {
  const isMobile = useIsMobile();
  return (
    <section id="hero" className="min-h-[80vh] md:min-h-screen pt-12 sm:pt-16 md:pt-24 pb-10 md:pb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-base md:text-lg text-accent mb-4 font-script tracking-wide">
              {personalInfo.handwritten}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heading leading-[1.1] mb-3 tracking-tight font-name">
              {personalInfo.name}
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display text-heading leading-[1.2] mb-6 max-w-xl">
              Building <span className="font-script italic">apps</span> that{" "}
              <span className="underline-scribble font-script text-accent">make a difference</span>.
            </h2>

            <p className="text-body text-base md:text-lg leading-relaxed mb-8 max-w-lg font-grotesk">
              {personalInfo.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl gradient-accent text-white font-medium text-sm font-mono hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
              >
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </a>
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-gray-200 dark:border-white/10 text-heading font-medium text-sm font-display hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
              >
                <Download size={15} strokeWidth={2} />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center md:justify-end overflow-visible"
          >
            <div className="relative w-full max-w-[350px] sm:max-w-[400px] mx-auto">
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -6, -2, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                  className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto"
                >
                  {!isMobile && (
                    <motion.div
                      animate={{
                        rotate: 360,
                        borderRadius: [
                          "50% 50% 50% 50%",
                          "42% 58% 62% 38%",
                          "56% 44% 38% 62%",
                          "48% 52% 58% 42%",
                          "60% 40% 48% 52%",
                          "38% 62% 54% 46%",
                          "52% 48% 42% 58%",
                          "50% 50% 50% 50%",
                        ],
                      }}
                      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -inset-5 sm:-inset-7 border-[4px] border-dotted border-accent/50 dark:border-accent/40 pointer-events-none"
                    />
                  )}
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <img
                      src={alanImg}
                      alt={personalInfo.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectPosition: "50% 30%" }}
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full shadow-[0_0_0_4px_rgba(108,99,255,0.35),0_0_0_6px_rgba(168,85,247,0.2),0_0_30px_rgba(108,99,255,0.2)] pointer-events-none" />
                  {!isMobile && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        background: "conic-gradient(from 0deg, transparent 25%, rgba(108,99,255,0.5) 40%, rgba(168,85,247,0.5) 50%, rgba(236,72,153,0.3) 60%, transparent 75%)",
                        mask: "radial-gradient(transparent 65%, black 66%, black 71%, transparent 72%)",
                        WebkitMask: "radial-gradient(transparent 65%, black 66%, black 71%, transparent 72%)",
                      }}
                    />
                  )}
                  <motion.div
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-[-4px] rounded-full ring-[3px] ring-accent/50 pointer-events-none"
                  />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -5, -2, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                  className="absolute top-1 right-1 sm:top-4 sm:-right-6 glass rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg shadow-black/5"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 shadow-sm shadow-green-500/30" />
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold font-mono text-heading whitespace-nowrap">Available for</p>
                      <p className="text-[10px] sm:text-xs text-accent font-signature">freelance</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 2, 6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: [0.45, 0, 0.55, 1], delay: 0.5 }}
                  className="absolute -bottom-1 left-0 sm:-bottom-4 sm:-left-4 glass rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg shadow-black/5"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <Sparkles size={14} className="sm:size-4 text-accent" />
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold font-display text-heading">1 Year</p>
                      <p className="text-[10px] sm:text-xs text-body font-script">Of Experience</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 4, 1, 5, 0], y: [0, -4, -1, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: [0.45, 0, 0.55, 1], delay: 1 }}
                  className="absolute -top-2 -left-3 sm:-top-6 sm:-left-10 glass rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg shadow-black/5"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <Star size={14} className="sm:size-4 text-amber-400" />
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold font-mono text-heading">100%</p>
                      <p className="text-[10px] sm:text-xs text-body font-script">Satisfaction</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -5, -2, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: [0.45, 0, 0.55, 1], delay: 1.5 }}
                  className="absolute -bottom-1 -right-4 sm:bottom-2 sm:-right-10 glass rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg shadow-black/5"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <Zap size={14} className="sm:size-4 text-accent" />
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold font-mono text-heading">Ship Fast</p>
                      <p className="text-[10px] sm:text-xs text-body font-script">Iterate Often</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex lg:hidden justify-center gap-4 mt-12 z-30">
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 glass rounded-xl shadow-lg shadow-black/5 hover:scale-110 transition-transform" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="#333" className="w-5 h-5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 glass rounded-xl shadow-lg shadow-black/5 hover:scale-110 transition-transform" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 glass rounded-xl shadow-lg shadow-black/5 hover:scale-110 transition-transform" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="#E4405F" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href={personalInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 glass rounded-xl shadow-lg shadow-black/5 hover:scale-110 transition-transform" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="#FF0000" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 flex-col gap-3 sm:gap-4 z-30">
        <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 glass rounded-xl shadow-lg shadow-black/5 hover:scale-110 transition-transform" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="#333" className="w-5 h-5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
        </a>
        <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 glass rounded-xl shadow-lg shadow-black/5 hover:scale-110 transition-transform" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
        </a>
        <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 glass rounded-xl shadow-lg shadow-black/5 hover:scale-110 transition-transform" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="#E4405F" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
        </a>
        <a href={personalInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 glass rounded-xl shadow-lg shadow-black/5 hover:scale-110 transition-transform" aria-label="YouTube">
          <svg viewBox="0 0 24 24" fill="#FF0000" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
        </a>
      </div>
    </section>
  );
}
