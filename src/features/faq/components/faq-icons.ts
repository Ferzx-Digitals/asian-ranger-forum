import {
  Bed,
  CalendarDays,
  ClipboardList,
  FileText,
  type LucideIcon,
  Mail,
  Plane,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import type { FaqIconName } from "../data";

export const faqIconMap: Record<FaqIconName, LucideIcon> = {
  accommodation: Bed,
  calendar: CalendarDays,
  conduct: ShieldCheck,
  contact: Mail,
  participation: UsersRound,
  proposal: FileText,
  registration: ClipboardList,
  travel: Plane,
};
