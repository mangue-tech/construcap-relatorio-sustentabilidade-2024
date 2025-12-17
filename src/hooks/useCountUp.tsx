import { useEffect, useState, useRef } from "react";

export const useCountUp = (
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  return { count, ref, hasStarted };
};

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter = ({ 
  value, 
  prefix = "", 
  suffix = "", 
  decimals = 0,
  className = "" 
}: AnimatedCounterProps) => {
  const { count, ref } = useCountUp(value);
  
  const formattedValue = decimals > 0 
    ? (count / Math.pow(10, decimals)).toFixed(decimals).replace('.', ',')
    : count.toLocaleString('pt-BR');

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedValue}{suffix}
    </span>
  );
};
