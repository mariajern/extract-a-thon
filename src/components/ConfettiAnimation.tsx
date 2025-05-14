// src/components/ConfettiAnimation.tsx
"use client";

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

const CONFETTI_COLORS = ['hsl(var(--accent))', 'hsl(var(--primary))', '#FF00FF']; // Teal, Dark Blue, Magenta
const NUM_CONFETTI = 60; // Increased for more visual impact
const FALL_DISTANCE = 180; // How far confetti falls in pixels

interface ConfettiPiece {
  id: number;
  style: CSSProperties;
}

const ConfettiAnimation = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < NUM_CONFETTI; i++) {
      const fallDuration = Math.random() * 1.5 + 1.5; // 1.5s to 3.0s
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

    // Clean up pieces after animation to prevent too many elements
    const timer = setTimeout(() => {
        setPieces([]);
    }, Math.max(...newPieces.map(p => parseFloat(p.style.animationDuration?.split(',')[0] || '3') * 1000 + parseFloat(p.style.animationDelay?.split(',')[0] || '0.5') * 1000)) + 500);


    return () => clearTimeout(timer);
  }, []);

  // No need to render <style jsx global> as keyframes are in globals.css
  // No need for initial check if pieces.length === 0 if we position correctly

  return (
    <div 
      style={{ 
        position: 'absolute', 
        top: 'calc(50% - 100px)', // Center vertically around the icon container's midpoint
        left: 'calc(50% - 100px)', // Center horizontally
        width: '200px', 
        height: '1px', // Effectively a line from which confetti "explodes"
        pointerEvents: 'none', 
        zIndex: 10,
        overflow: 'visible' // Allow confetti to fly out
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
