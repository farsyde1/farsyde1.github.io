import { Shield, ExternalLink } from 'lucide-react'
import { COMPANY } from '../data/company'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 relative">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 text-lg font-black tracking-widest text-white font-mono">
              <Shield className="text-accent-400" size={20} />
              FARSYDE
              <span className="text-[9px] font-semibold text-accent-400 border border-accent-400/30 px-1 py-0.2">LLC</span>
            </p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-zinc-500 font-mono uppercase">
              // {COMPANY.tagline} Specialized software engineering for defense and
              intelligence missions.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent-400 font-mono">
              [ CONNECT ]
            </p>
            <ul className="mt-4 space-y-2 text-xs text-zinc-400 font-mono">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-accent-400"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/-/g, '')}`}
                  className="transition-colors hover:text-accent-400"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-400"
                >
                  <ExternalLink size={13} />
                  LINKEDIN
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent-400 font-mono">
              [ CORPORATE DATA ]
            </p>
            <ul className="mt-4 space-y-2 text-xs text-zinc-400 font-mono uppercase">
              <li>NAICS: {COMPANY.primaryNaics} // {COMPANY.secondaryNaics}</li>
              <li>SAM.gov Status: ACTIVE</li>
              <li>Personnel: TS/SCI Cleared</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-[10px] font-mono text-zinc-600 sm:flex-row uppercase">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>
            {COMPANY.domain} // Small Business // CAGE/SAM verified
          </p>
        </div>
      </div>
    </footer>
  )
}