import { Link } from "react-router-dom";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative h-10 w-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow">
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary-foreground">
          <path
            d="M12 3c-2 0-3 1-4.5 1S4 3 3 4.5 2 8 3 11s2 7 4 9c1.2 1.2 2-1 2.5-3s.7-3 2.5-3 2 1 2.5 3 1.3 4.2 2.5 3c2-2 3-6 4-9s1-5 0-6.5S17 4 15.5 4 14 3 12 3Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {!compact && (
        <div className="leading-tight">
          <div className="font-display font-bold text-lg text-foreground tracking-tight">
            SmileCraft
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold -mt-0.5">
            Dental
          </div>
        </div>
      )}
    </Link>
  );
}
