import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { CLINIC, NAV } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              {CLINIC.tagline}. A premium dental experience in the heart of Jubilee Hills, Hyderabad.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="h-9 w-9 grid place-items-center rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground hover:text-primary transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />{CLINIC.address}</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" /><a href={CLINIC.phoneTel} className="hover:text-primary">{CLINIC.phone}</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />{CLINIC.email}</li>
              <li className="flex gap-2"><Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />{CLINIC.hours}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Booking</h4>
            <p className="text-sm text-muted-foreground mb-4">Same-day appointments available. Call or WhatsApp us now.</p>
            <a href={CLINIC.phoneTel} className="block w-full text-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft">
              Call {CLINIC.phone}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SmileCraft Dental. All rights reserved.</p>
          <p>Designed with care in Hyderabad.</p>
        </div>
      </div>
      <div className="h-20 lg:hidden" />
    </footer>
  );
}
