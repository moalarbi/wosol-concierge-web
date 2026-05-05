export default function Experiences() {
  const experiences = [
    {
      title: "عشاء خاص في باريس",
      description: "تجربة طهي حصرية مع شيف عالمي في أحد أرقى المطاعم",
      category: "فعاليات",
    },
    {
      title: "منتجع صحي فاخر",
      description: "برنامج استرخاء شامل في أفخم منتجعات العالم",
      category: "صحة",
    },
    {
      title: "يخت خاص في المتوسط",
      description: "رحلة بحرية حصرية مع طاقم متخصص وخدمات فاخرة",
      category: "بحري",
    },
    {
      title: "جولة تسوق في ميلان",
      description: "تجربة تسوق شخصية مع مستشار أزياء متخصص",
      category: "تسوق",
    },
    {
      title: "إقامة في قصر تاريخي",
      description: "الإقامة في أحد أعرق القصور الأوروبية",
      category: "إقامة",
    },
    {
      title: "رحلة طيران خاصة",
      description: "سفر براحة ورفاهية على متن طائرة خاصة",
      category: "سفر",
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">التجارب الحصرية</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف بعض التجارب الفريدة التي قدمناها لعملائنا
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm border border-border hover:border-accent transition-all duration-300"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative p-8 space-y-4">
                {/* Category badge */}
                <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                  {exp.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                  {exp.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Arrow indicator */}
                <div className="pt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">اكتشف المزيد</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
