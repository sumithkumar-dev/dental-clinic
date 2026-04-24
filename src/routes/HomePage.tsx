import { Link } from "react-router-dom";
import { Phone, CalendarDays, Star, Award, Users, Sparkles, ShieldCheck, HeartPulse, Clock, ArrowRight, MapPin } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { TREATMENTS } from "@/lib/treatments";
import { TESTIMONIALS } from "@/lib/testimonials";
import { SectionHeading } from "@/components/SectionHeading";
import { ReviewCard } from "@/components/ReviewCard";
import { BeforeAfter } from "@/components/BeforeAfter";
import { usePageMeta } from "@/lib/usePageMeta";
import heroClinic from "@/assets/hero-clinic.jpg";
import doctor from "@/assets/doctor.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

export default function HomePage() {
  usePageMeta(
    "SmileCraft Dental — Best Dentist in Jubilee Hills, Hyderabad",
    "Premium painless dentistry in Jubilee Hills, Hyderabad. Implants, aligners, smile makeovers, root canals & more. Book your appointment today."
  );
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-background/70 backdrop-blur px-4 py-1.5 border border-border shadow-soft text-xs font-semibold text-primary">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                Now accepting new patients in Jubilee Hills
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] text-balance">
                Creating <span className="bg-gradient-brand bg-clip-text text-transparent">confident smiles</span> every day
              </h1>

              <p className="mt-5 text-lg text-muted-foreground max-w-xl text-balance">
                Modern, painless, evidence-based dentistry in the heart of Hyderabad. Premium global materials, digital precision and a team that truly cares.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-card hover:shadow-glow transition-shadow">
                  <CalendarDays className="h-5 w-5" /> Book Appointment
                </Link>
                <a href={CLINIC.phoneTel} className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3.5 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
                {[
                  { v: "10+", l: "Years" },
                  { v: "5000+", l: "Smiles" },
                  { v: "4.9★", l: "Google" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-background/70 backdrop-blur border border-border px-4 py-3 text-center shadow-soft">
                    <div className="text-2xl font-bold text-foreground">{s.v}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-3xl rounded-3xl" />
              <img
                src={heroClinic}
                alt="SmileCraft Dental clinic interior"
                width={1600}
                height={1100}
                className="relative rounded-3xl shadow-glow border border-border w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 hidden sm:block bg-card rounded-2xl shadow-card border border-border p-4 w-56">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                  </div>
                  <span className="text-sm font-bold">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Based on 500+ Google reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, v: "4.9 / 5.0", l: "500+ Google reviews", c: "text-gold" },
              { icon: Award, v: "10+ Years", l: "Of trusted experience", c: "text-primary" },
              { icon: Users, v: "5000+", l: "Happy patients served", c: "text-success" },
              { icon: ShieldCheck, v: "100% Sterile", l: "Hospital-grade safety", c: "text-primary" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-xl bg-primary-soft grid place-items-center ${s.c}`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">{s.v}</div>
                  <div className="text-sm text-muted-foreground">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Treatments"
            title="World-class dentistry, delivered gently"
            description="From routine cleanings to complete smile transformations — every treatment uses the latest technology and premium global materials."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENTS.map((t) => (
              <article key={t.slug} className="group rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
                <div className="h-14 w-14 rounded-2xl bg-gradient-brand grid place-items-center text-primary-foreground shadow-soft group-hover:scale-110 transition-transform">
                  <t.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.description}</p>
                <div className="mt-5 flex items-end justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="text-lg font-bold text-primary">{t.price}</p>
                  </div>
                  <Link to="/treatments" className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR PREVIEW */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-brand opacity-20 blur-2xl rounded-3xl" />
              <img src={doctor} alt="Dr. Rajesh Kumar" width={1024} height={1280} loading="lazy" className="relative rounded-3xl shadow-card w-full object-cover aspect-[4/5]" />
              <div className="absolute bottom-6 right-6 bg-card rounded-2xl shadow-card border border-border px-5 py-3">
                <p className="text-xs text-muted-foreground">Lead Dentist</p>
                <p className="font-bold text-foreground">Dr. Rajesh Kumar</p>
                <p className="text-xs text-primary font-semibold">BDS, MDS</p>
              </div>
            </div>

            <div>
              <SectionHeading
                align="left"
                eyebrow="Meet Your Dentist"
                title="Caring hands, expert craft"
                description="With over a decade of experience and thousands of smiles transformed, Dr. Rajesh Kumar leads SmileCraft with one simple promise — honest dentistry, done right the first time."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "BDS, MDS in Cosmetic & Restorative Dentistry",
                  "Certified in Digital Smile Design (DSD)",
                  "10+ years across India and international fellowships",
                  "Special focus on anxious and pediatric patients",
                ].map((p) => (
                  <li key={p} className="flex gap-3 text-foreground">
                    <ShieldCheck className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft">
                Read full profile <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Real Results"
            title="Smiles transformed at SmileCraft"
            description="Drag the slider to see the difference. Real patients, real outcomes — no filters, no retouching."
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BeforeAfter before={before1} after={after1} label="Smile Makeover · 6 weeks" />
            <BeforeAfter before={before2} after={after2} label="Laser Whitening · single visit" />
          </div>
          <div className="text-center mt-10">
            <Link to="/results" className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
              View all cases <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Patient Stories"
            title="Loved by 500+ patients across Hyderabad"
            description="Genuine reviews from people who walked into SmileCraft and walked out smiling."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => <ReviewCard key={t.name} t={t} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials" className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
              Read all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why SmileCraft"
            title="A different kind of dental experience"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HeartPulse, t: "Truly Painless", d: "Topical numbing, single-tooth anesthesia and gentle techniques mean most patients feel nothing at all." },
              { icon: Sparkles, t: "Modern Technology", d: "Digital X-rays, 3D scans, laser dentistry and Digital Smile Design — all under one roof." },
              { icon: ShieldCheck, t: "Hospital-Grade Safety", d: "Autoclave sterilization, single-use instruments and HEPA-filtered air for every appointment." },
              { icon: Clock, t: "Respect for Your Time", d: "Punctual appointments, same-day treatments where possible and transparent pricing — always." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary grid place-items-center">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-foreground">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand px-8 py-16 lg:p-16 shadow-glow">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-2xl" />
            <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
                  Book your appointment today
                </h2>
                <p className="mt-4 text-primary-foreground/85 text-lg max-w-2xl">
                  Same-day slots available. Free first consultation for new patients in Jubilee Hills.
                </p>
                <div className="mt-3 flex items-center gap-2 text-primary-foreground/80 text-sm">
                  <MapPin className="h-4 w-4" /> {CLINIC.area}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <a href={CLINIC.phoneTel} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground text-primary px-6 py-3.5 text-base font-bold shadow-card">
                  <Phone className="h-5 w-5" /> {CLINIC.phone}
                </a>
                <a href={CLINIC.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-success text-success-foreground px-6 py-3.5 text-base font-bold shadow-card">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
