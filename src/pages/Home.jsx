import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Animated glowing orbs */}
        <div className="orb w-96 h-96 bg-violet-600 top-20 -left-32"    style={{ animationDelay: '0s' }} />
        <div className="orb w-80 h-80 bg-blue-500   top-40 right-10"    style={{ animationDelay: '3s' }} />
        <div className="orb w-64 h-64 bg-cyan-400   bottom-20 left-1/3" style={{ animationDelay: '1.5s' }} />

        {/* Grid dots pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '36px 36px'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-3xl">

            {/* Status badge */}
            <div className="fade-up delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Present internships in The Data Tech Lab 
            </div>

            {/* Headline */}
            <h1 className="fade-up delay-2 text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Hi, I'm<br />
              <span className="gradient-text">Dipak Gund</span>
            </h1>

            {/* Subheading */}
            <p className="fade-up delay-3 text-xl md:text-2xl text-white/60 font-medium mb-4">
              Computer Science Student &amp; 
            </p>

            <p className="fade-up delay-3 text-white/50 text-base md:text-lg max-w-xl leading-relaxed mb-10">
              I build fast, beautiful web applications and love exploring AI &amp; open source.
              Currently studying at <span className="text-violet-400 font-medium">Indira College Of Commerce and Science</span>.
            </p>

            {/* CTA buttons */}
            <div className="fade-up delay-4 flex flex-wrap gap-4 mb-16">
              <Link
                to="/projects"
                className="px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30 flex items-center gap-2"
              >
                <i className="fa-solid fa-layer-group" />
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full glass text-white/80 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-white/20 hover:border-violet-400/50"
              >
                <i className="fa-solid fa-paper-plane" />
                Contact Me
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-7 py-3.5 rounded-full text-violet-400 hover:text-violet-300 font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-violet-500/40 hover:border-violet-400"
              >
                <i className="fa-solid fa-download" />
                Resume
              </a>
            </div>

            {/* Stats */}
         
          </div>

          {/* Floating code card — decorative */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 glass rounded-2xl p-5 w-72 text-sm font-mono text-white/70 leading-6 animate-float">
            <div className="flex gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div><span className="text-violet-400">const</span> <span className="text-blue-300">dev</span> = {'{'}</div>
            <div className="pl-4"><span className="text-green-300">name</span>: <span className="text-amber-300">"Dipak Gund"</span>,</div>
            <div className="pl-4"><span className="text-green-300">role</span>: <span className="text-amber-300">"CS Student"</span>,</div>
            <div className="pl-4"><span className="text-green-300">skills</span>: [</div>
            <div className="pl-8 text-cyan-300">"React", "Python",</div>
            <div className="pl-8 text-cyan-300">"Node.js", "SQL"</div>
            <div className="pl-4">],</div>
            <div className="pl-4"><span className="text-green-300">available</span>: <span className="text-green-400">true</span></div>
            <div>{'}'}</div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs uppercase tracking-widest animate-bounce">
          <span>Scroll</span>
          <i className="fa-solid fa-chevron-down" />
        </div>
      </section>

      {/* ── TECH STRIP ───────────────────────────── */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-widest text-violet-400 font-semibold mb-10">
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: 'fa-brands fa-java',    label: 'java'      },
              { icon: 'fa-brands fa-Spring-Boot',         label: 'Spring Boot'  },
              { icon: 'fa-brands fa-react',      label: 'React'       },
              { icon: 'fa-brands fa-node-js',    label: 'Node.js'     },
              { icon: 'fa-brands fa-html5',      label: 'HTML5'       },
              { icon: 'fa-brands fa-css3-alt',   label: 'CSS3'        },
              { icon: 'fa-solid fa-database',    label: 'MySQL'       },
              { icon: 'fa-brands fa-git-alt',    label: 'Git'         },
              { icon: 'fa-brands fa-github',     label: 'GitHub'      },
              { icon: 'fa-solid fa-server',      label: 'REST APIs'   },
            ].map(t => (
              <div
                key={t.label}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass text-sm text-white/70 hover:text-white hover:border-violet-400/40 transition-all duration-300 hover:scale-105 cursor-default border border-white/10"
              >
                <i className={`${t.icon} text-violet-400 text-base`} />
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
