import { motion } from 'framer-motion';
import { Github, ExternalLink, Leaf, Sprout } from 'lucide-react';

const projects = [
  {
    title: 'Founder OS',
    desc: 'Lightweight toolkit to validate ideas: interviews, experiments, metrics.',
    tags: ['Customer Discovery', 'MVP', 'No-Code'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Pitchcraft',
    desc: 'Interactive deck generator with AI-assisted story arcs for fundraising.',
    tags: ['AI', 'Storytelling', 'Design'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Launchpad',
    desc: 'Rapid prototyping starter for SaaS with auth, billing, and components.',
    tags: ['SaaS', 'Dev', 'DX'],
    links: { live: '#', github: '#' },
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-start justify-between gap-6 mb-10">
          <div>
            <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Selected Projects
            </motion.h2>
            <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp} className="mt-3 text-emerald-100/90 max-w-2xl">
              A mix of experiments and tools exploring the zero-to-one journey for startups.
            </motion.p>
          </div>
          <motion.a initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm font-medium backdrop-blur border border-white/10 transition">
            <Sprout className="h-4 w-4 text-emerald-300" />
            Collaborate
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-emerald-500/15 bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 p-5 hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.18)] transition relative overflow-hidden"
            >
              {/* organic highlight blob */}
              <div className="absolute -top-12 -right-16 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl group-hover:bg-emerald-300/20 transition" />

              <div className="h-40 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.22),transparent_60%)]" />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-emerald-100/90">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs text-emerald-200/90 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.links.live} className="inline-flex items-center gap-1 text-emerald-100 hover:text-white text-sm">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.links.github} className="inline-flex items-center gap-1 text-emerald-100 hover:text-white text-sm">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
