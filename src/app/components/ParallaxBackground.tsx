import { useEffect, useRef } from "react";

type ParallaxBackgroundProps = {
  strength?: number; // max pointer movement in px
  opacity?: number;  // overall overlay visibility
};

export function ParallaxBackground({ strength = 18, opacity = 0.22 }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    // Even if reduced motion, we keep the overlay but stop pointer updates
    if (reduceMotion) return;

    const onPointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1; // -1..1
      const ny = (e.clientY / window.innerHeight) * 2 - 1; // -1..1

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.setProperty("--px", `${nx * strength}px`);
        el.style.setProperty("--py", `${ny * strength}px`);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={
        {
          ["--px" as any]: "0px",
          ["--py" as any]: "0px",
          opacity,
        } as React.CSSProperties
      }
    >
      {/* Always-on slow background animation (so motion is visible even without mouse move) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle_at_20%_20%, rgba(13,148,136,0.38), transparent 55%)," +
            "radial-gradient(circle_at_80%_30%, rgba(6,182,212,0.30), transparent 55%)," +
            "radial-gradient(circle_at_40%_85%, rgba(13,148,136,0.20), transparent 50%)",
          transform: "translate3d(var(--px), var(--py), 0)",
          willChange: "transform",
          animation: "nixrixFloat 14s ease-in-out infinite",
          mixBlendMode: "multiply",
        }}
      />

      {/* Soft gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,148,136,0.20), rgba(6,182,212,0.16), rgba(255,255,255,0))",
          transform: "translate3d(calc(var(--px) * 0.6), calc(var(--py) * 0.6), 0)",
          willChange: "transform",
          animation: "nixrixFloat2 18s ease-in-out infinite",
          mixBlendMode: "multiply",
        }}
      />

      {/* Tiny texture */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.10,
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.18) 0.6px, transparent 0.6px)",
          backgroundSize: "18px 18px",
          mixBlendMode: "multiply",
          transform: "translate3d(calc(var(--px) * 0.25), calc(var(--py) * 0.25), 0)",
          willChange: "transform",
        }}
      />

      {/* Keyframes */}
      <style>
        {`
          @keyframes nixrixFloat {
            0%   { transform: translate3d(var(--px), var(--py), 0) scale(1); }
            50%  { transform: translate3d(calc(var(--px) * -0.6), calc(var(--py) * 0.8), 0) scale(1.03); }
            100% { transform: translate3d(var(--px), var(--py), 0) scale(1); }
          }
          @keyframes nixrixFloat2 {
            0%   { transform: translate3d(calc(var(--px) * 0.6), calc(var(--py) * 0.6), 0) scale(1); }
            50%  { transform: translate3d(calc(var(--px) * 0.2), calc(var(--py) * -0.7), 0) scale(1.02); }
            100% { transform: translate3d(calc(var(--px) * 0.6), calc(var(--py) * 0.6), 0) scale(1); }
          }
        `}
      </style>
    </div>
  );
}
