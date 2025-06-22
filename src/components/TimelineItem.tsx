// components/TimelineItem.tsx
import { ReactNode } from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
  color?: string;
}

export function TimelineItem({
  year,
  title,
  description,
  icon,
  color = "bg-primary",
}: TimelineItemProps) {
  return (
    <div className="relative pl-10 border-l border-gray-300">
      <div className="absolute -left-5 top-1 w-10 h-10 rounded-full flex items-center justify-center shadow-md ring-4 ring-white">
        <div className={`w-8 h-8 rounded-full ${color} text-white flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{year} — {title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
