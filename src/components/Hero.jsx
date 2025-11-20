import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.18),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.12),transparent_40%)]" />

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-28 flex items-center min-h-[90vh]">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-sky-200 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Exploring startups, product, and playful tech
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            I build delightful products for ambitious startups
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-5 text-lg md:text-xl text-slate-300">
            Founder-friendly generalist focused on zero-to-one execution: research, design, and full‑stack prototypes with momentum.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-sky-500/90 hover:bg-sky-400 text-white px-5 py-3 font-medium shadow-lg shadow-sky-500/25 transition">
              See projects
            </a>
            <a href="#contact" className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-medium backdrop-blur border border-white/10 transition">
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
