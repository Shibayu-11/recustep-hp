"use client";

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface WavesProps {
  className?: string;
}

export function Waves({ className }: WavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set colors based on theme
      const isDark = document.documentElement.classList.contains('dark');
      const particleColor = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)';
      const lineColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

      // Update and draw particles
      particles.current.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        // Draw connections
        particles.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId.current = requestAnimationFrame(drawParticles);
    };

    // Initialize
    resizeCanvas();
    initParticles();
    drawParticles();

    // Handle resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute top-0 left-0 w-full h-full -z-10", className)}
    />
  );
}