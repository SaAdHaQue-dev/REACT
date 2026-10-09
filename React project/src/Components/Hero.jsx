const CubeArtwork = () => (
  <svg
    className="h-full w-full"
    viewBox="0 0 700 360"
    fill="none"
    role="img"
    aria-label="Geometric cubes transform into an interconnected orange AI network"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="hero-glow">
        <stop stopColor="#FF8A35" stopOpacity=".28" />
        <stop offset="1" stopColor="#FF8A35" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="cube-front" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#F4F1EC" />
        <stop offset="1" stopColor="#C9C6C1" />
      </linearGradient>
      <linearGradient id="cube-side" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#D7D3CD" />
        <stop offset="1" stopColor="#A9A6A1" />
      </linearGradient>
      <linearGradient id="orange-cube" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#FF7A1A" stopOpacity=".9" />
        <stop offset="1" stopColor="#EB4B00" stopOpacity=".68" />
      </linearGradient>
      <filter id="cube-shadow" x="-30%" y="-30%" width="160%" height="170%">
        <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#AE541C" floodOpacity=".16" />
      </filter>
    </defs>

    <ellipse cx="410" cy="189" rx="276" ry="160" fill="url(#hero-glow)" />

    <g stroke="#F15A0A" strokeOpacity=".53" strokeWidth="1.5">
      <path d="m373 186 42-51 47 29 52-57 50 20 48-58 42 26" />
      <path d="m373 186 51 31 50-53 50 45 45-82 49 30 36-48" />
      <path d="m415 135 9 82m38-53 12 64m38-121 12 77m38-57 7 85m43-143 5 113m42-87-5 117" />
      <path d="m424 217 50 49 50-57 50 49 45-71 49 31 36-50" />
      <path d="m462 164 100-37m-88 101 100-35m-7-66 93-15" />
    </g>

    <g fill="#F15A0A">
      <circle cx="373" cy="186" r="8" />
      <circle cx="415" cy="135" r="7" />
      <circle cx="424" cy="217" r="7" />
      <circle cx="462" cy="164" r="10" />
      <circle cx="474" cy="266" r="6" />
      <circle cx="512" cy="107" r="7" />
      <circle cx="512" cy="209" r="8" />
      <circle cx="524" cy="152" r="5" />
      <circle cx="524" cy="266" r="6" />
      <circle cx="562" cy="127" r="11" />
      <circle cx="574" cy="184" r="7" />
      <circle cx="574" cy="258" r="8" />
      <circle cx="612" cy="69" r="8" />
      <circle cx="619" cy="214" r="7" />
      <circle cx="662" cy="95" r="11" />
      <circle cx="662" cy="245" r="6" />
      <circle cx="698" cy="195" r="8" />
    </g>

    <g filter="url(#cube-shadow)" stroke="#A8A49F" strokeWidth="1.2">
      <path d="m85 145 49-28 49 28-49 29z" fill="#FAF8F5" />
      <path d="M85 145v56l49 29v-56z" fill="url(#cube-front)" />
      <path d="M134 174v56l49-29v-56z" fill="url(#cube-side)" />

      <path d="m146 93 49-28 49 28-49 29z" fill="#FAF8F5" />
      <path d="M146 93v56l49 29v-56z" fill="url(#cube-front)" />
      <path d="M195 122v56l49-29V93z" fill="url(#cube-side)" />

      <path d="m146 201 49-28 49 28-49 29z" fill="#FAF8F5" />
      <path d="M146 201v56l49 29v-56z" fill="url(#cube-front)" />
      <path d="M195 230v56l49-29v-56z" fill="url(#cube-side)" />

      <path d="m207 145 49-28 49 28-49 29z" fill="#FBF9F6" />
      <path d="M207 145v56l49 29v-56z" fill="url(#cube-front)" />
      <path d="M256 174v56l49-29v-56z" fill="url(#cube-side)" />

      <path d="m207 93 49-28 49 28-49 29z" fill="url(#orange-cube)" />
      <path d="M207 93v56l49 29v-56z" fill="#F15A0A" fillOpacity=".76" />
      <path d="M256 122v56l49-29V93z" fill="#D84905" fillOpacity=".84" />

      <path d="m207 201 49-28 49 28-49 29z" fill="url(#orange-cube)" />
      <path d="M207 201v56l49 29v-56z" fill="#F15A0A" fillOpacity=".82" />
      <path d="M256 230v56l49-29v-56z" fill="#D84905" fillOpacity=".88" />

      <path d="m268 145 49-28 49 28-49 29z" fill="url(#orange-cube)" />
      <path d="M268 145v56l49 29v-56z" fill="#F15A0A" fillOpacity=".82" />
      <path d="M317 174v56l49-29v-56z" fill="#D84905" fillOpacity=".9" />

      <path d="m268 93 49-28 49 28-49 29z" fill="url(#cube-front)" />
      <path d="M268 93v56l49 29v-56z" fill="#DAD6D0" />
      <path d="M317 122v56l49-29V93z" fill="#B7B3AD" />

      <path d="m268 201 49-28 49 28-49 29z" fill="url(#orange-cube)" />
      <path d="M268 201v56l49 29v-56z" fill="#F15A0A" fillOpacity=".7" />
      <path d="M317 230v56l49-29v-56z" fill="#D84905" fillOpacity=".83" />
    </g>
  </svg>
)

const Hero = () => (
  <section
    id="approach"
    className="px-[6%] pb-7 pt-5 text-[#111] max-[680px]:px-[4%] max-[680px]:pt-8"
  >
    <div className="grid min-h-[365px] grid-cols-[.92fr_1.2fr] items-center gap-4 border-b border-[#dedbd6] pb-5 max-[760px]:grid-cols-1 max-[760px]:gap-0">
      <div className="relative z-[1]">
        <p className="mb-5 font-mono text-[9px] leading-[1.45] tracking-[.055em] text-[#57534f]">
          REAL BUSINESS.
          <br />
          INTELLIGENT PROCESSES.
          <br />
          LASTING IMPACT.
        </p>

        <h1 className="max-w-[480px] text-[clamp(2.7rem,6vw,4.35rem)] font-semibold leading-[.88] tracking-[-.075em]">
          AI that works
          <br />
          inside your
          <br />
          business.
        </h1>

        <p className="mt-5 max-w-[390px] font-mono text-[10px] leading-[1.55] text-[#45413e]">
          We redesign processes, connect data, and deploy
          <br className="max-[680px]:hidden" /> intelligent systems your team can actually use.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            className="inline-flex min-h-[40px] items-center gap-3 rounded-full bg-[#f15a0a] px-5 text-[10px] font-semibold text-white no-underline transition hover:-translate-y-px hover:bg-[#d94b00]"
            href="#services"
          >
            Explore AI Opportunities
            <svg
              className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.5]"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M2 8h11m-4-4 4 4-4 4" />
            </svg>
          </a>
          <a
            className="border-b border-[#99948d] pb-0.5 text-[10px] font-medium text-inherit no-underline transition hover:border-[#f15a0a] hover:text-[#f15a0a]"
            href="#services"
          >
            See our method
          </a>
        </div>
      </div>

      <div className="relative min-h-[320px] max-[760px]:-mt-2 max-[760px]:min-h-[260px] max-[500px]:min-h-[220px]">
        <div className="absolute inset-0">
          <CubeArtwork />
        </div>
        <div className="absolute inset-x-[20%] top-[4%] flex justify-between font-sans text-[9px] text-[#393633] max-[500px]:inset-x-[12%]">
          {['Strategy', 'Automation', 'Deployment'].map((label) => (
            <span className="relative pb-12 text-center" key={label}>
              {label}
              <span className="absolute left-1/2 top-4 h-10 w-px bg-[#bdb8b1]" />
              <span className="absolute left-1/2 top-[51px] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#171717]" />
            </span>
          ))}
        </div>
        <p className="absolute bottom-[7%] right-[1%] max-w-[72px] font-mono text-[7px] leading-[1.5] text-[#4c4844]">
          PEOPLE
          <br />
          PROCESSES
          <br />
          DATA
          <br />
          AI
          <br />
          REAL OUTCOMES
        </p>
      </div>

      <div className="col-span-2 flex items-center gap-5 pt-1 max-[760px]:col-span-1 max-[760px]:pt-0">
        <span className="font-mono text-[8px] tracking-[.05em]">01 / 04</span>
        <span className="h-px w-full max-w-[180px] bg-[#aaa59e]" />
        <p className="ml-auto whitespace-nowrap font-mono text-[8px] tracking-[.02em] text-[#4c4844] max-[500px]:text-[7px]">
          SCALABLE&nbsp;&nbsp; / &nbsp;&nbsp;PRACTICAL&nbsp;&nbsp; / &nbsp;&nbsp;HUMAN-CENTERED
        </p>
      </div>
    </div>
  </section>
)

export default Hero