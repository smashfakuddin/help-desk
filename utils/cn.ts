import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// combine clsx + tailwind-merge
export function cn(...inputs: (string | undefined | false | null)[]) {
  return twMerge(clsx(inputs));
}
