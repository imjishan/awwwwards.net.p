import { clsx, type ClassValue } from "clsx"
import { tailwindMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return tailwindMerge(clsx(inputs))
}

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}