import { Shield, Landmark, FileText, ArrowRight, Download } from 'lucide-react'
import { COMPANY } from '../data/company'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-950 pt-36 pb-24 border-b border-white/5"
    >
      {/* Tactical HUD grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 tactical-grid opacity-60"
      />
      
      {/* Corner indicators for military HUD layout */}
      <div className="absolute top-20 left-4 font-mono text-[9px] text-accent-400/40 select-none hidden md:block">
        SYS.LOC // [38.9072° N, 77.0369° W]
      </div>
      <div className="absolute top-20 right-4 font-mono text-[9px] text-accent-400/40 select-none hidden md:block">
        SEC.LVL // LEVEL_4_TS_SCI
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            {/* Muted tactical alert badge */}
            <p className="mb-6 inline-flex items-center border border-accent-400/30 bg-accent-400/5 px-3 py-1 text-xs font-mono tracking-widest text-accent-300 uppercase">
              <span className="mr-2 inline-block h-2 w-2 bg-accent-400 animate-pulse" />
              STATUS: READY // {COMPANY.name} // CAGE/SAM VERIFIED
            </p>

            <h1 className="text-4xl font-black tracking-tight uppercase leading-none text-white sm:text-5xl lg:text-7xl font-mono">
              Agile Code.
              <br />
              <span className="text-accent-400">
                Mission Ready.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 font-sans">
              Specialized software engineering delivering rapid, secure, and
              resilient code-level solutions for the Department of Defense, the
              Intelligence Community, and key prime contractors.
            </p>

            {/* Muted technical tags */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-accent-400/75">
              <span className="border border-white/5 bg-white/5 px-2 py-0.5">[ DISTRIBUTED SYSTEMS ]</span>
              <span className="border border-white/5 bg-white/5 px-2 py-0.5">[ CLOUD-NATIVE PIPELINES ]</span>
              <span className="border border-white/5 bg-white/5 px-2 py-0.5">[ SYSTEMS ENG ]</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 border border-accent-400 bg-accent-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-accent-400"
              >
                Explore Capabilities
                <ArrowRight size={16} />
              </a>
              <a
                href={`/${COMPANY.name.replace(/\s+/g, '_')}_Capabilities_Statement.pdf`}
                className="inline-flex items-center gap-2 border border-white/20 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-accent-400 hover:text-accent-400"
              >
                <Download size={16} />
                Capabilities Statement
              </a>
            </div>
          </div>

          {/* Verification Widget - styled like a terminal display */}
          <div className="border border-white/10 bg-navy-900/60 p-6 lg:p-8 relative">
            {/* Top decorative bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-accent-400" />
            <div className="absolute top-2 right-3 font-mono text-[9px] text-zinc-500">
              ID: 099-281-A
            </div>
            
            <p className="text-xs font-bold uppercase tracking-widest text-accent-400 font-mono">
              [ REGISTERED &amp; VERIFIED ]
            </p>
            
            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-accent-400">
                  <Shield size={20} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Personnel Status</p>
                  <p className="text-sm font-bold text-white uppercase font-mono">
                    TS/SCI Cleared Engineers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-accent-400">
                  <Landmark size={20} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Federal Registry</p>
                  <p className="text-sm font-bold text-white uppercase font-mono">
                    SAM.gov Active [CAGE Ready]
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-accent-400">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Primary NAICS</p>
                  <p className="font-mono text-sm font-bold text-white">
                    {COMPANY.primaryNaics} // CUSTOM SOFTWARE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}