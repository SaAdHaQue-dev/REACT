const FooterLandscape = () => (
  <svg
    className="pointer-events-none absolute inset-x-0 bottom-0 h-[230px] w-full"
    viewBox="0 0 1440 380"
    preserveAspectRatio="xMidYMax slice"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="footer-dune" x1="0" y1="70" x2="0" y2="380" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF9A50" />
        <stop offset="1" stopColor="#E94D08" />
      </linearGradient>
      <linearGradient id="footer-dune-light" x1="720" y1="40" x2="720" y2="380" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFB16D" />
        <stop offset="1" stopColor="#F15A0A" />
      </linearGradient>
      <pattern id="footer-dots" width="23" height="23" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="1.8" fill="#FFF6E8" fillOpacity=".72" />
      </pattern>
      <filter id="footer-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" />
      </filter>
    </defs>

    <path
      d="M0 166c153-92 261-68 384-12 106 49 168 50 274-22C812 26 947 38 1064 108c116 68 205 92 376 9v263H0V166Z"
      fill="url(#footer-dune-light)"
    />
    <path
      d="M0 252c126-94 229-90 362-29 134 61 203 83 334 10 134-75 233-81 352-19 150 78 264 56 392-10v154H0V252Z"
      fill="url(#footer-dune)"
    />
    <path
      d="M0 166c153-92 261-68 384-12 106 49 168 50 274-22C812 26 947 38 1064 108c116 68 205 92 376 9v263H0V166Z"
      fill="url(#footer-dots)"
      opacity=".65"
    />
    <path
      d="M0 252c126-94 229-90 362-29 134 61 203 83 334 10 134-75 233-81 352-19 150 78 264 56 392-10v154H0V252Z"
      fill="url(#footer-dots)"
      opacity=".75"
    />

    <g stroke="#FFF8EE" strokeOpacity=".68" strokeWidth="1">
      <path d="m74 306 79-62 86 29 81-67 91 40 77-56 78 29 79-75 83 39 82-53 85 28 90-72 95 43 85-31" />
      <path d="m155 244 4 91m86-62 9 83m66-150 9 102m82-62 8 93m69-149 6 103m72-74 8 105m71-180 8 117m75-78 9 108m73-161 11 106m75-78 12 102m78-174 9 124m86-81 10 102m76-133 10 98" />
    </g>
    <g fill="#FFF8EE">
      <circle cx="153" cy="244" r="4" />
      <circle cx="239" cy="273" r="4" />
      <circle cx="320" cy="206" r="4" />
      <circle cx="411" cy="246" r="4" />
      <circle cx="488" cy="190" r="4" />
      <circle cx="566" cy="219" r="4" />
      <circle cx="645" cy="144" r="4" />
      <circle cx="728" cy="183" r="4" />
      <circle cx="810" cy="130" r="4" />
      <circle cx="895" cy="158" r="4" />
      <circle cx="985" cy="86" r="4" />
      <circle cx="1080" cy="129" r="4" />
      <circle cx="1165" cy="98" r="4" />
    </g>
    <path
      d="M-40 357c197-43 333-42 496-71 197-35 322-86 473-100 195-19 307 20 558-51"
      stroke="#FFF8EE"
      strokeWidth="8"
      strokeOpacity=".5"
      filter="url(#footer-glow)"
    />
    <path
      d="M-40 357c197-43 333-42 496-71 197-35 322-86 473-100 195-19 307 20 558-51"
      stroke="#FFF8EE"
      strokeWidth="3"
    />
  </svg>
)

const Footer = () => (
  <footer className="px-[4%] pb-5 text-[#111]">
    <section
      id="contact"
      className="relative isolate mx-[2%] mb-3 overflow-hidden rounded-[18px] bg-[#f15a0a] px-[3.2%] py-6 max-[600px]:mx-0 max-[600px]:min-h-[260px] max-[600px]:px-5"
      aria-labelledby="contact-heading"
    >
      <div className="relative z-[1] max-w-[620px]">
        <p className="mb-2 font-mono text-[9px] tracking-[.07em] text-[#4a210e]">
          LET&apos;S WORK TOGETHER
        </p>
        <h2
          id="contact-heading"
          className="text-[clamp(2rem,4.1vw,3.2rem)] font-semibold leading-[.93] tracking-[-.07em]"
        >
          Turn one process into
          <br />
          your first AI advantage.
        </h2>
        <p className="mt-3 max-w-[390px] text-[11px] leading-[1.45] text-[#482512]">
          Start with a focused workflow assessment and leave with
          <br className="max-[600px]:hidden" /> a practical implementation roadmap.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
          <a
            className="inline-flex min-h-[37px] items-center gap-3 rounded-full bg-[#111] px-4 text-[10px] font-medium text-white no-underline transition hover:-translate-y-px hover:bg-[#2c2a28]"
            href="mailto:hello@morph.ai?subject=Map%20my%20first%20AI%20use%20case"
          >
            Map My First Use Case
            <svg
              className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.5]"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M2 8h11m-4-4 4 4-4 4" />
            </svg>
          </a>
          <span className="hidden h-6 w-px bg-[#8f3a12]/50 sm:block" />
          <p className="text-[10px] text-[#482512]">90-minute working session</p>
        </div>
      </div>

      <div className="absolute right-[15%] top-1/2 h-[clamp(125px,19vw,220px)] w-[clamp(125px,19vw,220px)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffb16d,#e84a05_72%)] shadow-[inset_-16px_-16px_30px_rgba(126,38,0,0.23),0_16px_35px_rgba(137,47,0,0.2)] max-[700px]:right-[4%] max-[600px]:right-[-4%] max-[600px]:top-auto max-[600px]:bottom-[-10px] max-[600px]:translate-y-0 max-[600px]:opacity-65"
        aria-hidden="true"
      >
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,transparent_0_33%,rgba(255,248,238,.9)_34%_37%,transparent_38%_100%)] [background-size:17px_17px] [mask-image:radial-gradient(circle,black_58%,transparent_60%)]" />
      </div>

      <p className="absolute right-[3%] top-[18%] z-[1] max-w-[72px] font-mono text-[8px] leading-[1.4] tracking-[.04em] text-[#512411] max-[600px]:hidden">
        SAME
        <br />
        PEOPLE
        <br />
        BRIGHTER
        <br />
        POSSIBILITIES
      </p>
    </section>

    <div className="relative isolate min-h-[250px] overflow-hidden rounded-[18px] border border-[#e0ddd7] bg-[#f7f6f2] px-[4%] pt-5 max-[600px]:min-h-[310px]">
      <FooterLandscape />
      <div className="relative z-[1] flex items-start justify-between gap-6 max-[600px]:flex-wrap">
        <a
          className="text-[14px] font-bold tracking-[-.045em] text-inherit no-underline"
          href="#top"
          aria-label="Morph AI home"
        >
          MORPH AI
        </a>

        <nav className="flex items-center gap-6 pt-1 text-[9px] max-[450px]:gap-3" aria-label="Footer">
          <a
            className="text-inherit no-underline transition-opacity hover:opacity-60"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-inherit no-underline transition-opacity hover:opacity-60"
            href="#privacy"
          >
            Privacy
          </a>
          <a
            className="text-inherit no-underline transition-opacity hover:opacity-60"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        <p className="flex items-center gap-2 pt-1 text-[9px]">
          <svg
            className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.4]"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <circle cx="8" cy="8" r="6" />
            <path d="M2 8h12M8 2a10 10 0 0 1 0 12M8 2a10 10 0 0 0 0 12" />
          </svg>
          London / Remote
        </p>
      </div>

      <div className="absolute bottom-[18%] left-[4%] z-[1] font-mono text-[7px] leading-[1.35] tracking-[.04em] text-[#423b34]">
        A MORE
        <br />
        INTELLIGENT
        <br />
        TOMORROW
        <br />
        TOGETHER
      </div>
      <div className="absolute right-[4%] bottom-[18%] z-[1] text-right font-mono text-[7px] leading-[1.35] tracking-[.04em] text-[#423b34]">
        IDEAS
        <br />
        PROCESSES
        <br />
        PEOPLE
        <br />
        PROGRESS
      </div>
    </div>
  </footer>
)

export default Footer