import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names safely (used by Aceternity-style components). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
