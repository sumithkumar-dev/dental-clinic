import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { SectionHeading } from "@/components/SectionHeading";
import { usePageMeta } from "@/lib/usePageMeta";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number"),
  message: z.string().trim().min(5, "Tell us a little about your needs").max(1000),
});

export default function ContactPage() {
  usePageMeta(
    "Contact & Location — SmileCraft Dental, Jubilee Hills, Hyderabad",
    "Visit SmileCraft Dental in Jubilee Hills, Hyderabad. Call, WhatsApp or book your appointment online."
  );
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="bg-gradient-hero py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visit Us"
            title="We're right in Jubilee Hills"
            description="Easy parking, ground floor access and same-day appointments. Drop in or get in touch — we'd love to meet you."
          />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
            {/* Info */}
            <div className="space-y-4">
              {[
                { icon: MapPin, title: "Address", value: CLINIC.address, action: { label: "Get directions", href: "https://maps.google.com/?q=Jubilee+Hills+Hyderabad" } },
                { icon: Phone, title: "Phone", value: CLINIC.phone, action: { label: "Call now", href: CLINIC.phoneTel } },
                { icon: MessageCircle, title: "WhatsApp", value: CLINIC.phone, action: { label: "Open WhatsApp", href: CLINIC.whatsapp } },
                { icon: Mail, title: "Email", value: CLINIC.email, action: { label: "Send email", href: `mailto:${CLINIC.email}` } },
                { icon: Clock, title: "Hours", value: CLINIC.hours },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl bg-card border border-border p-5 shadow-soft flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.title}</p>
                    <p className="font-semibold text-foreground mt-0.5">{c.value}</p>
                    {c.action && (
                      <a href={c.action.href} target={c.action.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-xs text-primary font-semibold mt-1 inline-block hover:underline">
                        {c.action.label} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="rounded-3xl bg-card border border-border p-7 lg:p-9 shadow-card">
              <h3 className="text-2xl font-bold text-foreground">Book your appointment</h3>
              <p className="mt-1 text-sm text-muted-foreground">Fill the form — we'll call you back within 30 minutes.</p>

              {sent ? (
                <div className="mt-8 rounded-2xl bg-success/10 border border-success/30 p-6 text-center">
                  <CheckCircle2 className="h-10 w-10 text-success mx-auto" />
                  <p className="mt-3 font-bold text-foreground">Thanks! We'll be in touch shortly.</p>
                  <p className="text-sm text-muted-foreground mt-1">Our team will contact you on the number you provided.</p>
                  <button onClick={() => setSent(false)} className="mt-4 text-sm text-primary font-semibold">Send another message</button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Your Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      maxLength={80}
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Priya Sharma"
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      maxLength={20}
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      maxLength={1000}
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="What treatment are you interested in?"
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow">
                    <Send className="h-4 w-4" /> Send & Request Callback
                  </button>
                  <p className="text-xs text-muted-foreground text-center">We respect your privacy. Your details stay with us.</p>
                </form>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-border shadow-card">
            <iframe
              title="SmileCraft Dental location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4863!2d78.4089!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzI2LjAiTiA3OMKwMjQnMzIuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
