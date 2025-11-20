import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background glows in forest tones */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(52,211,153,0.16),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(187,247,208,0.12),transparent_40%)]" />

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#07120e]/10 via-[#07120e]/40 to-[#07120e]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-28 flex items-center min-h-[92vh]">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-200 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Rooted in product, growing delightful experiences
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building playful products for ambitious teams
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-5 text-lg md:text-xl text-emerald-100/90">
            Strategy, design, and full‑stack prototyping with a bias toward shipping.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-emerald-950 px-5 py-3 font-medium shadow-lg shadow-emerald-500/25 transition">
              Explore projects
            </a>
            <a href="#contact" className="rounded-xl bg-white/5 hover:bg-white/10 text-white px-5 py-3 font-medium backdrop-blur border border-white/10 transition">
              Get in touch
            </a>
          </motion.div>

          {/* Wavy divider */}
          <motion.div aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
