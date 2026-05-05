import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-card">
      <div className="container max-w-2xl mx-auto">
        <div className="space-y-8 text-center">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              اشترك معنا للبقاء على اطلاع
            </h2>
            <p className="text-lg text-muted-foreground">
              احصل على آخر الأخبار والعروض الحصرية مباشرة في بريدك الإلكتروني
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pr-12 pl-4 py-4 bg-background border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-semibold rounded-sm whitespace-nowrap"
            >
              اشترك
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="p-4 bg-accent/10 border border-accent rounded-sm">
              <p className="text-accent font-semibold">
                شكراً لاشتراكك! تحقق من بريدك الإلكتروني
              </p>
            </div>
          )}

          {/* Privacy note */}
          <p className="text-xs text-muted-foreground">
            نحن نحترم خصوصيتك. لن نشارك بيانات بريدك الإلكتروني مع أي جهة أخرى
          </p>
        </div>
      </div>
    </section>
  );
}
