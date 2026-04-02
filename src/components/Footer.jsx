import React from 'react'
import { NavLink } from 'react-router-dom'

const GITHUB_URL   = 'https://github.com/Dipak805'
const LINKEDIN_URL = 'https://linkedin.com/in/dipak-gund-90321a2a3'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 glass py-10 mt-0">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <NavLink to="/" className="font-display font-bold text-lg text-white/80 tracking-tight">
          <span className="gradient-text">&lt;</span>Dipak Gund<span className="gradient-text">/&gt;</span>
        </NavLink>

        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Dipak Gund ❤️
        </p>

        <div className="flex items-center gap-4">
          <a href={GITHUB_URL}   target="_blank" rel="noopener noreferrer"
            className="text-white/40 hover:text-white text-xl transition-all duration-300 hover:scale-110">
            <i className="fa-brands fa-github" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
            className="text-white/40 hover:text-blue-400 text-xl transition-all duration-300 hover:scale-110">
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  )
}
