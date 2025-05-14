
// src/components/ConfettiAnimation.tsx
"use client";

import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

// Updated to use hex colors directly
const CONFETTI_COLORS = ['#26615a', '#002D5B', '#FF00FF', '#FFFF00', '#FF0000']; // Teal, Dark Blue, Magenta, Yellow, Red

const ConfettiAnimation = () => {
  const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
    width: undefined,
    height: undefined,
  });
  // Removed isRunning state for continuous emission for now

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

      // Timer that controlled isRunning has been removed
      return () => {
        window.removeEventListener('resize', handleResize);
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
      numberOfPieces={250} // Always emit 250 pieces
      recycle={false} // Pieces disappear when off-screen
      gravity={0.15} // A bit more gravity
      initialVelocityX={{ min: -10, max: 10 }} // Wider horizontal spread
      initialVelocityY={{ min: -20, max: -10 }} // Stronger upward burst strength
      colors={CONFETTI_COLORS}
      // Approximate source from the center of the screen, slightly above, to simulate bursting from the cup area
      confettiSource={{
        x: windowSize.width / 2,
        y: windowSize.height / 2 - 80, // Adjusted Y to be closer to the cup's opening
        w: 20, // Small source area width
        h: 20, // Small source area height
      }}
      run={true} // Keep run=true; this ensures the animation system is active.
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000, pointerEvents: 'none' }}
    />
  );
};

export default ConfettiAnimation;
