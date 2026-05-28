import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

const LinkedInSvg = () => (
  <svg viewBox="0 0 24 24" fill="white" width={18} height={18}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function CTAFooter() {
  const [formState, setFormState] = useState({ subject: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const handleBlur = (field: string) => {
    setFocused(null);
    setTouched((prev) => new Set(prev).add(field));
  };

  const isInvalid = (field: string) => touched.has(field) && !formState[field as keyof typeof formState].trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(formState.message)}`;
    window.open(gmailUrl);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}` },
    { icon: MapPin, label: "Location", value: personalInfo.location },
  ];

  return (
    <section id="contact" className="py-14 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/5 text-accent text-xs font-semibold font-mono mb-4 tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display-alt text-heading leading-[1.15]">
            Let&apos;s build something{" "}
            <span className="text-accent font-script">amazing</span> together.
          </h2>
          <p className="text-body text-base mt-4 max-w-lg mx-auto font-grotesk">
            Have a project in mind or just want to chat? Drop me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactItems.map((item, i) => {
              const content = (
                <>
                  <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-body mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium font-display text-heading">{item.value}</p>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={item.label}
                  onClick={() => { if (item.href) window.location.href = item.href; }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`card rounded-2xl p-5 flex items-center gap-4 group hover:border-accent/20 transition-all duration-300 ${item.href ? "cursor-pointer" : ""}`}
                >
                  {content}
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="card rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/5 flex items-center justify-center shrink-0">
                <div className="relative">
                  <MessageCircle size={20} className="text-green-500" />
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
                </div>
              </div>
              <div>
                <p className="text-xs font-display text-body mb-0.5">Availability</p>
                <p className="text-sm font-medium font-script text-heading flex items-center gap-2">
                  Open to opportunities
                  <span className="text-[10px] font-mono text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">&lt; 24h reply</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex gap-2 pt-2"
            >
              {[
                { icon: "github", label: "GitHub", bg: "bg-gray-900", href: personalInfo.social.github },
                { label: "LinkedIn", bg: "bg-blue-700", href: personalInfo.social.linkedin, svg: true },
                { icon: "instagram", label: "Instagram", bg: "bg-gradient-to-br from-purple-500 to-pink-500", href: personalInfo.social.instagram },
                { icon: "youtube", label: "YouTube", bg: "bg-red-600", href: personalInfo.social.youtube },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300`}
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.svg ? (
                    <LinkedInSvg />
                  ) : (
                    <img
                      src={`https://cdn.simpleicons.org/${s.icon}/ffffff`}
                      alt={s.label}
                      className="w-5 h-5"
                    />
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="card rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 space-y-5"
            >
              <div className="relative">
                <label className={`block text-xs font-display font-semibold mb-2 transition-colors duration-300 ${focused === "subject" ? "text-accent" : isInvalid("subject") ? "text-red-500" : "text-body"}`}>
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => handleBlur("subject")}
                  className={`w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] text-heading text-sm font-sans outline-none transition-all duration-300 focus:border-accent/40 focus:ring-2 focus:ring-accent/10 placeholder:text-body/40 ${isInvalid("subject") ? "border-red-400" : "border-[var(--card-border)]"}`}
                  placeholder="What's this about?"
                />
                {isInvalid("subject") && (
                  <p className="text-[11px] text-red-400 mt-1 font-mono">Required</p>
                )}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focused === "subject" ? 1 : 0 }}
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full origin-left"
                />
              </div>
              <div className="relative">
                <label className={`block text-xs font-display font-semibold mb-2 transition-colors duration-300 ${focused === "message" ? "text-accent" : isInvalid("message") ? "text-red-500" : "text-body"}`}>
                  Your Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => handleBlur("message")}
                  className={`w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] text-heading text-sm font-sans outline-none transition-all duration-300 focus:border-accent/40 focus:ring-2 focus:ring-accent/10 placeholder:text-body/40 resize-none ${isInvalid("message") ? "border-red-400" : "border-[var(--card-border)]"}`}
                  placeholder="Tell me about your project or just say hi..."
                />
                {isInvalid("message") && (
                  <p className="text-[11px] text-red-400 mt-1 font-mono">Required</p>
                )}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focused === "message" ? 1 : 0 }}
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full origin-left"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl gradient-accent text-white font-bold text-sm font-display-alt hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} strokeWidth={2} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
