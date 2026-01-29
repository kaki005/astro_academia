import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { template } from '../settings'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function trimExcerpt(excerpt: string): string {
  const excerptLength = template.excerptLength
  return excerpt.length > excerptLength ? `${excerpt.substring(0, excerptLength)}...` : excerpt
}
