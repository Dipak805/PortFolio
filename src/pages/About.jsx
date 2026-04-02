import React from 'react'

const SKILLS = [
  { name: 'Java/Spring Boot',       pct: 85, color: 'from-violet-500 to-blue-500'   },
  { name: 'JavaScript',   pct: 80, color: 'from-yellow-400 to-orange-400'  },
  { name: 'React',        pct: 75, color: 'from-cyan-400 to-blue-500'      },
  { name: 'HTML / CSS',   pct: 90, color: 'from-orange-400 to-red-400'     },
  { name: 'Node.js',      pct: 65, color: 'from-green-400 to-emerald-500'  },
  { name: 'SQL / MySQL',  pct: 70, color: 'from-blue-400 to-indigo-500'    },
  { name: 'Git & GitHub', pct: 82, color: 'from-pink-400 to-violet-500'    },
  ]

const TOOLS = ['VS Code','Eclipse','Postman','Linux','MongoDB','REST APIs','Antigravity']

export default function About() {
  return (
    <main className="min-h-screen pt-28 pb-20">
      {/* Orbs */}
      <div className="orb w-80 h-80 bg-violet-600 top-10 right-0 opacity-20" />
      <div className="orb w-64 h-64 bg-blue-500 bottom-40 left-0 opacity-15" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ── Bio section ───────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Profile photo */}
          <div className="fade-up delay-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 blur-xl opacity-40 scale-105" />
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20">
                {/*
                  ── HOW TO ADD YOUR PHOTO ──
                  1. Put your photo file in: public/photos/me.jpg
                  2. Change the src below to: /photos/me.jpg
                */}
                <img
                  src="/photos/pic.jpeg"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 text-sm border border-white/20">
                <div className="font-bold text-white">MSc Computer Application</div>
                <div className="text-white/50 text-xs">@Indira College of Commerce and Science</div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="fade-up delay-2">
            <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-3">About Me</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Passionate about<br />
              <span className="gradient-text">code & creativity</span>
            </h1>

            <p className="text-white/60 leading-relaxed mb-4">
              Hi! I'm <span className="text-white font-semibold">Dipak Gund </span>, Currently Pursuing Master in Computer Application at <span className="text-violet-400 font-medium"> At Indira College Of Commerce And Science
              </span></p>
            <p className="text-white/60 leading-relaxed mb-4">
              My journey into tech started with curiosity about how websites work, 
              which quickly turned into a strong interest in full-stack development.
              </p>
            <p className="text-white/60 leading-relaxed mb-8">
              I enjoy working with technologies like Java, Spring Boot, React, and Node.js to create efficient and user-friendly solutions. One of my key projects, TeamFlow Pro, helped me gain hands-on experience in building real-world applications with secure authentication and task management features.

I’m always eager to learn new technologies, solve challenging problems, and grow as a developer. Currently, I’m looking for opportunities where I can apply my skills and contribute to meaningful projects.
              </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: 'fa-graduation-cap', text: 'MSC CA — 2026' },
                { icon: 'fa-location-dot',   text: 'Pune, India'        },
                { icon: 'fa-briefcase',       text: 'Present In Internship'},
                { icon: 'fa-language',        text: 'English / Hindi/Marathi'   },
              ].map(c => (
                <span key={c.text} className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-white/70">
                  <i className={`fa-solid ${c.icon} text-violet-400 text-xs`} />
                  {c.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Skills ────────────────────────────── */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-2">Skills</p>
          <h2 className="text-3xl font-bold mb-10">My Technical Stack</h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            {SKILLS.map((skill, i) => (
              <div key={skill.name} className="fade-up" style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-white/80">{skill.name}</span>
                  <span className="text-xs font-bold text-violet-400">{skill.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} skill-fill`}
                    style={{ width: `${skill.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tools ─────────────────────────────── */}
        <div>
          <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-4">Tools &amp; Others</p>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map(t => (
              <span key={t} className="px-4 py-2 rounded-full glass border border-white/10 text-sm text-white/60 hover:text-white hover:border-violet-400/40 transition-all duration-300">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
