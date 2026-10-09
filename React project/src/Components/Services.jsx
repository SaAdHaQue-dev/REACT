const OpportunityIcon = () => (
  <svg className="h-8 w-8 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="12" cy="16" r="9" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="20" cy="16" r="9" stroke="currentColor" strokeWidth="1.4" />
  </svg>
)

const WorkflowIcon = () => (
  <svg className="h-8 w-8 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="m16 4 12 6-12 6L4 10l12-6Z" stroke="currentColor" strokeWidth="1.4" />
    <path d="m4 16 12 6 12-6M4 22l12 6 12-6" stroke="currentColor" strokeWidth="1.4" />
  </svg>
)

const SystemsIcon = () => (
  <svg className="h-8 w-8 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="7" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="25" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="25" cy="25" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="m10 14 12-6M10 18l12 6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const services = [
  {
    number: '01',
    title: 'AI Opportunity\nMapping',
    description:
      'We find the highest-value use cases across your processes, data and teams.',
    action: 'Discover',
    Icon: OpportunityIcon,
    style: 'border-[#d1cdc7] bg-[#f5f3ef] text-[#111]',
    muted: 'text-[#514d49]',
  },
  {
    number: '02',
    title: 'Workflow\nAutomation',
    description:
      'We design and implement intelligent automation that integrates with your existing tools.',
    action: 'Design',
    Icon: WorkflowIcon,
    style: 'border-[#171717] bg-[#171717] text-[#f8f7f4]',
    muted: 'text-[#d2ceca]',
  },
  {
    number: '03',
    title: 'Custom AI\nSystems',
    description:
      'We build tailored AI solutions for your unique business processes and data.',
    action: 'Deploy',
    Icon: SystemsIcon,
    style: 'border-[#f15a0a] bg-[#f15a0a] text-[#111]',
    muted: 'text-[#3c2113]',
  },
]

const Services = () => (
  <section
    id="services"
    className="px-[6%] pb-7 text-[#111] max-[680px]:px-[4%]"
    aria-labelledby="services-heading"
  >
    <div className="border-b border-[#dedbd6] pb-6">
      <div className="mb-5 flex items-end justify-between gap-8 max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-3">
        <div>
          <p className="mb-2 font-mono text-[9px] tracking-[.06em] text-[#57534f]">
            OUR SERVICES
          </p>
          <h2
            id="services-heading"
            className="text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[.91] tracking-[-.07em]"
          >
            From AI potential
            <br />
            to operating reality.
          </h2>
        </div>
        <p className="max-w-[300px] pb-1 text-[11px] leading-[1.5] text-[#45413e]">
          We help you identify high-value opportunities,
          <br className="max-[600px]:hidden" /> reshape workflows, and deploy AI systems
          <br className="max-[600px]:hidden" /> that deliver measurable results.
        </p>
      </div>

      <div className="relative grid grid-cols-3 gap-[clamp(16px,5.5vw,64px)] max-[680px]:grid-cols-1 max-[680px]:gap-3">
        <div
          className="pointer-events-none absolute left-[8%] right-[8%] top-[42%] z-0 h-px bg-[#bdb8b1] max-[680px]:hidden"
          aria-hidden="true"
        >
          <span className="absolute left-1/3 top-1/2 h-[17px] w-[17px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-[#f15a0a] bg-[#f5f3ef]" />
          <span className="absolute left-2/3 top-1/2 h-[17px] w-[17px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#171717] bg-[#f5f3ef]" />
        </div>

        {services.map(({ number, title, description, action, Icon, style, muted }) => (
          <article
            className={`relative z-[1] flex min-h-[195px] flex-col rounded-[10px] border p-4 transition-transform duration-200 hover:-translate-y-1 max-[680px]:min-h-[175px] ${style}`}
            key={number}
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] tracking-[.04em]">{number}</span>
              <Icon />
            </div>
            <h3 className="mt-3 whitespace-pre-line text-[clamp(1rem,1.6vw,1.25rem)] font-semibold leading-[1.08] tracking-[-.045em]">
              {title}
            </h3>
            <p className={`mt-2 max-w-[250px] text-[10px] leading-[1.4] ${muted}`}>
              {description}
            </p>
            <a
              className="mt-auto inline-flex min-h-[27px] w-fit items-center rounded-full border border-black/15 bg-[#f8f7f4] px-3 text-[9px] font-medium text-[#171717] no-underline transition hover:border-[#f15a0a] hover:text-[#d94b00]"
              href="#contact"
            >
              {action}
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Services