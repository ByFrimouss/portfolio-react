// ============================================================
// CursorTrail.jsx
// Effet de traînée numérique sur le curseur.
// ============================================================

import { useEffect, useRef } from "react";

// --- Constantes configurables ---
const TRAIL_INTERVAL = 2;
const PARTICLE_COUNT = 120;
const PARTICLE_SPEED = 1.5;
const PARTICLE_SIZE = 20;
const CURSOR_RADIUS = 14;

const CHARS = ["0", "1", "·", "×", "+", "/", "<", ">", "$", "@", "#", "{}"];
const COLORS = ["106,92,255", "106,92,255", "255,77,158", "0,229,255"];

// ============================================================
// Classe Particle — EN DEHORS du composant (fix ESLint)
//
// spawn(mx, my) reçoit la position souris en paramètre
// draw(ctx)     reçoit le contexte canvas en paramètre
// → Plus de closure sur des variables du useEffect
// ============================================================
class Particle {
  constructor() {
    this.life = 0;
  }

  spawn(mx, my) {
    this.x = mx;
    this.y = my;
    this.vx = (Math.random() - 0.5) * PARTICLE_SPEED * 1.5;
    this.vy = (Math.random() - 1.3) * PARTICLE_SPEED;
    this.life = 1;
    this.decay = 0.01 + Math.random() * 0.015;
    this.size = PARTICLE_SIZE * (0.7 + Math.random() * 0.7);
    this.char = CHARS[Math.floor(Math.random() * CHARS.length)];
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.angle = 0;
    this.rot = (Math.random() - 0.5) * 0.06;
  }

  update() {
    this.vy += 0.035;
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.97;
    this.life -= this.decay;
    this.angle += this.rot;
  }

  // ctx passé en paramètre — pas de closure
  draw(ctx) {
    if (this.life <= 0) return;
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.life * 0.9);
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = `rgba(${this.color}, ${this.life})`;
    ctx.font = `${this.size}px 'JetBrains Mono', monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowBlur = 14;
    ctx.shadowColor = `rgba(${this.color}, 0.9)`;
    ctx.fillText(this.char, 0, 0);
    ctx.restore();
  }
}

// ============================================================
// Composant React
// ============================================================
export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Redimensionne le canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Position souris (variables mutables dans le scope du useEffect)
    let mx = -999,
      my = -999;
    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onMouseLeave = () => {
      mx = -999;
      my = -999;
    };
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Curseur custom — position lissée (lerp)
    let curX = 0,
      curY = 0;

    const drawCursor = () => {
      if (mx === -999) return;

      // Lerp : anneau qui "rattrape" la vraie position
      curX += (mx - curX) * 0.2;
      curY += (my - curY) * 0.2;

      ctx.save();
      // Anneau bleu
      ctx.strokeStyle = "rgba(106,92,255,0.65)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(curX, curY, CURSOR_RADIUS, 0, Math.PI * 2);
      ctx.stroke();

      // Point rose centré sur la vraie position
      ctx.fillStyle = "rgba(255,77,158,0.95)";
      ctx.beginPath();
      ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Mini croix
      ctx.strokeStyle = "rgba(255,77,158,0.45)";
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(mx - 8, my);
      ctx.lineTo(mx + 8, my);
      ctx.moveTo(mx, my - 8);
      ctx.lineTo(mx, my + 8);
      ctx.stroke();
      ctx.restore();
    };

    // Pool de particules (instanciées une seule fois)
    const pool = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    let frameCount = 0;
    let rafId;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;

      // Spawn si la souris est dans la fenêtre
      if (mx !== -999 && frameCount % TRAIL_INTERVAL === 0) {
        const dead = pool.find((p) => p.life <= 0);
        // spawn reçoit mx/my en paramètres (plus de closure)
        if (dead) dead.spawn(mx, my);
      }

      // Update + draw de chaque particule vivante
      for (const p of pool) {
        if (p.life > 0) {
          p.update();
          // draw reçoit ctx en paramètre (plus de closure)
          p.draw(ctx);
        }
      }

      drawCursor();
      rafId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
