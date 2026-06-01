import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Sidebar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 sm:top-6 left-4 right-4 z-50 flex justify-center"
      >
        <div className="w-full max-w-2xl mx-auto relative">
          <div className="glass rounded-2xl px-4 sm:px-6 h-14 flex items-center justify-between shadow-lg shadow-black/5 relative overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent to-accent-light"
              style={{ width: `${progress * 100}%` }}
            />
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
              className="text-lg font-bold font-display-alt text-accent tracking-tight"
            >
              A A
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`px-4 py-1.5 rounded-xl text-sm font-medium font-mono tracking-wide transition-all duration-300 cursor-pointer ${
                    active === href
                      ? "bg-accent/10 text-accent"
                      : "text-body hover:text-heading hover:bg-gray-50 dark:hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-xl text-body hover:text-heading hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
                aria-label="Toggle theme"
              >
                {mounted ? (
                  resolvedTheme === "dark" ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />
                ) : (
                  <div className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-xl text-body hover:text-heading hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 -z-10 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
                  onClick={() => setMobileOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 right-0 mt-2 md:hidden"
                >
                  <div className="rounded-2xl p-2 shadow-lg shadow-black/5 bg-white dark:bg-[#0f0f19] border border-gray-200 dark:border-white/10">
                    {navItems.map(({ href, label }) => (
                      <button
                        key={href}
                        onClick={() => handleNav(href)}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm font-medium font-mono tracking-wide text-left transition-all duration-300 cursor-pointer ${
                          active === href
                            ? "bg-accent/10 text-accent"
                            : "text-body hover:text-heading hover:bg-gray-50 dark:hover:bg-white/5"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <div className="h-12" />
    </>
  );
}
