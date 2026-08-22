import { Satellite, Layers } from 'lucide-react'

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative scroll-mt-16 overflow-hidden border-y border-white/5 bg-navy-900 py-24"
    >
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 tactical-grid opacity-30"
      />
      <div className="absolute top-4 left-6 font-mono text-[9px] text-zinc-600 select-none">
        REF: PRT-EXP-03
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl border-l-2 border-accent-400 pl-6 lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-400 font-mono">
            [ 03 // DOMAIN EXPERTISE ]
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl uppercase font-mono tracking-tight">
            Deep Domain Experience
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Card 1 */}
          <div className="border border-white/10 bg-navy-950/40 p-8 hover:border-accent-400/40 transition-all relative group">
            <div className="absolute top-0 right-0 border-t-4 border-r-4 border-white/5 group-hover:border-accent-400/30 w-3 h-3 transition-colors" />
            <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-white/5 group-hover:border-accent-400/30 w-3 h-3 transition-colors" />

            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 text-accent-400 group-hover:border-accent-400/30 transition-colors">
              <Satellite size={22} />
            </div>
            
            <h3 className="text-lg font-bold text-white uppercase tracking-tight font-mono">
              C4ISR &amp; Intelligence Data Workflows
            </h3>
            
            <p className="mt-4 text-xs leading-relaxed text-zinc-400 font-sans">
              Customization and deployment of advanced situational awareness
              platforms and geospatial analytics tools for defense customers.
              FARSYDE engineers bridge raw intelligence feeds to operational
              decision-making through modern, performant data workflows.
            </p>
            
            <ul className="mt-6 space-y-3 font-mono text-[11px] text-zinc-300">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent-400" />
                Advanced situational awareness platform deployment
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent-400" />
                Geospatial analytics tools for defense customers
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent-400" />
                Intelligence feed integration and data workflow optimization
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="border border-white/10 bg-navy-950/40 p-8 hover:border-accent-400/40 transition-all relative group">
            <div className="absolute top-0 right-0 border-t-4 border-r-4 border-white/5 group-hover:border-accent-400/30 w-3 h-3 transition-colors" />
            <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-white/5 group-hover:border-accent-400/30 w-3 h-3 transition-colors" />

            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 text-accent-400 group-hover:border-accent-400/30 transition-colors">
              <Layers size={22} />
            </div>
            
            <h3 className="text-lg font-bold text-white uppercase tracking-tight font-mono">
              Enterprise Requirements Management
            </h3>
            
            <p className="mt-4 text-xs leading-relaxed text-zinc-400 font-sans">
              Collaboration with internal directorates and sister agencies to
              define, baseline, and manage mission-critical capabilities —
              translating national security objectives into disciplined,
              executable technical requirements.
            </p>
            
            <ul className="mt-6 space-y-3 font-mono text-[11px] text-zinc-300">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent-400" />
                Directorate &amp; sister agency requirements collaboration
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent-400" />
                Baseline definition and management of capabilities
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent-400" />
                Program funding framework integration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}