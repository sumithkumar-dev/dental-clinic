export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary-soft px-3 py-1 rounded-full mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
