import { motion } from 'framer-motion';
import { Trees, Recycle, Compass } from 'lucide-react';

export default function About() {
  const items = [
    { t: 'Zero-to-One', d: 'Discovery, problem framing, and narrative—planted with intention.', icon: Compass },
    { t: 'Design + Code', d: 'Rapid prototypes using modern JS and Python—grow fast, prune often.', icon: Recycle },
    { t: 'Systems', d: 'Lightweight processes that compound like healthy ecosystems.', icon: Trees },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(52,211,153,0.08),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          About
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-emerald-100/90 text-lg">
          I help early teams go from idea to traction by combining strategy, design thinking, and pragmatic engineering.
        </motion.p>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {items.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-emerald-500/15 bg-white/5 p-5 relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-emerald-300/10 blur-2xl group-hover:bg-emerald-300/20 transition" />
              <div className="flex items-center gap-3">
                <c.icon className="h-5 w-5 text-emerald-300" />
                <h3 className="text-white font-semibold">{c.t}</h3>
              </div>
              <p className="text-emerald-100/90 text-sm mt-2">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
