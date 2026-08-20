import { cn } from "@/lib/utils";

/**
 * SunguraLabs mark — a geometric "constellation" rabbit echoing the brand logo,
 * drawn as thin green/gold connected nodes. Scales with `size`.
 */
export function LogoMark({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* connecting lines */}
      <g stroke="var(--color-green-accent)" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M34 20 L30 52 L50 66 L70 52 L60 24" />
        <path d="M30 52 L50 40 L70 52" />
        <path d="M50 40 L50 66" />
        <path d="M50 66 L42 84 M50 66 L58 84" />
        <path d="M60 24 L62 40 L70 52" />
      </g>
      {/* nodes */}
      <g fill="var(--color-gold)">
        {[
          [34, 20],
          [60, 24],
          [30, 52],
          [70, 52],
          [50, 40],
          [50, 66],
          [42, 84],
          [58, 84],
          [62, 40],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 4 ? 3.4 : 2.3} />
        ))}
      </g>
    </svg>
  );
}

export function Wordmark({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-display text-xl font-bold tracking-tight",
        className,
      )}
    >
      <span className={onDark ? "text-white" : "text-foreground"}>Sungura</span>
      <span className="text-green">Labs</span>
    </span>
  );
}

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark size={34} />
      <Wordmark onDark={onDark} />
    </span>
  );
}
