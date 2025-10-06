import React, { useEffect, useRef } from 'react';
import './BodyCanvasAnimation.css';

const BodyCanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to cover full viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    const stars = [];
    const numStars = 150;
    
    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        originalOpacity: Math.random() * 0.6 + 0.2
      });
    }

    // Floating particles
    const particles = [];
    const numParticles = 8;
    
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.1,
        hue: Math.random() * 60 + 280 // Purple to pink range
      });
    }

    // Animation variables
    let animationId;
    let time = 0;

    // Animation loop
    const animate = () => {
      time += 0.01;
      
      // Clear canvas (transparent background to show body gradient)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and animate stars
      stars.forEach((star, index) => {
        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed + index) * 0.3;
        star.opacity = Math.max(0.1, Math.min(0.8, star.originalOpacity + twinkle));
        
        // Draw star with glow effect
        ctx.save();
        ctx.globalAlpha = star.opacity;
        
        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 4
        );
        glowGradient.addColorStop(0, '#ffffff');
        glowGradient.addColorStop(0.3, '#e6f3ff');
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner star
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
        
        // Move stars (gentle floating effect)
        star.y -= star.speed;
        star.x += Math.sin(time * 0.5 + index) * 0.05;
        
        // Reset star position when it goes off screen
        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
        }
        if (star.x < -10) {
          star.x = canvas.width + 10;
        }
        if (star.x > canvas.width + 10) {
          star.x = -10;
        }
      });

      // Draw floating particles that complement the gradient
      particles.forEach((particle, index) => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Create colorful particle that matches gradient theme
        const particleGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 15
        );
        
        const hsl = `hsl(${particle.hue + Math.sin(time + index) * 20}, 70%, 60%)`;
        particleGradient.addColorStop(0, hsl);
        particleGradient.addColorStop(0.5, `hsla(${particle.hue}, 70%, 60%, 0.3)`);
        particleGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 15, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
        
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }
        
        // Gentle opacity variation
        particle.opacity += Math.sin(time * 0.5 + index) * 0.005;
        particle.opacity = Math.max(0.05, Math.min(0.4, particle.opacity));
      });

      // Draw shooting stars occasionally
      if (Math.random() < 0.003) {
        drawShootingStar(ctx, canvas.width, canvas.height, time);
      }

      animationId = requestAnimationFrame(animate);
    };

    // Shooting star function
    const drawShootingStar = (ctx, width, height, time) => {
      const startX = Math.random() * width;
      const startY = Math.random() * height * 0.3;
      const endX = startX + Math.random() * 200 + 100;
      const endY = startY + Math.random() * 100 + 50;
      
      ctx.save();
      ctx.globalAlpha = 0.8;
      
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.5, '#e6f3ff');
      gradient.addColorStop(1, 'transparent');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      ctx.restore();
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="body-canvas-animation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default BodyCanvasAnimation;