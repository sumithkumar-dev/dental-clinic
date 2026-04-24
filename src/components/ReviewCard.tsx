import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/testimonials";

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
      <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/>
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7C13.42 14.62 18.27 10.75 24 10.75z"/>
    </svg>
  );
}

export function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <article className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-shadow flex flex-col h-full">
      <div className="flex items-center gap-3">
        <div
          className="h-11 w-11 rounded-full grid place-items-center text-primary-foreground font-semibold text-sm shrink-0"
          style={{ backgroundColor: t.color }}
        >
          {t.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground truncate">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.date} · Local Guide</p>
        </div>
        <GoogleG />
      </div>

      <div className="flex items-center gap-0.5 mt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>

      <p className="mt-3 text-sm text-foreground/80 leading-relaxed flex-1">{t.text}</p>

      <p className="mt-4 text-xs font-medium text-primary">Treatment: {t.treatment}</p>
    </article>
  );
}
