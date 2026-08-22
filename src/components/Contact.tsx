import { Mail, Phone } from 'lucide-react'
import { COMPANY } from '../data/company'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-navy-950 py-24 relative">
      <div className="absolute top-4 left-6 font-mono text-[9px] text-zinc-600 select-none">
        REF: PRT-CON-06
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="border-l-2 border-accent-400 pl-6 lg:pl-8">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-400 font-mono">
                [ 06 // SECURE COMMUNICATIONS ]
              </p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl uppercase font-mono tracking-tight">
                Initiate Support
              </h2>
            </div>
            
            <p className="mt-6 leading-relaxed text-zinc-400 font-sans text-sm sm:text-base">
              FARSYDE LLC is ready to support your mission. Reach out to
              discuss technical requirements, teaming opportunities, or contract vehicles.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-4 border border-white/10 bg-navy-900/40 p-5 transition-colors hover:border-accent-400/40 relative group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-accent-400 group-hover:border-accent-400/30">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Secure Email</p>
                  <p className="font-semibold text-white font-mono text-sm">{COMPANY.email}</p>
                </div>
              </a>
              <a
                href={`tel:${COMPANY.phone.replace(/-/g, '')}`}
                className="flex items-center gap-4 border border-white/10 bg-navy-900/40 p-5 transition-colors hover:border-accent-400/40 relative group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-white/5 text-accent-400 group-hover:border-accent-400/30">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Secure Direct Line</p>
                  <p className="font-semibold text-white font-mono text-sm">{COMPANY.phone}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="border border-white/10 bg-navy-900/40 p-8 relative group">
            <div className="absolute top-0 right-0 border-t-4 border-r-4 border-white/5 group-hover:border-accent-400/30 w-3 h-3 transition-colors" />
            <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-white/5 group-hover:border-accent-400/30 w-3 h-3 transition-colors" />

            <h3 className="text-xs font-bold text-accent-400 uppercase tracking-widest font-mono">
              [ DIRECT POINT OF CONTACT ]
            </h3>
            
            <div className="mt-6 border border-white/5 bg-navy-950/60 p-6 relative">
              <div className="absolute top-2 right-3 font-mono text-[8px] text-zinc-600">
                ROLE: PRINCIPAL_ENG
              </div>
              <p className="text-base font-bold text-white font-mono uppercase">
                {COMPANY.pocName}
              </p>
              <p className="text-[10px] font-mono text-accent-400 font-bold uppercase tracking-wider mt-0.5">{COMPANY.pocTitle}</p>
              
              <div className="mt-6 space-y-3 font-mono text-xs text-zinc-400 border-t border-white/5 pt-4">
                <p className="flex items-center gap-3">
                  <Mail size={14} className="text-accent-400" />
                  {COMPANY.email}
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={14} className="text-accent-400" />
                  {COMPANY.phone}
                </p>
              </div>
            </div>
            
            <p className="mt-6 text-[11px] font-mono leading-relaxed text-zinc-500 uppercase">
              // RESPONSE TO FEDERAL INQUIRIES TYPICALLY COMPLETED WITHIN 24 HOURS.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}