import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

const movingMap: Record<Direction, string> = {
  TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  BOTTOM:
    "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  RIGHT:
    "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
};

const highlight =
  "radial-gradient(75% 181.15% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

export function HoverGlow({
  duration = 1,
  clockwise = true,
}: {
  duration?: number;
  clockwise?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (dir: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const i = directions.indexOf(dir);
    const next = clockwise
      ? (i - 1 + directions.length) % directions.length
      : (i + 1) % directions.length;
    return directions[next];
  };

  useEffect(() => {
    if (!hovered) {
      const id = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(id);
    }
  }, [hovered]);

  return (
    <>
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit] pointer-events-none"
        style={{ filter: "blur(2px)" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ duration, ease: "linear" }}
      />
      <div className="absolute inset-[2px] z-0 rounded-[inherit] bg-black" />
      <div
        className="absolute inset-0 z-10 rounded-[inherit]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </>
  );
}
