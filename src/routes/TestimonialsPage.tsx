import { Star, ExternalLink } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { usePageMeta } from "@/lib/usePageMeta";

export default function TestimonialsPage() {
  usePageMeta(
    "Patient Reviews — SmileCraft Dental, Hyderabad",
    "Read 500+ genuine Google reviews from happy patients of SmileCraft Dental in Jubilee Hills, Hyderabad."
  );
  return (
    <>
      <section className="bg-gradient-hero py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary-soft px-3 py-1 rounded-full mb-4">Patient Stories</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">Loved by Hyderabad</h1>

            <div className="mt-8 inline-flex items-center gap-6 rounded-2xl bg-card border border-border px-8 py-5 shadow-card">
              <div>
                <div className="text-5xl font-bold text-foreground leading-none">4.9</div>
                <div className="flex items-center gap-0.5 mt-1 justify-center">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
              </div>
              <div className="h-14 w-px bg-border" />
              <div className="text-left">
                <p className="font-semibold text-foreground">500+ reviews</p>
                <p className="text-xs text-muted-foreground">Verified on Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => <ReviewCard key={t.name} t={t} />)}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
              View more on Google <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Have a story to share?" description="If we made you smile, we'd love to hear about it. Your review helps another patient feel confident choosing SmileCraft." />
          <div className="mt-8 text-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft">
              Leave a Google review
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
