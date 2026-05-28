import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import CTAFooter from "@/components/CTAFooter";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Background from "@/components/Background";
import ThemeProvider from "@/components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen relative">
        <Background />
        <Sidebar />
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Experience />
        <CTAFooter />
        <Footer />
        <BackToTop />
      </main>
    </ThemeProvider>
  );
}
