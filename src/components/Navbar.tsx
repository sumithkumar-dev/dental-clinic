import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { CLINIC, NAV } from "@/lib/clinic";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                data-status={isActive(item.to) ? "active" : undefined}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors data-[status=active]:text-primary data-[status=active]:bg-primary-soft"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CLINIC.phoneTel}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-6 pt-2 border-t border-border bg-background space-y-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              data-status={isActive(item.to) ? "active" : undefined}
              className="block px-4 py-3 text-base font-medium text-foreground rounded-lg hover:bg-secondary data-[status=active]:bg-primary-soft data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CLINIC.phoneTel}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-base font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> {CLINIC.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
