import { ShieldCheck, Target, Cpu } from 'lucide-react'

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: 'CLEARED ENGINEERING PERSONNEL',
    description:
      'Principal engineers hold active TS/SCI clearances, enabling immediate integration into classified program work without onboarding delays.',
  },
  {
    icon: Target,
    title: 'MISSION-ALIGNED EXPERTISE',
    description:
      'Deep domain familiarity with defense analytics, high-throughput data pipelines, and enterprise requirements engineering.',
  },
  {
    icon: Cpu,
    title: 'MODERN ENGINEERING STACK',
    description:
      'Command of modern languages and rapid DevOps/infrastructure configuration tailored for secure, high-performance operational environments.',
  },
]

export default function Differentiators() {
  return (
    <section
      id="differentiators"
      className="scroll-mt-16 bg-navy-950 py-24 relative"
    >
      <div className="absolute top-4 left-6 font-mono text-[9px] text-zinc-600 select-none">
        REF: PRT-DIFF-04
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl border-l-2 border-accent-400 pl-6 lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-400 font-mono">
            [ 04 // WHY FARSYDE ]
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl uppercase font-mono tracking-tight">
            Why Partner with FARSYDE
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DIFFERENTIATORS.map((item, index) => (
            <div
              key={item.title}
              className="border border-white/10 bg-navy-900/40 p-8 transition-colors hover:border-accent-400/40 relative group"
            >
              <div className="absolute top-0 right-0 border-t-4 border-r-4 border-white/5 group-hover:border-accent-400/30 w-3 h-3 transition-colors" />
              <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-white/5 group-hover:border-accent-400/30 w-3 h-3 transition-colors" />

              <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-600 group-hover:text-accent-400/50">
                [ 0{index + 1} ]
              </div>

              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 text-accent-400 group-hover:border-accent-400/30 transition-colors">
                <item.icon size={22} />
              </div>
              
              <h3 className="text-base font-bold text-white tracking-tight uppercase font-mono">{item.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400 font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}