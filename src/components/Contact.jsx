import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const backend = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      e.target.reset();
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Get in touch
        </motion.h2>
        <p className="mt-3 text-slate-300">Say hello—always happy to chat about ideas, users, and go-to-market.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <input type="email" name="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          </div>
          <textarea name="message" required rows="5" placeholder="Tell me about your project" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <button disabled={status==='loading'} className="inline-flex items-center gap-2 rounded-xl bg-sky-500/90 hover:bg-sky-400 text-white px-5 py-3 font-medium shadow-lg shadow-sky-500/25 transition">
            <Send className="h-4 w-4" />
            {status==='loading' ? 'Sending...' : 'Send message'}
          </button>
          {status==='success' && <p className="text-emerald-400">Thanks! I’ll reply soon.</p>}
          {status==='error' && <p className="text-rose-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}
