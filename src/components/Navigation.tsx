import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { COMPANY } from '../data/company'

const NAV_LINKS = [
  { href: '#about', label: '01 // ABOUT' },
  { href: '#capabilities', label: '02 // CAPABILITIES' },
  { href: '#expertise', label: '03 // EXPERTISE' },
  { href: '#differentiators', label: '04 // DIFFERENTIATORS' },
  { href: '#compliance', label: '05 // COMPLIANCE' },
  { href: '#contact', label: '06 // CONTACT' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-lg font-black tracking-widest text-white font-mono shrink-0"
        >
          FARSYDE
          <span className="text-xs font-semibold tracking-wider text-zinc-400">
            LLC
          </span>
        </a>

        <div className="hidden items-center gap-4 lg:gap-6 xl:gap-8 md:flex shrink-0 ml-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] lg:text-[11px] font-bold tracking-wider lg:tracking-widest text-zinc-400 font-mono transition-colors hover:text-accent-400 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`/${COMPANY.name.replace(/\s+/g, '_')}_Capabilities_Statement.pdf`}
            className="hidden items-center gap-2 border border-accent-400 bg-accent-400 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-accent-400 lg:inline-flex font-mono whitespace-nowrap"
          >
            <Download size={14} />
            CAPABILITIES
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-zinc-400 hover:text-white md:hidden border border-white/5 bg-white/5"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 font-mono md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 px-6 py-4 text-xs font-bold tracking-widest text-zinc-300 hover:bg-white/5 hover:text-accent-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`/${COMPANY.name.replace(/\s+/g, '_')}_Capabilities_Statement.pdf`}
            className="flex items-center justify-center gap-2 px-6 py-5 text-xs font-bold tracking-wider text-accent-400 border-t border-white/10 hover:bg-accent-400 hover:text-black transition-all"
          >
            <Download size={14} />
            DOWNLOAD CAPABILITIES STATEMENT
          </a>
        </div>
      )}
    </header>
  )
}