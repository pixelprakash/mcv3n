import React, { useEffect, useRef } from 'react';

class Particle {
  constructor(x, y, size, color, dispersion, returnSpd) {
    this.x = x + (Math.random() - 0.5) * 10;
    this.y = y + (Math.random() - 0.5) * 10;
    this.originX = x;
    this.originY = y;
    this.vx = (Math.random() - 0.5) * 5;
    this.vy = (Math.random() - 0.5) * 5;
    this.size = size;
    this.color = color;
    this.dispersion = dispersion;
    this.returnSpd = returnSpd;
  }

  update(mouseX, mouseY) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const interactionRadius = 120;

    if (distance < interactionRadius && mouseX !== -1000 && mouseY !== -1000) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (interactionRadius - distance) / interactionRadius;
      this.vx -= forceDirectionX * force * this.dispersion;
      this.vy -= forceDirectionY * force * this.dispersion;
    }

    this.vx += (this.originX - this.x) * this.returnSpd;
    this.vy += (this.originY - this.y) * this.returnSpd;
    this.vx *= 0.85;
    this.vy *= 0.85;

    const distToOrigin = Math.sqrt(
      Math.pow(this.x - this.originX, 2) + Math.pow(this.y - this.originY, 2)
    );
    if (distToOrigin < 1 && Math.random() > 0.95) {
      this.vx += (Math.random() - 0.5) * 0.2;
      this.vy += (Math.random() - 0.5) * 0.2;
    }

    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function ParticleText({
  text = 'Hello',
  fontSize = 120,
  fontFamily = "'Cabinet Grotesk', sans-serif",
  fontWeight = 800,
  particleSize = 1.5,
  particleDensity = 5,
  dispersionStrength = 15,
  returnSpeed = 0.08,
  color = '#ffffff',
  textAlign = 'center',
  height = 120,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let containerWidth = 0;
    let containerHeight = 0;

    const init = () => {
      const container = containerRef.current;
      if (!container) return;

      containerWidth = container.clientWidth;
      containerHeight = container.clientHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = containerWidth * dpr;
      canvas.height = containerHeight * dpr;
      canvas.style.width = containerWidth + 'px';
      canvas.style.height = containerHeight + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, containerWidth, containerHeight);

      const effectiveFontSize = Math.min(fontSize, containerWidth * 0.15);
      ctx.fillStyle = color;
      ctx.font = fontWeight + ' ' + effectiveFontSize + 'px ' + fontFamily;
      ctx.textAlign = textAlign;
      ctx.textBaseline = 'middle';

      const xPos = textAlign === 'center' ? containerWidth / 2 : 0;
      ctx.fillText(text, xPos, containerHeight / 2);

      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
      particles = [];

      const step = Math.max(1, Math.floor(particleDensity * dpr));
      for (let y = 0; y < textCoordinates.height; y += step) {
        for (let x = 0; x < textCoordinates.width; x += step) {
          const index = (y * textCoordinates.width + x) * 4;
          const alpha = textCoordinates.data[index + 3] || 0;
          if (alpha > 128) {
            particles.push(
              new Particle(x / dpr, y / dpr, particleSize, color, dispersionStrength, returnSpeed)
            );
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, containerWidth, containerHeight);
      particles.forEach((p) => {
        p.update(mouseX, mouseY);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => { mouseX = -1000; mouseY = -1000; };

    const handleTouchStart = (e) => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.touches[0].clientX - rect.left;
      mouseY = e.touches[0].clientY - rect.top;
    };

    const handleTouchMove = (e) => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.touches[0].clientX - rect.left;
      mouseY = e.touches[0].clientY - rect.top;
    };

    const timeoutId = setTimeout(() => { init(); animate(); }, 150);

    const resizeObserver = new ResizeObserver(() => init());
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, fontSize, fontFamily, fontWeight, particleSize, particleDensity, dispersionStrength, returnSpeed, color, textAlign]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: height,
        position: 'relative',
        touchAction: 'none',
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}