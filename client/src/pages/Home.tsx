import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experiences from "@/components/Experiences";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

/**
 * Wosol Concierge - Luxury Concierge Service Website
 * Design: Dark luxury aesthetic inspired by Royist.com
 * Colors: Dark background (#0f0f0f) with lime green accents (#00ff00)
 * Language: Arabic (RTL)
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experiences />
        <Partners />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
