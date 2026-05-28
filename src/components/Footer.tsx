import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

const LinkedInSvg = () => (
  <svg viewBox="0 0 24 24" fill="white" width={15} height={15}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const projectLinks = [
  { href: "https://github.com/alanacharya-19/CineVerse", label: "CineVerse" },
  { href: "https://github.com/alanacharya-19/Chattify-ChatApp", label: "Chattify" },
  { href: "https://github.com/alanacharya-19/CookMate-AiRecipeApp", label: "CookMate" },
  { href: "https://github.com/alanacharya-19/Instagram-Clone---MERN-Stack", label: "Instagram Clone" },
];

const socials = [
  { icon: "github", bg: "bg-gray-400 dark:bg-gray-600", href: personalInfo.social.github, label: "GitHub" },
  { label: "LinkedIn", bg: "bg-gray-400 dark:bg-gray-600", href: personalInfo.social.linkedin, svg: true },
  { icon: "instagram", bg: "bg-gray-400 dark:bg-gray-600", href: personalInfo.social.instagram, label: "Instagram" },
  { icon: "youtube", bg: "bg-gray-400 dark:bg-gray-600", href: personalInfo.social.youtube, label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-8 md:gap-12 py-14 md:py-16">
          <div className="sm:col-span-4">
            <a href="#hero" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-2xl gradient-accent flex items-center justify-center shadow-md shadow-accent/20">
                <span className="text-white font-bold font-display-alt text-sm">{personalInfo.initials}</span>
              </div>
              <div>
                <p className="text-sm font-bold text-heading font-name">{personalInfo.name}</p>
                <p className="text-[11px] font-mono text-body/40">{personalInfo.role}</p>
              </div>
            </a>
            <p className="text-sm font-grotesk text-body/60 leading-relaxed max-w-xs mb-5">
              Full-stack developer passionate about building web &amp; mobile apps that people love to use.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300`}
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.svg ? <LinkedInSvg /> : <img src={`https://cdn.simpleicons.org/${s.icon}/ffffff`} alt={s.label} className="w-4 h-4" />}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2">
            <p className="text-[11px] font-mono text-body/30 uppercase tracking-[0.15em] mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium font-grotesk text-body/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-3">
            <p className="text-[11px] font-mono text-body/30 uppercase tracking-[0.15em] mb-5">Projects</p>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium font-grotesk text-body/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-3">
            <p className="text-[11px] font-mono text-body/30 uppercase tracking-[0.15em] mb-5">Contact</p>
            <div className="space-y-3">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium font-grotesk text-body/70 hover:text-accent transition-colors duration-200 block"
              >
                {personalInfo.email}
              </a>
              <p className="text-sm font-medium font-grotesk text-body/50">
                {personalInfo.location}
              </p>
              <p className="text-xs font-mono text-green-500/70 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-sm shadow-green-500/30 animate-pulse" />
                Available for projects
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 md:py-8 border-t border-gray-100/50 dark:border-white/[0.03] flex items-center justify-center">
          <p className="text-xs font-mono text-body/60 flex items-center gap-1">
            &copy; {year} Crafted with <Heart size={10} className="text-red-400 fill-red-400" /> by{" "}
            <span className="font-bold font-script text-heading">{personalInfo.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
