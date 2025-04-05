import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateNVLFromUUID = (): string => {
  const uuid = uuidv4().replace(/-/g, "").slice(0, 6);
  return `NVL_${uuid.toUpperCase()}`;
};

export const isEmpty = (data: any) => {
  if (data === null || data === undefined || data === 0) return true;
  switch (typeof data) {
    case "string": {
      return data.length === 0;
    }
    case "object": {
      return Object.keys(data).length === 0;
    }
  }
  return Array.isArray(data) && data.length === 0;
};
