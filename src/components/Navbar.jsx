import { Menu, ShieldCheck, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Arivar</p>
            <p className="text-xs text-blue-200/80 -mt-0.5">Secure. Simple. Scalable.</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#products" className="text-blue-100/90 hover:text-white transition">Products</a>
          <a href="#why" className="text-blue-100/90 hover:text-white transition">Why Arivar</a>
          <a href="#contact" className="text-blue-100/90 hover:text-white transition">Contact</a>
          <a href="/test" className="text-blue-100/90 hover:text-white transition inline-flex items-center gap-1">Dev <ChevronDown className="h-3 w-3" /></a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-blue-100/90 hover:text-white transition px-3 py-2 rounded-lg">Talk to Sales</a>
          <a href="#" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition">Get Started</a>
        </div>

        <button aria-label="Open menu" onClick={() => setOpen(!open)} className="md:hidden text-white">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-4 rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur p-4 space-y-3">
          <a href="#products" className="block text-blue-100/90">Products</a>
          <a href="#why" className="block text-blue-100/90">Why Arivar</a>
          <a href="#contact" className="block text-blue-100/90">Contact</a>
          <a href="#" className="block text-white font-medium">Get Started</a>
        </div>
      )}
    </header>
  );
}
