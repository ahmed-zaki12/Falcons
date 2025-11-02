import React, { useEffect, useRef, useState } from 'react';
import '../Styles/CyberBackground.css';

const CyberBackground = ({ children, showParticles = true, showGrid = true, showShootingStars = true }) => {
  const particlesRef = useRef(null);
  const shootingStarIntervalRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const particlesInitializedRef = useRef(false);
  const animationRef = useRef(null);

  // Custom particles system using Canvas
  const initParticles = () => {
    if (!particlesRef.current) {
      console.warn('Particles element not ready');
      return false;
    }

    try {
      if (particlesInitializedRef.current) {
        console.log('Particles already initialized');
        return true;
      }

      const element = particlesRef.current;
      if (!element || !element.offsetParent) {
        console.warn('Particles element not visible yet');
        return false;
      }

      // Create canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas size
      const resizeCanvas = () => {
        canvas.width = element.offsetWidth;
        canvas.height = element.offsetHeight;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Clear element and add canvas
      element.innerHTML = '';
      element.appendChild(canvas);

      // Create the sophisticated moving interconnected particles system
      const particles = [];
      const connections = [];
      // Responsive particle count
      let particleCount = 30;
      let connectionRange = 200;

      if (window.innerWidth < 640) {
        particleCount = 10;
        connectionRange = 50;
      } else if (window.innerWidth <= 1024) {
        particleCount = 20;
        connectionRange = 180;
      }
      else if (window.innerWidth > 1024) {
        particleCount = 30;
        connectionRange = 5;
      }
      else if (window.innerWidth > 1440) {
        particleCount = 600;
        connectionRange = 500;
      }


      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.vx = (Math.random() - 0.5) * 0.8; // Slower, more elegant movement
          this.vy = (Math.random() - 0.5) * 0.8;
          this.size = Math.random() * 2 + 1; // Smaller, more refined particles
          this.baseSize = this.size;
          this.color = ['#00f5ff', '#0ea5e9', '#0284c7', '#0369a1'][Math.floor(Math.random() * 4)];
          this.opacity = Math.random() * 0.8 + 0.2;
          this.pulseSpeed = Math.random() * 0.02 + 0.01;
          this.pulseOffset = Math.random() * Math.PI * 2;
          this.connectionRange = 200; // Increased connection distance for more connections
        }

        update() {
          // Update position
          this.x += this.vx;
          this.y += this.vy;

          // Bounce off edges with smooth wrapping
          if (this.x < 0) this.x = canvas.width;
          if (this.x > canvas.width) this.x = 0;
          if (this.y < 0) this.y = canvas.height;
          if (this.y > canvas.height) this.y = 0;

          // Pulsing size effect
          this.size = this.baseSize + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.5;
        }

        draw() {
          ctx.save();
          ctx.globalAlpha = this.opacity;

          // Create glowing effect
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(0.5, this.color + '80');
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // Core particle
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }
      }

      // Initialize particles
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      // Create dynamic connections
      const updateConnections = () => {
        connections.length = 0; // Clear old connections

        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
            );

            if (distance < particle.connectionRange) {
              const opacity = (particle.connectionRange - distance) / particle.connectionRange * 0.7; // Increased opacity
              const lineWidth = (particle.connectionRange - distance) / particle.connectionRange * 2.5; // Increased line width

              connections.push({
                x1: particle.x,
                y1: particle.y,
                x2: otherParticle.x,
                y2: otherParticle.y,
                opacity: opacity,
                width: lineWidth,
                color: particle.color
              });
            }
          });
        });
      };

      // Draw connections with flowing effect
      const drawConnections = () => {
        connections.forEach(connection => {
          ctx.save();
          ctx.globalAlpha = connection.opacity;
          ctx.strokeStyle = connection.color;
          ctx.lineWidth = connection.width;
          ctx.lineCap = 'round';

          // Create flowing line effect
          const time = Date.now() * 0.001;
          const flowOffset = Math.sin(time + connection.x1 * 0.01) * 2;

          ctx.beginPath();
          ctx.moveTo(connection.x1, connection.y1);

          // Add subtle curve for flowing effect
          const midX = (connection.x1 + connection.x2) / 2 + flowOffset;
          const midY = (connection.y1 + connection.y2) / 2 + flowOffset;

          ctx.quadraticCurveTo(midX, midY, connection.x2, connection.y2);
          ctx.stroke();

          ctx.restore();
        });
      };

      // Draw subtle grid overlay
      const drawGrid = () => {
        ctx.save();
        ctx.strokeStyle = '#1a1a2e';
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.1;

        const gridSize = 50;
        const offsetX = (Date.now() * 0.01) % gridSize;
        const offsetY = (Date.now() * 0.01) % gridSize;

        // Vertical lines
        for (let x = offsetX; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }

        // Horizontal lines
        for (let y = offsetY; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        ctx.restore();
      };

      // Animation loop
      const animate = () => {
        // Clear with transparent background to let CSS show through
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw grid
        drawGrid();

        // Update connections
        updateConnections();

        // Draw connections first (behind particles)
        drawConnections();

        // Update and draw particles
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      animate();

      particlesInitializedRef.current = true;
      console.log('Sophisticated moving interconnected particles system initialized successfully');
      return true;

    } catch (error) {
      console.warn('Failed to initialize sophisticated particles system:', error);
      return false;
    }
  };

  useEffect(() => {
    setIsMounted(true);

    const loadParticles = () => {
      if (!showParticles || !isMounted) return;

      setTimeout(() => {
        initParticles();
      }, 100);
    };

    if (showShootingStars) {
      shootingStarIntervalRef.current = setInterval(createShootingStar, 3000);
    }

    loadParticles();

    return () => {
      if (shootingStarIntervalRef.current) {
        clearInterval(shootingStarIntervalRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [showParticles, showShootingStars, isMounted]);

  // Separate effect for particles initialization after mount
  useEffect(() => {
    if (isMounted && showParticles && !particlesInitializedRef.current) {
      let retryCount = 0;
      const maxRetries = 5;

      const attemptInitialization = () => {
        if (retryCount >= maxRetries) {
          console.warn('Max retries reached for particles initialization');
          return;
        }

        if (particlesRef.current && !particlesInitializedRef.current) {
          try {
            const success = initParticles();
            if (!success) {
              retryCount++;
              const delay = Math.min(1000 * Math.pow(2, retryCount), 5000);
              setTimeout(attemptInitialization, delay);
            }
          } catch (error) {
            console.warn('Particles initialization failed:', error);
            retryCount++;
            const delay = Math.min(1000 * Math.pow(2, retryCount), 5000);
            setTimeout(attemptInitialization, delay);
          }
        } else {
          retryCount++;
          const delay = Math.min(1000 * Math.pow(2, retryCount), 5000);
          setTimeout(attemptInitialization, delay);
        }
      };

      const timer = setTimeout(attemptInitialization, 1000);

      return () => clearTimeout(timer);
    }
  }, [isMounted, showParticles]);

  const createShootingStar = () => {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.cssText = `
      position: fixed;
      width: 2px;
      height: 2px;
      background: linear-gradient(45deg, #00f5ff, #ffffff);
      border-radius: 50%;
      z-index: 1;
      box-shadow: 0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff;
      pointer-events: none;
    `;

    const startX = Math.random() * window.innerWidth;
    const startY = -10;
    const endX = startX + 200 + Math.random() * 300;
    const endY = window.innerHeight + 10;

    shootingStar.style.left = startX + 'px';
    shootingStar.style.top = startY + 'px';

    document.body.appendChild(shootingStar);

    shootingStar.animate([
      { transform: `translate(0, 0) scale(0)`, opacity: 0 },
      { transform: `translate(0, 0) scale(1)`, opacity: 1, offset: 0.1 },
      { transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0)`, opacity: 0 }
    ], {
      duration: 1500,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => {
      shootingStar.remove();
    };

    // Add trail effect
    const trail = document.createElement('div');
    trail.style.cssText = `
      position: fixed;
      width: 100px;
      height: 1px;
      background: linear-gradient(90deg, transparent, #00f5ff, transparent);
      border-radius: 50%;
      z-index: 1;
      pointer-events: none;
      opacity: 0.7;
    `;

    trail.style.left = (startX - 50) + 'px';
    trail.style.top = startY + 'px';
    trail.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX)}rad)`;

    document.body.appendChild(trail);

    trail.animate([
      { transform: `rotate(${Math.atan2(endY - startY, endX - startX)}rad) translate(0, 0)`, opacity: 0 },
      { transform: `rotate(${Math.atan2(endY - startY, endX - startX)}rad) translate(0, 0)`, opacity: 0.7, offset: 0.1 },
      { transform: `rotate(${Math.atan2(endY - startY, endX - startX)}rad) translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
    ], {
      duration: 1500,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => {
      trail.remove();
    };
  };

  return (
    <div className="cyber-background">
      {/* Animated grid overlay */}
      {showGrid && <div className="cyber-grid"></div>}

      {/* Particles background */}
      {showParticles && <div ref={particlesRef} className="cyber-particles"></div>}

      {/* Content */}
      <div className="cyber-content">
        {children}
      </div>
    </div>
  );
};

export default CyberBackground;