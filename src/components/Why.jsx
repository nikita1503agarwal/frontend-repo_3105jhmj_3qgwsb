export default function Why() {
  const points = [
    {
      title: 'Security by design',
      desc: 'Every product is built with a security-first mindset. Minimal attack surface, strong defaults, and continuous hardening.',
    },
    {
      title: 'Built for scale',
      desc: 'From startups to large enterprises, Arivar scales predictably with transparent performance and cost.',
    },
    {
      title: 'Simple to adopt',
      desc: 'Modern APIs, clear documentation, and thoughtful UX so teams can move fast without friction.',
    },
  ];

  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Why Arivar</h2>
          <p className="mt-2 text-blue-200/90">Security that fades into the background so your teams can focus on what matters.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur p-6">
              <h3 className="text-white font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
