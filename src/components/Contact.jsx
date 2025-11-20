import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Check, AlertTriangle } from 'lucide-react';

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
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-12">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Get in touch
        </motion.h2>
        <p className="mt-3 text-emerald-100/90">Say hello—always happy to chat about ideas, users, and go-to-market.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-emerald-900/20 border border-emerald-500/20 px-4 py-3 text-white placeholder-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
            <input type="email" name="email" required placeholder="Email" className="w-full rounded-xl bg-emerald-900/20 border border-emerald-500/20 px-4 py-3 text-white placeholder-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
          </div>
          <textarea name="message" required rows="5" placeholder="Tell me about your project" className="w-full rounded-xl bg-emerald-900/20 border border-emerald-500/20 px-4 py-3 text-white placeholder-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />

          <div className="flex items-center gap-3">
            <button disabled={status==='loading'} className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-emerald-950 px-5 py-3 font-medium shadow-lg shadow-emerald-500/25 transition">
              <Send className="h-4 w-4" />
              {status==='loading' ? 'Sending...' : 'Send message'}
            </button>
            <div className="inline-flex items-center gap-2 text-emerald-200/80">
              <MessageCircle className="h-4 w-4" /> Usually replies within a day
            </div>
          </div>

          {status==='success' && (
            <div className="flex items-center gap-2 text-emerald-300">
              <Check className="h-4 w-4" /> Thanks! I’ll reply soon.
            </div>
          )}
          {status==='error' && (
            <div className="flex items-center gap-2 text-amber-300">
              <AlertTriangle className="h-4 w-4" /> Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
