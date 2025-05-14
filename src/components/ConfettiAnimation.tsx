// src/components/ConfettiAnimation.tsx
"use client";

import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

const CONFETTI_COLORS = ['hsl(var(--accent))', 'hsl(var(--primary))', '#FF00FF', '#FFFF00', '#FF0000']; // Teal, Dark Blue, Magenta, Yellow, Red

const ConfettiAnimation = () => {
  const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
    width: undefined,
    height: undefined,
  });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize(); // Set initial size

      const timer = setTimeout(() => {
        setIsRunning(false); // Stop emitting new confetti after 5 seconds
      }, 5000);

      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(timer);
      };
    }
  }, []);

  if (typeof windowSize.width === 'undefined' || typeof windowSize.height === 'undefined') {
    return null; // Don't render on server or before size is known
  }

  return (
    <ReactConfetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={isRunning ? 250 : 0} // Emit 250 pieces initially, then 0
      recycle={false} // Pieces disappear when off-screen
      gravity={0.15} // A bit lighter gravity
      initialVelocityX={{ min: -10, max: 10 }} // Horizontal spread
      initialVelocityY={{ min: -20, max: -10 }} // Upward burst strength
      colors={CONFETTI_COLORS}
      // Approximate source from the center of the screen, slightly above, to simulate bursting from the cup area
      confettiSource={{
        x: windowSize.width / 2,
        y: windowSize.height / 2 - 80, // Adjust Y to be higher, simulating bursting from the cup
        w: 20, // Small source area width
        h: 20, // Small source area height
      }}
      run={true} // Keep run=true; numberOfPieces controls emission. If run=false, existing pieces might be removed immediately by the library.
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000, pointerEvents: 'none' }}
    />
  );
};

export default ConfettiAnimation;
