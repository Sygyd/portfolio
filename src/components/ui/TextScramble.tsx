"use client";

import React, { useEffect, useState, useRef } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
  triggerOnView?: boolean;
}

const CHARS = "0123456789ABCDEF!@#$%&*/";

export function TextScramble({
  text,
  className,
  duration = 450,
  triggerOnView = true,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const scramble = () => {
    const startTime = Date.now();
    const length = text.length;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);

      const revealedChars = Math.floor(progress * length);

      let scrambled = "";
      for (let i = 0; i < length; i++) {
        if (i < revealedChars) {
          scrambled += text[i];
        } else if (text[i] === " " || text[i] === "%" || text[i] === "$") {
          scrambled += text[i];
        } else {
          scrambled += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplayText(scrambled);

      if (progress >= 1) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 28);
  };

  useEffect(() => {
    if (!triggerOnView) {
      scramble();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            scramble();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [text, duration]);

  return (
    <span ref={elementRef} className={className}>
      {displayText}
    </span>
  );
}
