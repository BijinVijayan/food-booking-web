import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges tailwind classes and handles conflicts.
 * Example: cn("bg-red-500", condition && "bg-blue-500")
 * If condition is true, bg-blue-500 wins (unlike standard string concatenation).
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}