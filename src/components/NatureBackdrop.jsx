import { motion } from 'framer-motion';

// A subtle, living background: gradient, drifting particles, and a soft grain overlay
export default function NatureBackdrop() {
  const particles = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 6,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 6,
    duration: Math.random() * 12 + 12,
  }));

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Deep forest gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_10%_10%,#0b3d2c_0%,#0a2a1f_30%,#081b14_60%,#07120e_100%)]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.35),transparent_60%)]" />

      {/* Drifting particles (like floating spores/leaves glints) */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 0],
              y: [p.y + 10, p.y - 30, p.y + 10],
              x: [p.x, p.x + 5, p.x - 5],
            }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full"
            style={{
              top: `${p.y}%`,
              left: `${p.x}%`,
              width: p.size,
              height: p.size,
              background:
                'radial-gradient(circle at 30% 30%, rgba(163, 230, 53, 0.45), rgba(34, 197, 94, 0.15) 60%, rgba(34,197,94,0) 70%)',
              filter: 'blur(0.3px)',
            }}
          />
        ))}
      </div>

      {/* Soft grain overlay */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.8\'/></svg>")' }} />
    </div>
  );
}
