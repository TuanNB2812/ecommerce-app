import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrencyVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatTime(time: number): string {
  if (time !== null && time !== undefined && time < 10 && time >= 0) {
    return "0" + time.toString();
  } else if (time !== null && time !== undefined && time >= 10) {
    return time.toString();
  }

  return "";
}