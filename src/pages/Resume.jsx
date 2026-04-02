import React, { useState, useRef } from 'react'

/*
  HOW TO USE YOUR RESUME:
  ─────────────────────────────────────────────
  OPTION A — Static file (simplest):
    1. Put your resume PDF in: public/resume.pdf
    2. The "View" and "Download" buttons will work automatically.

  OPTION B — Upload at runtime:
    Use the upload dropzone below to pick any PDF
    from your computer and preview it live.
  ─────────────────────────────────────────────
*/

export default function Resume() {
  // URL of the PDF to display in the viewer
  const [pdfUrl, setPdfUrl]   = useState('/resume.pdf')
  const [viewing, setViewing] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const fileRef = useRef(null)

  /* Handle file picked from device */
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file || file.type !== 'application/pdf') {
      alert('Please select a valid PDF file.')
      return
    }
    const objectUrl = URL.createObjectURL(file)
    setPdfUrl(objectUrl)
    setUploaded(true)
    setViewing(true)   // auto-open viewer after upload
  }

  /* Handle drag-and-drop */
  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type === 'application/pdf') {
      const objectUrl = URL.createObjectURL(file)
      setPdfUrl(objectUrl)
      setUploaded(true)
      setViewing(true)
    }
  }

  return (
    <main className="min-h-screen pt-28 pb-20">

      {/* Orbs */}
      <div className="orb w-80 h-80 bg-violet-600 top-20 right-0 opacity-20" />
      <div className="orb w-64 h-64 bg-blue-600 bottom-20 left-0 opacity-15" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-3 fade-up delay-1" style={{opacity:0}}>Resume</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-up delay-2" style={{opacity:0}}>
          My <span className="gradient-text">Curriculum Vitae</span>
        </h1>
        <p className="text-white/50 mb-12 fade-up delay-3" style={{opacity:0}}>
          View or download my resume. You can also upload a new version to preview it.
        </p>

        {/* Action buttons row */}
        <div className="flex flex-wrap gap-4 mb-10 fade-up delay-3" style={{opacity:0}}>

          {/* View / Hide toggle */}
          <button
            onClick={() => setViewing(v => !v)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30"
          >
            <i className={`fa-solid ${viewing ? 'fa-eye-slash' : 'fa-eye'}`} />
            {viewing ? 'Hide Resume' : 'View Resume'}
          </button>

          {/* Download */}
          <a
            href={pdfUrl}
            download="YourName_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/20 hover:border-violet-400/50 text-white/80 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
          >
            <i className="fa-solid fa-download" />
            Download PDF
          </a>

          {/* Open in new tab */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/20 hover:border-violet-400/50 text-white/80 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
          >
            <i className="fa-solid fa-arrow-up-right-from-square" />
            Open in New Tab
          </a>
        </div>

        {/* ── PDF VIEWER ──────────────────────── */}
        {viewing && (
          <div className="mb-10 fade-up delay-1" style={{opacity:0}}>
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-violet-900/30">
              <div className="glass px-5 py-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <i className="fa-solid fa-file-pdf text-red-400" />
                  {uploaded ? 'Uploaded Resume.pdf' : 'resume.pdf'}
                </div>
                <button
                  onClick={() => setViewing(false)}
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <iframe
                src={pdfUrl}
                title="Resume PDF Viewer"
                className="w-full bg-white"
                style={{ height: '75vh', border: 'none', display: 'block' }}
              />
            </div>
          </div>
        )}

        {/* ── UPLOAD SECTION ──────────────────── */}
        <div className="fade-up delay-4" style={{opacity:0}}>
          <p className="text-sm text-white/40 uppercase tracking-widest font-semibold mb-4">
            <i className="fa-solid fa-upload mr-2" />
            Upload &amp; Preview a Different Resume
          </p>

          {/* Dropzone */}
          <div
            className="glass border-2 border-dashed border-white/20 rounded-2xl p-12 text-center cursor-pointer hover:border-violet-400/60 transition-all duration-300 group"
            onClick={() => fileRef.current.click()}
            onDragOver={e => e.preventDefault()}
            onDrop={handleDrop}
          >
            <div className="w-16 h-16 rounded-2xl bg-violet-600/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-600/40 transition-all">
              <i className="fa-solid fa-file-arrow-up text-2xl text-violet-400" />
            </div>
            <p className="text-white/70 font-medium mb-1">Drag &amp; drop your resume PDF here</p>
            <p className="text-white/40 text-sm">or <span className="text-violet-400 underline">browse files</span></p>
            <p className="text-white/25 text-xs mt-3">PDF files only</p>
            <input
              ref={fileRef}
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {uploaded && (
            <p className="text-center text-green-400 text-sm mt-4 flex items-center justify-center gap-2">
              <i className="fa-solid fa-circle-check" />
              Resume uploaded and opened in viewer above!
            </p>
          )}
        </div>

        {/* ── Resume highlights ───────────────── */}
        {!viewing && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {[
              { icon: 'fa-graduation-cap', color: 'from-violet-500 to-purple-600', title: 'Education',      line1: 'MSC CA ',  line2: 'ICCS· 2026',line3:'BSc Cs',line4:'Rbnb College 2024' },
              { icon: 'fa-briefcase',       color: 'from-blue-500 to-cyan-500',    title: 'Experience',     line1: 'Present Software Developer Intern',line2: 'Data Tech Lab  at Jan 2026' },
              { icon: 'fa-trophy',          color: 'from-amber-400 to-orange-500', title: 'Achievements',   line1: 'Published Research paper',      line2: 'Analyzed Social meadia impact on sucide 2025' },
              { icon: 'fa-certificate',     color: 'from-emerald-400 to-teal-500', title: 'Certifications', line1: 'Java/python/Git/FrontEnd'},
            ].map(c => (
              <div key={c.title} className="glass rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white text-sm mb-4`}>
                  <i className={`fa-solid ${c.icon}`} />
                </div>
                <p className="text-white font-semibold text-sm mb-1">{c.title}</p>
                <p className="text-white/60 text-xs">{c.line1}</p>
                <p className="text-white/40 text-xs mt-0.5">{c.line2}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}
