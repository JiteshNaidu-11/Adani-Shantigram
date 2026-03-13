/** Logo: "adani" (gradient) | "Realty" (inherits parent color for light/dark nav) – matches brand reference */
export default function AdaniLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold text-xl tracking-tight ${className}`}>
      <span
        className="bg-clip-text text-transparent shrink-0"
        style={{
          backgroundImage: "linear-gradient(90deg, #2696C7 0%, #4C4FB5 35%, #7A3C8B 65%, #9A306D 85%, #BB2952 100%)",
        }}
      >
        adani
      </span>
      <span className="w-px h-5 bg-current opacity-60 shrink-0" aria-hidden />
      <span className="text-inherit shrink-0">Realty</span>
    </span>
  );
}
