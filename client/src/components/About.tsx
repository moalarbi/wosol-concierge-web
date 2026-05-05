export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                منذ عام 2011، نقدم خدمات كونسيرج حصرية للأفراد والشركات الذين يقدرون الجودة والاحترافية
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                في وصول كونسيرج، نفهم أن عملائنا يعملون بشكل مكثف ويحتاجون دعماً متخصصاً. نحن نقدم خدمات فاخرة تحول احتياجاتهم اليومية إلى تجارب منظمة وفريدة ومختلفة في أسلوب حياتهم.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">الخبرة والاحترافية</h3>
                  <p className="text-muted-foreground">
                    فريق متخصص بخبرة سنوات في مجال الخدمات الفاخرة
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">التفاني والالتزام</h3>
                  <p className="text-muted-foreground">
                    نضع احتياجاتك في قلب كل ما نفعله
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">الشراكات العالمية</h3>
                  <p className="text-muted-foreground">
                    نعمل مع أرقى العلامات التجارية حول العالم
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-card border border-border rounded-sm">
                <div className="text-4xl font-bold text-accent mb-2">2011</div>
                <p className="text-muted-foreground">سنة التأسيس</p>
              </div>
              <div className="p-8 bg-card border border-border rounded-sm">
                <div className="text-4xl font-bold text-accent mb-2">100+</div>
                <p className="text-muted-foreground">عميل مميز</p>
              </div>
              <div className="p-8 bg-card border border-border rounded-sm">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <p className="text-muted-foreground">شريك عالمي</p>
              </div>
              <div className="p-8 bg-card border border-border rounded-sm">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-muted-foreground">دعم مستمر</p>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-semibold rounded-sm">
              اعرف المزيد
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
