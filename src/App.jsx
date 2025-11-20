import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Why from './components/Why';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_-10%,rgba(56,189,248,0.08),transparent),radial-gradient(600px_300px_at_80%_10%,rgba(99,102,241,0.07),transparent)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Products />
        <Why />
        <CTA />
        <footer className="py-10 text-center text-blue-200/60 border-t border-white/10">
          <p>© {new Date().getFullYear()} Arivar. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App