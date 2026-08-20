import { cn } from "@/lib/utils";

export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" className="text-green">
        <path d="M34 20 L30 52 L50 66 L70 52 L60 24" />
        <path d="M30 52 L50 40 L70 52" />
        <path d="M50 40 L50 66" />
        <path d="M50 66 L42 84 M50 66 L58 84" />
        <path d="M60 24 L62 40 L70 52" />
      </g>
      <g fill="var(--color-gold)">
        {([[34,20],[60,24],[30,52],[70,52],[50,40],[50,66],[42,84],[58,84],[62,40]] as [number,number][]).map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={i===4?3.4:2.3} />
        ))}
      </g>
    </svg>
  );
}

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={30} />
      <span className={cn("font-display text-[1.1rem] font-bold tracking-tight", dark ? "text-white" : "text-foreground")}>
        Sungura<span className="text-green">Labs</span>
      </span>
    </span>
  );
}

export function LogoMark2({ size = 40, className }: { size?: number; className?: string }) {
  return <LogoMark size={size} className={className} />;
}
