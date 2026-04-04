"use client";

import React, { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+";

interface ScrambleTextProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function ScrambleText({ text, duration = 1, delay = 0, className }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let iteration = 0;
    const maxIterations = 10;
    const intervalTime = (duration * 1000) / (text.length + maxIterations);

    const startAnimation = () => {
      timerRef.current = setInterval(() => {
        setDisplayText((prev) => {
          return text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
        });

        if (iteration >= text.length) {
          if (timerRef.current) clearInterval(timerRef.current);
          setDisplayText(text);
        }

        iteration += 1 / 3;
      }, intervalTime);
    };

    const delayTimeout = setTimeout(startAnimation, delay * 1000);

    return () => {
      clearTimeout(delayTimeout);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [text, duration, delay]);

  return <span className={className}>{displayText || text.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join("")}</span>;
}
