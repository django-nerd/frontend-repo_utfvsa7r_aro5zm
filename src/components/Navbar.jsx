import { useEffect, useState } from 'react';
import { Menu, X, Leaf, Mail, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const Item = ({ href, children }) => (
    <a href={href} className="text-emerald-100/90 hover:text-white px-3 py-2 rounded-lg hover:bg-emerald-500/10 transition">
      {children}
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className={`mt-4 flex items-center justify-between rounded-2xl border ${scrolled ? 'border-emerald-500/20 bg-emerald-900/40' : 'border-emerald-500/10 bg-emerald-900/20'} backdrop-blur px-4 py-3 transition-colors`}>
          <a href="#home" className="flex items-center gap-2 text-white">
            <Leaf className="h-5 w-5 text-emerald-400" />
            <span className="font-semibold tracking-tight">Nature Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <Item href="#projects">Projects</Item>
            <Item href="#about">About</Item>
            <Item href="#contact">Contact</Item>
          </nav>

          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-emerald-950 px-4 py-2 text-sm font-medium shadow-lg shadow-emerald-500/25 transition">
            <Mail className="h-4 w-4" />
            Contact
          </a>

          <button className="md:hidden text-emerald-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-emerald-500/20 bg-emerald-900/50 backdrop-blur p-3">
            <div className="flex flex-col">
              <Item href="#projects">Projects</Item>
              <Item href="#about">About</Item>
              <Item href="#contact">Contact</Item>
              <a href="#contact" className="mt-2 inline-flex items-center gap-2 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-emerald-950 px-4 py-2 text-sm font-medium shadow-lg shadow-emerald-500/25 transition">
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
