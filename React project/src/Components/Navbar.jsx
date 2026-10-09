import { useState } from 'react'

const links = [
  { label: 'Approach', href: '#approach' },
  { label: 'Team', href: '#team' },
  { label: 'Services', href: '#services' },
  { label: 'Cases', href: '#cases' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="px-[6%] py-2 max-[680px]:px-[4%]">
      <nav
        className="relative flex min-h-12 items-center justify-between rounded-full border border-[#d9d6d1] bg-[#f9f8f5]/90 py-1 pr-2 pl-[22px] font-sans text-[#111] max-[680px]:min-h-[46px] max-[680px]:pl-4"
        aria-label="Main navigation"
      >
        <a
          className="flex-1 whitespace-nowrap text-base font-bold tracking-[-0.045em] text-inherit no-underline"
          href="#top"
          aria-label="Morph AI home"
        >
          MORPH AI
        </a>

        <div
          className={`flex min-h-9 items-center justify-center gap-[25px] rounded-full border border-[#d9d6d1] px-[27px] max-[680px]:absolute max-[680px]:top-[calc(100%+8px)] max-[680px]:right-0 max-[680px]:left-0 max-[680px]:z-10 max-[680px]:items-stretch max-[680px]:gap-0 max-[680px]:rounded-[18px] max-[680px]:border-[#d9d6d1] max-[680px]:bg-[#f9f8f5] max-[680px]:p-2 max-[680px]:shadow-[0_12px_28px_rgba(17,17,17,0.08)] ${
            menuOpen ? 'max-[680px]:flex-col' : 'max-[680px]:hidden'
          }`}
        >
          {links.map(({ label, href }) => (
            <a
              className="text-[10px] font-medium text-inherit no-underline transition-opacity duration-150 hover:opacity-55 max-[680px]:p-3 max-[680px]:text-[13px]"
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          className="ml-auto inline-flex min-h-[34px] items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#111] px-[17px] text-[10px] font-semibold text-white no-underline transition duration-150 hover:-translate-y-px hover:bg-[#f15a0a] max-[680px]:ml-0 max-[680px]:min-h-8 max-[680px]:px-3 max-[680px]:text-[9px]"
          href="#contact"
        >
          <span>Book a Session</span>
          <svg
            className="h-[13px] w-[13px] fill-none stroke-current stroke-[1.5]"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M4 12 12 4M5 4h7v7" />
          </svg>
        </a>

        <button
          className="ml-2 hidden h-[34px] w-[34px] cursor-pointer flex-col justify-center gap-1 rounded-full border-0 bg-transparent p-2 max-[680px]:flex"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="h-px w-full bg-[#111]" />
          <span className="h-px w-full bg-[#111]" />
          <span className="h-px w-full bg-[#111]" />
        </button>

        <span
          className="ml-[30px] mr-2 grid grid-cols-3 gap-[3px] max-[680px]:hidden"
          aria-hidden="true"
        >
          {Array.from({ length: 9 }, (_, index) => (
            <span className="h-[2px] w-[2px] rounded-full bg-[#171717]" key={index} />
          ))}
        </span>
      </nav>
    </header>
  )
}

export default Navbar
