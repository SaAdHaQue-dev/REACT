const team = [
  {
    name: 'Maya Chen',
    role: 'AI Strategy',
    note: 'FROM INSIGHT\nTO IMPACT.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Maya Chen, AI Strategy',
    position: 'center 38%',
  },
  {
    name: 'Jon Bell',
    role: 'ML Engineering',
    note: 'ROBUST SYSTEMS\nREAL-WORLD RESULTS.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Jon Bell, ML Engineering',
    position: 'center 35%',
  },
  {
    name: 'Elena Ortiz',
    role: 'Product Systems',
    note: 'USABLE AI\nFOR ACTUAL PEOPLE.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Elena Ortiz, Product Systems',
    position: 'center 38%',
  },
  {
    name: 'Noah Reed',
    role: 'Change Design',
    note: 'PEOPLE ENABLE\nTRANSFORMATION.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=720&q=85',
    imageAlt: 'Noah Reed, Change Design',
    position: 'center 35%',
  },
]

const About = () => (
  <section
    id="team"
    className="px-[6%] pb-7 text-[#111] max-[680px]:px-[4%]"
    aria-labelledby="team-heading"
  >
    <div className="border-b border-[#dedbd6] pb-5">
      <div className="mb-5 grid grid-cols-[1fr_1fr_auto] items-end gap-6 max-[760px]:grid-cols-2 max-[760px]:gap-4 max-[520px]:grid-cols-1">
        <div>
          <p className="mb-2 font-mono text-[9px] tracking-[.06em] text-[#57534f]">
            OUR TEAM
          </p>
          <h2
            id="team-heading"
            className="text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[.91] tracking-[-.07em]"
          >
            Built by operators,
            <br />
            not spectators.
          </h2>
        </div>

        <p className="max-w-[290px] pb-1 text-[11px] leading-[1.5] text-[#45413e] max-[760px]:justify-self-end max-[520px]:justify-self-start">
          A senior team combining AI engineering,
          <br className="max-[760px]:hidden" /> product design, and business transformation.
        </p>

        <div className="flex items-center gap-5 border-l border-[#d0ccc6] pb-0.5 pl-5 max-[760px]:col-span-2 max-[760px]:justify-self-end max-[520px]:col-span-1 max-[520px]:justify-self-start">
          <div>
            <p className="text-[27px] font-semibold leading-none tracking-[-.055em]">38</p>
            <p className="mt-1 text-[10px] leading-[1.25] text-[#45413e]">
              workflows
              <br />
              deployed
            </p>
          </div>
          <span className="h-12 w-px bg-[#d0ccc6]" />
          <div>
            <p className="text-[27px] font-semibold leading-none tracking-[-.055em]">12</p>
            <p className="mt-1 text-[10px] leading-[1.25] text-[#45413e]">industries</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 max-[760px]:grid-cols-2 max-[420px]:grid-cols-1">
        {team.map(({ name, role, note, image, imageAlt, position }) => (
          <article
            className="overflow-hidden rounded-[9px] border border-[#dfdcd7] bg-[#f4f2ee]"
            key={name}
          >
            <img
              className="h-[clamp(145px,20vw,230px)] w-full object-cover max-[760px]:h-[clamp(190px,48vw,300px)] max-[420px]:h-[280px]"
              src={image}
              alt={imageAlt}
              loading="lazy"
              style={{ objectPosition: position }}
            />
            <div className="relative min-h-[96px] bg-[#f8f7f4] px-3 py-2.5">
              <span className="absolute right-3 top-3 h-[7px] w-[7px] rounded-full bg-[#f15a0a]" />
              <h3 className="pr-4 text-[11px] font-semibold leading-tight">{name}</h3>
              <p className="mt-0.5 text-[10px] leading-tight text-[#36322f]">{role}</p>
              <p className="mt-3 whitespace-pre-line font-mono text-[8px] leading-[1.45] tracking-[.035em] text-[#57534f]">
                {note}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default About