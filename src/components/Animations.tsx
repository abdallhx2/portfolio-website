'use client';

import { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function FadeIn({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = '',
  threshold = 0.1
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            // Enhanced animation with spring easing
            element.style.animation = `fadeIn${direction.charAt(0).toUpperCase() + direction.slice(1)} ${duration}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s both`;
            element.style.transform = 'translateZ(0)'; // Hardware acceleration
          }
        });
      },
      { threshold, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [direction, delay, duration, threshold]);

  return (
    <div ref={ref} className={`opacity-0 will-change-transform ${className}`}>
      {children}
    </div>
  );
}

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function CountUp({ end, duration = 1.5, suffix = '', className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && ref.current && !hasAnimated) {
            const element = ref.current;
            const startTime = Date.now();
            const endTime = startTime + duration * 1000;

            setHasAnimated(true);

            // Add initial glow effect
            element.style.transition = 'all 0.3s ease';
            element.style.textShadow = '0 0 10px rgba(var(--primary-rgb), 0.5)';

            const updateCount = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / (endTime - startTime), 1);
              
              // Use smooth easing function
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(easeOutQuart * end);
              
              element.textContent = `${currentCount}${suffix}`;

              // Add dynamic color based on progress
              const intensity = Math.sin(progress * Math.PI) * 0.3 + 0.7;
              element.style.color = `rgba(var(--primary-rgb), ${intensity})`;

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                // Reset to normal color and add completion effect
                element.style.color = 'var(--foreground)';
                element.style.textShadow = 'none';
                element.style.animation = 'gentle-bounce 0.6s ease-out';
                setTimeout(() => {
                  element.style.animation = '';
                }, 600);
              }
            };

            updateCount();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, suffix, hasAnimated]);

  return (
    <span 
      ref={ref} 
      className={`${className} will-change-transform font-mono tabular-nums`}
      style={{ display: 'inline-block' }}
    >
      0{suffix}
    </span>
  );
}

interface ScrollingTechStackProps {
  techStack: Array<{ name: string; icon: LucideIcon }>;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  isRTL?: boolean;
}

export function ScrollingTechStack({ 
  techStack, 
  speed = 25, 
  direction = 'right',
  className = '',
  isRTL = true
}: ScrollingTechStackProps) {
  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  return (
    <div className={`overflow-hidden tech-stack-container ${isRTL ? 'tech-stack-rtl' : 'tech-stack-ltr'} ${className}`}>
      <div 
        className={`flex items-center will-change-transform ${direction === 'right' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}
        style={{ 
          animation: `scroll-${direction} ${speed}s linear infinite`,
          width: 'max-content'
        }}
      >
        {duplicatedStack.map((tech, index) => (
          <div 
            key={index} 
            className={`flex items-center px-4 py-2 rounded border text-sm whitespace-nowrap hover:scale-105 transition-all duration-300 hover:shadow-lg group ${direction === 'right' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
            style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
          >
            <tech.icon size={16} className="group-hover:animate-gentle-bounce" />
            <span className="group-hover:font-semibold transition-all duration-300">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface InteractiveStatProps {
  number: string;
  label: string;
  delay?: number;
  className?: string;
}

export function InteractiveStat({ number, label, delay = 0, className = '' }: InteractiveStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && ref.current && !hasAnimated) {
            const element = ref.current;
            setHasAnimated(true);
            setTimeout(() => {
              element.style.animation = 'stat-reveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both';
            }, delay * 1000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, hasAnimated]);

  return (
    <div 
      ref={ref}
      className={`text-center will-change-transform ${className}`}
      style={{ opacity: 0 }}
    >
      <div className="relative overflow-hidden rounded-lg p-2">
        <div 
          className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold relative z-10" 
          style={{ color: 'var(--foreground)' }}
        >
          {number}
        </div>
      </div>
      <div 
        className="text-xs sm:text-sm lg:text-base xl:text-lg" 
        style={{ color: 'var(--muted-foreground)' }}
      >
        {label}
      </div>
    </div>
  );
}

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function TypingEffect({ text, speed = 100, delay = 0, className = '' }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setTimeout(() => {
              setStarted(true);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, started]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, started]);

  return (
    <div ref={ref} className={className}>
      {displayText}
      <span className="animate-blink">|</span>
    </div>
  );
}

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingElement({ children, delay = 0, className = '' }: FloatingElementProps) {
  return (
    <div 
      className={`animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.5, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        const element = ref.current;
        const rate = scrolled * -speed;
        element.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerChildren({ children, staggerDelay = 0.1, className = '' }: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const children = Array.from(element.children) as HTMLElement[];
            
            children.forEach((child, index) => {
              child.style.opacity = '0';
              child.style.transform = 'translateY(20px)';
              child.style.transition = 'none';
              
              setTimeout(() => {
                child.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
              }, index * staggerDelay * 1000);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [staggerDelay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
