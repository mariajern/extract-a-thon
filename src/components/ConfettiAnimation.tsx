// src/components/ConfettiAnimation.tsx
"use client";

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

const CONFETTI_COLORS = ['hsl(var(--accent))', 'hsl(var(--primary))', '#FF00FF', '#FFFF00', '#FF0000']; // Teal, Dark Blue, Magenta, Yellow, Red
const NUM_CONFETTI = 60; // Increased for more visual impact
// FALL_DISTANCE constant is not directly used by CSS keyframes, but represents intended design.
// The actual fall distance is controlled by `translateY` in `globals.css @keyframes confetti-fall`.

interface ConfettiPiece {
  id: number;
  style: CSSProperties;
}

const ConfettiAnimation = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < NUM_CONFETTI; i++) {
      const fallDuration = Math.random() * 2 + 2.5; // 2.5s to 4.5s (increased duration)
      const spinDuration = Math.random() * 2 + 1.5;  // 1.5s to 3.5s
      const delay = Math.random() * 0.5; // Stagger start times slightly

      newPieces.push({
        id: i,
        style: {
          position: 'absolute',
          width: `${Math.random() * 6 + 5}px`, // 5px to 11px wide
          height: `${Math.random() * 10 + 8}px`, // 8px to 18px long
          backgroundColor: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
          left: `${Math.random() * 100}%`, // Spread horizontally across the container
          top: `${Math.random() * 40 - 20}%`, // Start clustered vertically around the center (50% +/- 20%)
          opacity: 1,
          transformOrigin: 'center center',
          animation: `confetti-fall ${fallDuration}s ${delay}s cubic-bezier(0.25, 0.1, 0.25, 1) forwards, 
                      confetti-spin ${spinDuration}s ${delay}s linear infinite`,
          // @ts-ignore for custom CSS variable
          '--initial-z-rotation': `${Math.random() * 360}deg`,
        },
      });
    }
    setPieces(newPieces);

    // Removed cleanup timer to make confetti persist
    // const timer = setTimeout(() => {
    //     setPieces([]);
    // }, Math.max(...newPieces.map(p => parseFloat(p.style.animationDuration?.split(',')[0] || '3') * 1000 + parseFloat(p.style.animationDelay?.split(',')[0] || '0.5') * 1000)) + 500);
    // return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      style={{ 
        position: 'absolute', 
        top: 'calc(50% - 90px)', // Adjusted: from -50px to -90px to raise origin (burst higher)
        left: 'calc(50% - 100px)', 
        width: '200px', 
        height: '1px', 
        pointerEvents: 'none', 
        zIndex: 10,
        overflow: 'visible'
      }}
      aria-hidden="true"
    >
      {pieces.map((piece) => (
        <div key={piece.id} style={piece.style} />
      ))}
    </div>
  );
};

export default ConfettiAnimation;
