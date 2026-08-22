import { COMPANY } from '../data/company'

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-y border-white/5 bg-navy-900 py-24 relative"
    >
      {/* Corner decor to mimic engineering schematic */}
      <div className="absolute top-4 left-6 font-mono text-[9px] text-zinc-600 select-none">
        REF: PRT-ABOUT-01
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="border-l-2 border-accent-400 pl-6 lg:pl-8">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-400 font-mono">
              [ 01 // COMPANY OVERVIEW ]
            </p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl uppercase font-mono tracking-tight">
              Built for Speed.
              <br />
              Ready for Mission.
            </h2>
          </div>
          <div className="space-y-4 leading-relaxed text-zinc-400 font-sans text-sm sm:text-base">
            <p>
              {COMPANY.name} is a specialized software engineering firm
              delivering rapid, secure, and resilient solutions for the
              Department of Defense, the Intelligence Community, and prime
              contractors. Our name reflects the boundary condition — the
              edge where requirements become deployed capability.
            </p>
            <p>
              We are built on modern architectures and disciplined engineering
              practices, providing defense and intelligence organizations with
              the code-level rigor, cleared talent, and mission focus required
              to bridge critical capability gaps.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}