import type { ReactNode } from "react";
import { Button } from "./ui/button";
import { HoverGlow } from "./ui/hover-border-gradient";

interface TagButtonProps {
  title: string;
  icon: ReactNode;
  link?: string;
  animate?: boolean;
}

export function TagButton({ title, icon, link, animate }: TagButtonProps) {
  return (
    <div className="relative rounded-md overflow-hidden w-fit">
      {animate && <HoverGlow />}
      <Button
        variant="outline"
        className="flex items-center gap-2 relative z-10"
        asChild={!!link}
      >
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <span className="h-4 w-4 text-blue-500">{icon}</span>
            {title}
          </a>
        ) : (
          <>
            <span className="h-4 w-4 text-blue-500">{icon}</span>
            {title}
          </>
        )}
      </Button>
    </div>
  );
}
