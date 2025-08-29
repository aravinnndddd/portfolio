"use client";

import { Squares } from "@/components/ui/squares-background";

export function Skills() {
  return (
    <div className="relative h-screen  overflow-hidden bg-[#060606]">
      {/* Animated Squares Background */}
      <Squares
        direction="left"
        speed={0.8}
        squareSize={80}
        borderColor="#333"
        hoverFillColor="#222"
      />
    </div>
  );
}
