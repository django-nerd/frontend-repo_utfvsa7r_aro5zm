import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          About
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-slate-300 text-lg">
          I help early teams go from idea to traction by combining product strategy, design thinking, and pragmatic engineering. I love scrappy experiments, clear narrative, and shipping fast.
        </motion.p>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {[{t:'Zero-to-One',d:'Customer discovery, problem framing, and narrative.'},{t:'Design + Code',d:'Rapid prototypes using modern JS and Python.'},{t:'Systems',d:'Simple processes for compounding momentum.'}].map((c,i) => (
            <motion.div key={c.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-white font-semibold">{c.t}</h3>
              <p className="text-slate-300 text-sm mt-1">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
