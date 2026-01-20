import { useEffect, useRef } from "react";

type ParallaxBackgroundProps = {
  /** Max movement in pixels at screen edges */
  strength?: number;
};

export function ParallaxBackground({ strength = 18 }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) return;

    // Only on fine pointer devices (mouse/trackpad)
    const finePointer = window.matchMedia?.("(pointer:fine)")?.matches;
    if (!finePointer) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1; // -1..1
      const ny = (e.clientY / window.innerHeight) * 2 - 1;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.setProperty("--px", `${nx * strength}px`);
        el.style.setProperty("--py", `${ny * strength}px`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={
        {
          // defaults if mouse hasn't moved yet
          ["--px" as any]: "0px",
          ["--py" as any]: "0px",
        } as React.CSSProperties
      }
    >
      {/* Layer 1 */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/12 via-[#06B6D4]/10 to-transparent"
        style={{ transform: "translate3d(var(--px), var(--py), 0)" }}
      />

      {/* Layer 2 (moves slightly more) */}
      <div
        className="absolute inset-0 [background:radial-gradient(circle_at_20%_20%,rgba(13,148,136,0.22),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.18),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(13,148,136,0.12),transparent_50%)]"
        style={{ transform: "translate3d(calc(var(--px) * 1.25), calc(var(--py) * 1.25), 0)" }}
      />

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.4%22/%3E%3C/svg%3E')] bg-repeat" />
    </div>
  );
}
