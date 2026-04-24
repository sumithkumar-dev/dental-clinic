import { useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-card bg-card">
      <div
        ref={ref}
        className="relative aspect-square select-none cursor-ew-resize touch-none"
        onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
        onMouseDown={(e) => move(e.clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
      >
        <img src={after} alt="After" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt="Before"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
            loading="lazy"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-primary-foreground shadow-glow"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary-foreground border-2 border-primary shadow-card grid place-items-center">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="currentColor">
              <path d="M8 5l-7 7 7 7V5zM16 5v14l7-7-7-7z" />
            </svg>
          </div>
        </div>
        <span className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider bg-foreground/70 text-background px-2 py-1 rounded">Before</span>
        <span className="absolute top-3 right-3 text-[11px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-1 rounded">After</span>
      </div>
      {label && (
        <div className="px-5 py-4 border-t border-border">
          <p className="font-semibold text-foreground">{label}</p>
        </div>
      )}
    </div>
  );
}
