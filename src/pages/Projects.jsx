import React from 'react'

/* ════════════════════════════════════════════
   ADD YOUR PROJECTS HERE
   Fill in the fields below with your real info.
   You can add more objects to this array anytime.
   ════════════════════════════════════════════ */
const PROJECTS = [
  {
    title:    'Project One',
    desc:     'Write a short description of your first project here. Explain what it does, why you built it, and what problem it solves.',
    tags:     ['React', 'Node.js', 'MongoDB'],
    github:   'https://github.com/YOUR_USERNAME/project-one',
    gradient: 'from-violet-500 to-blue-600',
    icon:     'fa-solid fa-code',
    number:   '01',
  },
  {
    title:    'Project Two',
    desc:     'Write a short description of your second project here. Explain what it does, why you built it, and what problem it solves.',
    tags:     ['Python', 'Flask', 'MySQL'],
    github:   'https://github.com/YOUR_USERNAME/project-two',
    gradient: 'from-blue-500 to-cyan-500',
    icon:     'fa-solid fa-robot',
    number:   '02',
  },
  {
    title:    'Project Three',
    desc:     'Write a short description of your third project here. Explain what it does, why you built it, and what problem it solves.',
    tags:     ['HTML', 'CSS', 'JavaScript'],
    github:   'https://github.com/YOUR_USERNAME/project-three',
    gradient: 'from-cyan-500 to-emerald-500',
    icon:     'fa-solid fa-globe',
    number:   '03',
  },
  {
    title:    'Project Four',
    desc:     'Add a fourth project if you have one. Describe what makes it interesting and what technologies powered it.',
    tags:     ['TypeScript', 'Express', 'Redis'],
    github:   'https://github.com/YOUR_USERNAME/project-four',
    gradient: 'from-emerald-400 to-teal-600',
    icon:     'fa-solid fa-layer-group',
    number:   '04',
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen pt-28 pb-24">

      {/* Orbs */}
      <div className="orb w-96 h-96 bg-violet-600 -top-20 -right-32 opacity-20" />
      <div className="orb w-80 h-80 bg-cyan-500 bottom-20 -left-16 opacity-15" />
      <div className="orb w-64 h-64 bg-blue-500 top-1/2 left-1/2 opacity-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="mb-16">
          <p
            className="text-xs uppercase tracking-widest text-violet-400 font-bold mb-4 fade-up delay-1"
            style={{ opacity: 0 }}
          >
            ✦ My Work
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-5 leading-tight tracking-tight fade-up delay-2"
            style={{ opacity: 0 }}
          >
            Projects I've{' '}
            <span className="gradient-text">Built</span>
          </h1>
          <p
            className="text-white/50 text-lg md:text-xl fade-up delay-3 max-w-xl leading-relaxed"
            style={{ opacity: 0 }}
          >
            A curated selection of things I've made. Each one taught me something new.
          </p>
        </div>

        {/* Cards — 2-column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((proj, i) => (
            <div
              key={proj.title}
              className="fade-up group glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-violet-900/30 flex flex-col"
              style={{ animationDelay: `${i * 0.12 + 0.2}s`, opacity: 0 }}
            >
              {/* Top banner */}
              <div
                className={`relative h-36 bg-gradient-to-br ${proj.gradient} overflow-hidden flex items-end px-7 pb-5`}
              >
                {/* Dot pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '22px 22px',
                  }}
                />
                {/* Hover shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Icon */}
                <div className="absolute top-5 right-6 w-12 h-12 rounded-2xl bg-black/25 backdrop-blur flex items-center justify-center text-white text-xl shadow-lg">
                  <i className={proj.icon} />
                </div>

                {/* Big decorative number */}
                <span className="font-bold text-white/15 text-7xl leading-none select-none">
                  {proj.number}
                </span>
              </div>

              {/* Card body */}
              <div className="p-7 flex flex-col flex-1 gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors leading-tight">
                  {proj.title}
                </h3>

                <p className="text-white/55 text-base leading-relaxed flex-1">
                  {proj.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-sm px-3.5 py-1.5 rounded-full bg-white/8 border border-white/10 text-white/65 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub only — no Live Demo */}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl border border-white/15 text-white/75 hover:text-white hover:border-violet-400/50 hover:bg-violet-500/10 text-base font-semibold transition-all duration-300 group/btn"
                >
                  <i className="fa-brands fa-github text-lg" />
                  View on GitHub
                  <i className="fa-solid fa-arrow-right text-sm opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block glass rounded-3xl px-10 py-8 border border-white/10">
            <p className="text-white/40 text-xs mb-2 uppercase tracking-widest font-semibold">Want to see more?</p>
            <p className="text-white/70 text-lg mb-6">All my projects live on GitHub — come take a look!</p>
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30"
            >
              <i className="fa-brands fa-github text-xl" />
              View All on GitHub
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
