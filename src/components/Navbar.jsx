import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

/* ── Update these with YOUR real links ── */
const GITHUB_URL   = 'https://github.com/Dipak805'
const LINKEDIN_URL = 'https://linkedin.com/in/dipak-gund-90321a2a3'

const NAV_LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/projects', label: 'Projects' },
  { to: '/resume',   label: 'Resume'   },
  { to: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="font-display font-bold text-xl text-white tracking-tight">
            <span className="gradient-text">&lt;</span>
            Dipak Gund
            <span className="gradient-text">/&gt;</span>
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-violet-600/30 text-violet-300'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social icons — GitHub + LinkedIn ONLY */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:border-violet-400/50 transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <i className="fa-brands fa-github text-base" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin text-base" />
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-400 overflow-hidden ${menuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
          <div className="px-6 flex flex-col gap-1">
            {NAV_LINKS.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive ? 'bg-violet-600/30 text-violet-300' : 'text-white/60 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            {/* Mobile socials */}
            <div className="flex gap-3 px-4 pt-2 mt-1 border-t border-white/10">
              <a href={GITHUB_URL}   target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-lg"><i className="fa-brands fa-github" /></a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-lg"><i className="fa-brands fa-linkedin" /></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
