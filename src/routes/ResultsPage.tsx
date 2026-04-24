import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { SectionHeading } from "@/components/SectionHeading";
import { usePageMeta } from "@/lib/usePageMeta";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const CASES = [
  { before: before1, after: after1, label: "Smile Makeover", desc: "Composite veneers · 6 weeks", patient: "Female, 28" },
  { before: before2, after: after2, label: "Laser Whitening", desc: "6 shades brighter · single session", patient: "Male, 34" },
  { before: before3, after: after3, label: "Crown Restoration", desc: "Chipped front tooth · same day", patient: "Male, 42" },
  { before: before1, after: after1, label: "Full Aligner Treatment", desc: "Clear aligners · 14 months", patient: "Female, 23" },
  { before: before2, after: after2, label: "Stain Removal", desc: "Scaling + polish · single visit", patient: "Female, 39" },
  { before: before3, after: after3, label: "Implant + Crown", desc: "Single implant · 4 months", patient: "Male, 51" },
];

export default function ResultsPage() {
  usePageMeta(
    "Before & After Results — SmileCraft Dental, Hyderabad",
    "Real before & after dental transformations from SmileCraft Dental in Jubilee Hills, Hyderabad."
  );
  return (
    <>
      <section className="bg-gradient-hero py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Real Patients, Real Results"
            title="Smiles transformed at SmileCraft"
            description="Drag the slider on each case to reveal the transformation. All photos are unedited — published with patient consent."
          />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES.map((c, i) => (
              <div key={i}>
                <BeforeAfter before={c.before} after={c.after} />
                <div className="mt-3 px-1">
                  <p className="font-bold text-foreground">{c.label}</p>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                  <p className="text-xs text-primary mt-1 font-medium">Patient: {c.patient}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Your transformation could be next</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Book a free smile assessment and we'll show you exactly what's possible — no pressure, no commitment.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow">
              <CalendarDays className="h-5 w-5" /> Book Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
