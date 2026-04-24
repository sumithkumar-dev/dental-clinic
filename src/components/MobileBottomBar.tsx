import { Link } from "react-router-dom";
import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

export function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-xl border-t border-border shadow-card">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a
          href={CLINIC.phoneTel}
          className="flex flex-col items-center justify-center py-3 gap-1 text-foreground active:bg-secondary"
        >
          <Phone className="h-5 w-5 text-primary" />
          <span className="text-[11px] font-semibold">Call</span>
        </a>
        <a
          href={CLINIC.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 text-foreground active:bg-secondary"
        >
          <MessageCircle className="h-5 w-5 text-success" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <Link
          to="/contact"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-gradient-brand text-primary-foreground"
        >
          <CalendarDays className="h-5 w-5" />
          <span className="text-[11px] font-semibold">Book Now</span>
        </Link>
      </div>
    </div>
  );
}
