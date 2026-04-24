import { Link } from "react-router-dom";
import { Award, GraduationCap, ShieldCheck, Heart, Sparkles, CalendarDays } from "lucide-react";
import doctor from "@/assets/doctor.jpg";
import { usePageMeta } from "@/lib/usePageMeta";

export default function AboutPage() {
  usePageMeta(
    "About Dr. Rajesh Kumar — SmileCraft Dental, Jubilee Hills",
    "Meet Dr. Rajesh Kumar — BDS, MDS — with 10+ years of experience in cosmetic and restorative dentistry in Hyderabad."
  );
  return (
    <>
      <section className="bg-gradient-hero py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-brand opacity-25 blur-3xl rounded-3xl" />
              <img src={doctor} alt="Dr. Rajesh Kumar" width={1024} height={1280} className="relative rounded-3xl shadow-glow w-full object-cover aspect-[4/5]" />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary-soft px-3 py-1 rounded-full">Lead Dentist & Founder</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground text-balance">Dr. Rajesh Kumar</h1>
              <p className="mt-2 text-lg text-primary font-semibold">BDS, MDS — Cosmetic & Restorative Dentistry</p>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                For over a decade, Dr. Rajesh Kumar has been transforming smiles across Hyderabad with a unique blend of clinical precision and genuine warmth. Trained in advanced cosmetic and restorative dentistry, he founded SmileCraft Dental with a single mission — to make world-class dental care feel personal, comfortable and accessible.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  { v: "10+", l: "Years experience" },
                  { v: "5,000+", l: "Smiles delivered" },
                  { v: "12+", l: "Certifications" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-card border border-border p-4 text-center shadow-soft">
                    <div className="text-2xl font-bold text-primary">{s.v}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Qualifications & Training</h2>
            <ul className="mt-6 space-y-4">
              {[
                { icon: GraduationCap, t: "BDS — Bachelor of Dental Surgery", d: "Government Dental College, Hyderabad" },
                { icon: GraduationCap, t: "MDS — Master of Dental Surgery", d: "Specialization in Conservative Dentistry & Endodontics" },
                { icon: Award, t: "Digital Smile Design Certified", d: "DSD Clinic, Madrid — international certification" },
                { icon: ShieldCheck, t: "Advanced Implantology Fellowship", d: "Nobel Biocare & Straumann training programs" },
              ].map((q) => (
                <li key={q.t} className="flex gap-4 p-4 rounded-2xl bg-card border border-border shadow-soft">
                  <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
                    <q.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{q.t}</p>
                    <p className="text-sm text-muted-foreground">{q.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground">A personal note</h2>
            <div className="mt-6 rounded-3xl bg-gradient-soft border border-border p-7 shadow-soft">
              <Heart className="h-8 w-8 text-primary" />
              <p className="mt-4 text-foreground/90 leading-relaxed italic">
                "I started SmileCraft because I believe every patient deserves dentistry that's honest, painless and genuinely tailored to them. There's no upselling here, no rushed appointments — just careful, transparent care from a team that treats you like family. Whether you're nervous about your first cleaning or planning a complete smile makeover, I'd love to meet you."
              </p>
              <p className="mt-5 font-semibold text-foreground">— Dr. Rajesh Kumar</p>
            </div>

            <div className="mt-6 rounded-3xl bg-card border border-border p-7 shadow-soft">
              <h3 className="font-bold text-foreground flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> Areas of expertise</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Smile Design", "Veneers", "Implants", "Root Canals", "Aligners", "Pediatric Care", "Laser Dentistry", "Full-mouth Rehab"].map((s) => (
                  <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary-soft text-primary">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow">
            <CalendarDays className="h-5 w-5" /> Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
