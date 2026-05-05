export default function Partners() {
  const partners = [
    "Four Seasons",
    "Ritz Carlton",
    "Hermès",
    "Rolls Royce",
    "Michelin Stars",
    "Emirates",
    "Sotheby's",
    "Christie's",
  ];

  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">شركاؤنا</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نعتز بالعمل مع أرقى العلامات التجارية وأكثرها ابتكاراً حول العالم
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 border border-border rounded-sm hover:border-accent hover:bg-muted/50 transition-all duration-300 group"
            >
              <span className="text-center font-semibold text-muted-foreground group-hover:text-accent transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
