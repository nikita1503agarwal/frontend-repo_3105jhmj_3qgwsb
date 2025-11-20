import { ShieldCheck, ServerCog, Radar, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Aveli",
    tag: "Endpoint Security",
    desc: "Next-gen detection and response for modern teams. Lightweight agent, powerful analytics.",
    icon: ShieldCheck,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    name: "Varai",
    tag: "System Management",
    desc: "Unified policy, provisioning, and patch automation across your fleet.",
    icon: ServerCog,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    name: "Cyber Suite",
    tag: "Cybersecurity",
    desc: "Threat intel, compliance, and continuous monitoring in one cohesive platform.",
    icon: Radar,
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_20%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_300px_at_80%_20%,rgba(99,102,241,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Products</h2>
          <p className="mt-2 text-blue-200/90">Security-first tools that are minimal by design and powerful in practice.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <a key={p.name} href="#contact" className="group rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur p-6 hover:bg-slate-900/70 transition shadow-lg shadow-black/20">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center shadow-lg shadow-black/30`}>
                <p.icon className="h-6 w-6 text-white" />
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-medium text-lg">{p.name}</h3>
                  <span className="text-[11px] text-blue-200/70 border border-white/10 rounded-full px-2 py-0.5">{p.tag}</span>
                </div>
                <p className="mt-2 text-sm text-blue-200/80 leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-cyan-300">
                Learn more <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
