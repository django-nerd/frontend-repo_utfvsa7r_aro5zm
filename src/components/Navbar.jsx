import { useState } from 'react';
import { Menu, X, Rocket, Mail, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const Item = ({ href, children }) => (
    <a href={href} className="text-slate-200 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition">
      {children}
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur px-4 py-3">
          <a href="#home" className="flex items-center gap-2 text-white">
            <Rocket className="h-5 w-5 text-sky-400" />
            <span className="font-semibold tracking-tight">Startup Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <Item href="#projects">Projects</Item>
            <Item href="#about">About</Item>
            <Item href="#contact">Contact</Item>
          </nav>

          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-sky-500/90 hover:bg-sky-400 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-sky-500/25 transition">
            <Mail className="h-4 w-4" />
            Contact
          </a>

          <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur p-3">
            <div className="flex flex-col">
              <Item href="#projects">Projects</Item>
              <Item href="#about">About</Item>
              <Item href="#contact">Contact</Item>
              <a href="#contact" className="mt-2 inline-flex items-center gap-2 rounded-xl bg-sky-500/90 hover:bg-sky-400 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-sky-500/25 transition">
                <Briefcase className="h-4 w-4" />
                Work with me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
