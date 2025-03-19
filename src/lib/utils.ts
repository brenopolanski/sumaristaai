import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatFileName(url: string): string {
  const fileName = url.split("/").pop() || "";

  return fileName
    .replace(/\.[^.]+$/, "") // Remove a extensão do arquivo
    .replace(/[-_]/g, " ") // Substitui hífens e underscores por espaços
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza cada palavra
    .join(" ");
}
