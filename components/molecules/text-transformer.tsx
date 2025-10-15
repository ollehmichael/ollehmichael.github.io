'use client';

import { useEffect, useState } from 'react';

export default function TextTransformer({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const fadeOutDuration = 500; // in milliseconds

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      // Wait for fade out, then change text and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, fadeOutDuration); // 0.5 second fade out duration
    }, fadeOutDuration * 6); // 5 seconds between cycles

    return () => clearInterval(interval);
  }, [isPaused, texts.length]);

  return (
    <h1
      className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-center mb-16 md:mb-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <span
        className="block text-balance transition-opacity duration-500"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {texts[currentIndex]}
      </span>
    </h1>
  );
}
