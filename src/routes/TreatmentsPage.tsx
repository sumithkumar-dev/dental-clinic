import { Link } from "react-router-dom";
import { CalendarDays, Phone, Clock } from "lucide-react";
import { TREATMENTS } from "@/lib/treatments";
import { CLINIC } from "@/lib/clinic";
import { SectionHeading } from "@/components/SectionHeading";
import { usePageMeta } from "@/lib/usePageMeta";

export default function TreatmentsPage() {
  usePageMeta(
    "Dental Treatments & Pricing — SmileCraft Dental, Hyderabad",
    "Explore our full range of dental treatments — implants, aligners, root canals, whitening, smile makeovers and gum care. Transparent pricing."
  );
  return (
    <>
      <section className="bg-gradient-hero py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Comprehensive dental care, one premium clinic"
            description="Every service is performed in-house by our experienced team using globally trusted brands and the latest digital technology."
          />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENTS.map((t) => (
              <article key={t.slug} className="group rounded-3xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1 transition-all flex flex-col">
                <div className="aspect-[16/9] bg-gradient-brand relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_60%)]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <t.icon className="h-20 w-20 text-primary-foreground/90 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground">{t.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{t.long}</p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{t.duration}</span>
                  </div>
                  <div className="mt-5 pt-5 border-t border-border flex items-end justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-primary">{t.price}</p>
                    </div>
                    <a href={CLINIC.phoneTel} className="rounded-full bg-primary-soft text-primary px-4 py-2 text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-secondary/60 border border-border p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Not sure which treatment you need?</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Book a free 15-minute consultation. We'll examine you, explain your options honestly and give you transparent pricing.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft">
                <CalendarDays className="h-4 w-4" /> Book Free Consultation
              </Link>
              <a href={CLINIC.phoneTel} className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary">
                <Phone className="h-4 w-4" /> Call {CLINIC.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
