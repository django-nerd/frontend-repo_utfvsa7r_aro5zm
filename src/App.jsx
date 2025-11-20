import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/10 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} • Built with curiosity and momentum.</p>
          <div className="text-sm text-slate-400">
            Open to: product roles, advisory, and experiments.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
