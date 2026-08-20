"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const MouseCtx = createContext<boolean>(false);

/**
 * Aceternity-style 3D tilt card. The container tracks the pointer and rotates
 * the body in 3D; children can lift on the Z axis via `translateZ`.
 */
export function CardContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 18;
    const y = (e.clientY - top - height / 2) / 18;
    ref.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const reset = () => {
    setHovered(false);
    if (ref.current) ref.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <MouseCtx.Provider value={hovered}>
      <div
        className={cn("[perspective:1200px]", className)}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        <div
          ref={ref}
          className="relative transition-transform duration-200 ease-out [transform-style:preserve-3d]"
        >
          {children}
        </div>
      </div>
    </MouseCtx.Provider>
  );
}

export function CardItem({
  children,
  className,
  translateZ = 0,
}: {
  children: ReactNode;
  className?: string;
  translateZ?: number;
}) {
  const hovered = useContext(MouseCtx);
  return (
    <div
      className={cn("transition-transform duration-200 ease-out", className)}
      style={{
        transform: hovered
          ? `translateZ(${translateZ}px)`
          : "translateZ(0px)",
      }}
    >
      {children}
    </div>
  );
}
