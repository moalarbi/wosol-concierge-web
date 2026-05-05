import { Heart, Waves, Home, Sparkles, Plane, Users } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "الفعاليات الخاصة",
    description: "تنظيم فعاليات فاخرة وحفلات استثنائية مصممة خصيصاً لك",
  },
  {
    icon: Heart,
    title: "الصحة والاستجمام",
    description: "برامج صحية وعلاجات استرخاء من أفضل المتخصصين",
  },
  {
    icon: Home,
    title: "الإقامة الفاخرة",
    description: "حجز في أرقى الفنادق والمنتجعات حول العالم",
  },
  {
    icon: Waves,
    title: "اليخوت الفاخرة",
    description: "تجارب بحرية حصرية على أفخم اليخوت",
  },
  {
    icon: Plane,
    title: "السفر والتنقل",
    description: "ترتيبات سفر شاملة بأعلى معايير الراحة",
  },
  {
    icon: Users,
    title: "الخدمات الشخصية",
    description: "دعم شخصي متكامل لتسهيل حياتك اليومية",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">ماذا نقدم</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            خدماتنا فريدة من نوعها مثل عملائنا، نقدم لكم تجربة استثنائية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 border border-border hover:border-accent transition-all duration-300 bg-background hover:bg-muted/50 rounded-sm"
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-accent/10 group-hover:bg-accent/20 transition-colors rounded-sm">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover accent line */}
                <div className="mt-6 h-1 w-0 bg-accent group-hover:w-12 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
