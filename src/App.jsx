import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import NatureBackdrop from './components/NatureBackdrop';

function App() {
  return (
    <div className="min-h-screen bg-[#07120e] text-emerald-50 selection:bg-emerald-300/30 selection:text-emerald-900">
      <NatureBackdrop />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="py-10 border-t border-emerald-500/10 bg-[#07120e]/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-200/70">© {new Date().getFullYear()} • Built with curiosity and momentum.</p>
          <div className="text-sm text-emerald-200/70">
            Open to: product roles, advisory, and experiments.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
