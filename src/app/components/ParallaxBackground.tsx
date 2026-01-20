import { useEffect, useRef } from "react";

type ParallaxBackgroundProps = {
  strength?: number; // max movement in px
};

export function ParallaxBackground({ strength = 20 }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastPointerTimeRef = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    // Always listen to pointer movement (mouse + touch + pen)
    const onPointerMove = (e: PointerEvent) => {
      if (reduceMotion) return;

      lastPointerTimeRef.current = Date.now();

      const nx = (e.clientX / window.innerWidth) * 2 - 1; // -1..1
      const ny = (e.clientY / window.innerHeight) * 2 - 1; // -1..1

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.setProperty("--px", `${nx * strength}px`);
        el.style.setProperty("--py", `${ny * strength}px`);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Fallback gentle animation if pointer events don't happen (or on touch)
    let animRaf: number | null = null;
    const animateFallback = () => {
      const now = Date.now();
      const recentlyMovedPointer = now - lastPointerTimeRef.current < 1200;

      // If reduced motion, keep it static
      if (reduceMotion) return;

      // If no pointer movement recently, do a subtle float so user still sees motion
      if (!recentlyMovedPointer) {
        const t = performance.now() / 1000;
        const fx = Math.sin(t * 0.8) * (strength * 0.35);
        const fy = Math.cos(t * 0.9) * (strength * 0.35);
        el.style.setProperty("--px", `${fx}px`);
        el.style.setProperty("--py", `${fy}px`);
      }

      animRaf = requestAnimationFrame(animateFallback);
    };

    animRaf = requestAnimationFrame(animateFallback);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (animRaf) cancelAnimationFrame(animRaf);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={
        {
          // defaults before any movement
          ["--px" as any]: "0px",
          ["--py" as any]: "0px",
        } as any
      }
    >
      {/* Layer 1: visible blobs (you WILL notice movement) */}
      <div
        className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_20%,rgba(255,0,0,0.35),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(0,0,255,0.25),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(0,255,140,0.22),transparent_55%)]"
        style={{
          transform: "translate3d(var(--px), var(--py), 0)",
          willChange: "transform",
        }}
      />

      {/* Layer 2: brand gradient (subtle) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/12 via-[#06B6D4]/10 to-transparent"
        style={{
          transform:
            "translate3d(calc(var(--px) * 0.65), calc(var(--py) * 0.65), 0)",
          willChange: "transform",
        }}
      />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.4%22/%3E%3C/svg%3E')] bg-repeat" />
    </div>
  );
}
