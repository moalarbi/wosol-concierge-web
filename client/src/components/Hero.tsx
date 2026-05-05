export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card -z-10" />

      {/* Geometric circles background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 border-2 border-accent/20 rounded-full" />
        <div className="absolute bottom-40 left-20 w-72 h-72 border-2 border-accent/10 rounded-full" />
      </div>

      <div className="container max-w-5xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          {/* Main Tagline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              حقق توقعاتك
              <br />
              <span className="text-accent">الفاخرة</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              خدمة كونسيرج حصرية مصممة لأسلوب حياتك
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/80 leading-relaxed">
            في وصول كونسيرج، نفهم أن وقتك ثمين. نحن نقدم خدمات فاخرة متخصصة تحول احتياجاتك اليومية إلى تجارب استثنائية
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold rounded-sm">
              استكشف الخدمات
            </button>
            <button className="px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-semibold rounded-sm">
              تواصل معنا
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
