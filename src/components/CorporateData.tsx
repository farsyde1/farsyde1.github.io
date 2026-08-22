import { useState } from 'react'
import { Check, Copy, Landmark, Package } from 'lucide-react'
import { COMPANY } from '../data/company'

function CopyField({
  label,
  value,
  mono,
}: {
  label: string
  value: string
  mono?: boolean
}) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = value
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 py-4 last:border-b-0">
      <div>
        <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
          {label}
        </p>
        <p className={`mt-1 text-sm font-bold text-white uppercase ${mono ? 'font-mono' : ''}`}>
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-300 transition-all hover:border-accent-400 hover:text-accent-400"
      >
        {copied ? <Check size={12} className="text-accent-300" /> : <Copy size={12} />}
        {copied ? 'COPIED' : 'COPY'}
      </button>
    </div>
  )
}

export default function CorporateData() {
  return (
    <section
      id="compliance"
      className="scroll-mt-16 border-y border-white/5 bg-navy-900 py-24 relative"
    >
      <div className="absolute top-4 left-6 font-mono text-[9px] text-zinc-600 select-none">
        REF: PRT-PROC-05
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="border-l-2 border-accent-400 pl-6 lg:pl-8">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-400 font-mono">
                [ 05 // PROCUREMENT &amp; CONTRACTING ]
              </p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl uppercase font-mono tracking-tight">
                Compliance &amp; Data
              </h2>
            </div>
            
            <p className="mt-6 leading-relaxed text-zinc-400 font-sans text-sm sm:text-base">
              FARSYDE LLC is classified under the NAICS codes below and
              maintains an active SAM.gov registration, ready for federal
              procurement, GSA schedules, and prime contractor teaming
              agreements. Copy any code for your solicitations and capture
              tools.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs">
              <span className="inline-flex items-center gap-2 border border-accent-400/20 bg-accent-400/5 px-3 py-1.5 text-accent-300">
                <Landmark size={14} />
                SAM REGISTRATION: ACTIVE
              </span>
              <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-400">
                <Package size={14} />
                NAICS-CLASSIFIED
              </span>
            </div>
          </div>

          <div className="border border-white/10 bg-navy-950/40 p-8 relative group">
            <div className="absolute top-0 right-0 border-t-4 border-r-4 border-white/5 group-hover:border-accent-400/30 w-3 h-3 transition-colors" />
            <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-white/5 group-hover:border-accent-400/30 w-3 h-3 transition-colors" />

            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">
              [ COMPANY PROFILE &amp; IDENTIFIERS ]
            </h3>
            
            <div className="mt-2">
              <CopyField label="Legal Entity Name" value={COMPANY.name} />
              <CopyField
                label={`Primary NAICS Code`}
                value={COMPANY.primaryNaics}
                mono
              />
              <CopyField
                label={`Secondary NAICS Code`}
                value={COMPANY.secondaryNaics}
                mono
              />
            </div>
            
            <div className="mt-6 space-y-2 font-mono text-[11px] text-zinc-400 border-t border-white/5 pt-4">
              <p>
                <span className="font-bold text-accent-400">{COMPANY.primaryNaics}</span> —{' '}
                {COMPANY.primaryNaicsLabel}
              </p>
              <p>
                <span className="font-bold text-accent-400">{COMPANY.secondaryNaics}</span> —{' '}
                {COMPANY.secondaryNaicsLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}