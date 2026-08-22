import { Network, Container, FileCheck2 } from 'lucide-react'
import { COMPANY } from '../data/company'

const COMPETENCIES = [
  {
    icon: Network,
    title: 'DISTRIBUTED SYSTEMS & DATA PIPELINES',
    description:
      'High-throughput event streaming and ingestion for mission-critical intelligence and defense data.',
    points: [
      'Enterprise event streaming with Apache Kafka and Spring Boot',
      'High-performance data management with PostgreSQL/PostGIS',
      'Resilient, fault-tolerant pipeline architecture',
    ],
  },
  {
    icon: Container,
    title: 'CLOUD-NATIVE & CONTAINER ARCHITECTURE',
    description:
      'Secure, portable, and repeatable infrastructure for sensitive operational environments.',
    points: [
      'Enterprise container orchestration with Kubernetes',
      'Declarative application deployment with Helm',
      'Infrastructure-as-code for secure environments',
    ],
  },
  {
    icon: FileCheck2,
    title: 'REQUIREMENTS & SYSTEMS ENGINEERING',
    description:
      'Structured, traceable requirements engineering tailored for national security missions.',
    points: [
      'Elicitation and baseline management of capability needs',
      'Capability tracking and program funding frameworks',
      'Architectural documentation for defense intelligence',
    ],
  },
]

export default function Competencies() {
  return (
    <section id="capabilities" className="scroll-mt-16 bg-navy-950 py-24 relative">
      <div className="absolute top-4 left-6 font-mono text-[9px] text-zinc-600 select-none">
        REF: PRT-CAPS-02
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl border-l-2 border-accent-400 pl-6 lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-400 font-mono">
            [ 02 // CORE CAPABILITIES ]
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl uppercase font-mono tracking-tight">
            Engineering for the Mission
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-sm sm:text-base">
            {COMPANY.name} delivers code-level solutions across the full software
            lifecycle for DoD and IC customers — from data pipelines to
            deployed, containerized systems.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {COMPETENCIES.map((item, index) => (
            <div
              key={item.title}
              className="group border border-white/10 bg-navy-900/40 p-8 transition-all hover:border-accent-400/50 relative"
            >
              {/* Corner accent decorations */}
              <div className="absolute top-0 right-0 border-t-4 border-r-4 border-white/5 group-hover:border-accent-400/30 w-3 h-3 transition-colors" />
              <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-white/5 group-hover:border-accent-400/30 w-3 h-3 transition-colors" />
              
              <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-600 group-hover:text-accent-400/50">
                [ {index + 1} / 3 ]
              </div>

              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 text-accent-400 transition-colors group-hover:border-accent-400/40 group-hover:bg-accent-400/5">
                <item.icon size={22} />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight uppercase font-mono">{item.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400 font-sans">
                {item.description}
              </p>
              <ul className="mt-5 space-y-3 border-t border-white/5 pt-5 font-mono text-[11px] text-zinc-300">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}