import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isTouchDevice = window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    ).matches;
    setEnabled(!isTouchDevice);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Dot */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 rounded-full bg-blue-700"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 3.5}px)`,
          transition: "transform 0.05s linear",
        }}
      />

      {/* Circle */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-8 h-8 rounded-full border border-blue-700"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          transition: "transform 0.15s ease-out",
        }}
      />
    </>
  );
}
