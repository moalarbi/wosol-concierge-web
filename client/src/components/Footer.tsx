import {
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-bold">W</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">WOSOL</span>
                <span className="text-xs text-muted-foreground">CONCIERGE</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              خدمة كونسيرج حصرية تحول احتياجاتك إلى تجارب استثنائية
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              الروابط السريعة
            </h3>
            <ul className="space-y-2">
              {["الرئيسية", "من نحن", "الخدمات", "التجارب", "اتصل بنا"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              الخدمات
            </h3>
            <ul className="space-y-2">
              {[
                "الفعاليات الخاصة",
                "الصحة والاستجمام",
                "الإقامة الفاخرة",
                "اليخوت الفاخرة",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              تواصل معنا
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm text-muted-foreground">
                  طريق الملك عبدالعزيز، الرياض 13315، السعودية
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+966500009979"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  +966-50-000-9979
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@wosolconcierge.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  info@wosolconcierge.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Wosol Concierge. جميع الحقوق محفوظة.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-accent" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-accent" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              الشروط والأحكام
            </a>
            <span className="text-border">|</span>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
