export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6 text-center rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur p-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Ready to secure your stack?</h3>
        <p className="mt-2 text-blue-200/90 max-w-2xl mx-auto">Tell us about your environment and goals. Our team will tailor a plan across Aveli, Varai, and Cyber Suite.</p>

        <form onSubmit={(e)=>e.preventDefault()} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input required placeholder="Work email" className="rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          <input required placeholder="Company" className="rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          <button className="rounded-xl px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition">
            Request demo
          </button>
        </form>

        <p className="mt-3 text-xs text-blue-200/70">By submitting, you agree to our privacy policy.</p>
      </div>
    </section>
  );
}
