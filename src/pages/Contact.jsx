import React, { useState } from 'react'

const EMAILJS_SERVICE_ID  = 'service_fari6on'
const EMAILJS_TEMPLATE_ID = 'template_uc4s9gs'
const EMAILJS_PUBLIC_KEY  = 'oz2F6Dtd0FddIa8Q9'

const GITHUB_URL   = 'https://github.com/Dipak805'
const LINKEDIN_URL = 'https://linkedin.com/in/dipak-gund-90321a2a3'
const YOUR_EMAIL   = 'gundd526@gmail.com'

function validate(f) {
  const e = {}
  if (!f.name.trim())    e.name = 'Name is required.'
  if (!f.email.trim())   e.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email.'
  if (!f.message.trim()) e.message = 'Message is required.'
  else if (f.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
  return e
}

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const onChange = e => {
    const { name, value } = e.target
    setFields(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const onSubmit = async e => {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id:  EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id:     EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name:  fields.name,
            from_email: fields.email,
            subject:    fields.subject || 'Portfolio Contact',
            message:    fields.message,
          },
        }),
      })

      if (res.ok) {
        setStatus('sent')
        setFields({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen pt-28 pb-20">

      <div className="orb w-80 h-80 bg-blue-600   top-10  right-0  opacity-20" />
      <div className="orb w-72 h-72 bg-violet-700 bottom-0 left-0  opacity-15" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-3 fade-up delay-1" style={{opacity:0}}>Contact</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-up delay-2" style={{opacity:0}}>
          Let's <span className="gradient-text">Connect</span>
        </h1>
        <p className="text-white/50 mb-14 text-lg fade-up delay-3" style={{opacity:0}}>
          Have a project, question, or just want to say hi? My inbox is open!
        </p>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left info panel */}
          <div className="lg:col-span-2 flex flex-col gap-6 fade-up delay-1" style={{opacity:0}}>
            {[
              { icon: 'fa-envelope',     label: 'Email',    val: YOUR_EMAIL,        href: `mailto:${YOUR_EMAIL}` },
              { icon: 'fa-location-dot', label: 'Location', val: 'Pune, India',     href: null },
              { icon: 'fa-clock',        label: 'Response', val: 'Within 24 hours', href: null },
            ].map(d => (
              <div key={d.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 flex-shrink-0">
                  <i className={`fa-solid ${d.icon} text-sm`} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{d.label}</p>
                  {d.href
                    ? <a href={d.href} className="text-white/80 text-sm hover:text-violet-400 transition-colors">{d.val}</a>
                    : <p className="text-white/80 text-sm">{d.val}</p>
                  }
                </div>
              </div>
            ))}

            <div className="border-t border-white/10 my-2" />

            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">Find Me On</p>
            <div className="flex flex-col gap-3">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-4 rounded-xl glass border border-white/10 hover:border-white/25 text-white/70 hover:text-white transition-all duration-300 hover:scale-[1.02] group">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-lg group-hover:bg-white/20 transition-all">
                  <i className="fa-brands fa-github" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">GitHub</p>
                  <p className="text-white/40 text-xs">@YOUR_USERNAME</p>
                </div>
                <i className="fa-solid fa-arrow-right ml-auto text-white/30 group-hover:text-violet-400 transition-colors" />
              </a>

              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-4 rounded-xl glass border border-white/10 hover:border-blue-400/40 text-white/70 hover:text-white transition-all duration-300 hover:scale-[1.02] group">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 flex items-center justify-center text-lg group-hover:bg-blue-600/40 transition-all text-blue-400">
                  <i className="fa-brands fa-linkedin" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">LinkedIn</p>
                  <p className="text-white/40 text-xs">in/YOUR_USERNAME</p>
                </div>
                <i className="fa-solid fa-arrow-right ml-auto text-white/30 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3 fade-up delay-2" style={{opacity:0}}>
            <div className="glass rounded-2xl p-8 border border-white/10">

              {status === 'sent' ? (
                <div className="flex flex-col items-center text-center py-10 gap-5">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-4xl text-green-400">
                    <i className="fa-solid fa-circle-check" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-white/50 max-w-xs">Thanks for reaching out! I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all hover:scale-105"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                  <h2 className="text-xl font-bold mb-1">Send a Message</h2>

                  {status === 'error' && (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      <i className="fa-solid fa-triangle-exclamation" />
                      <span>Failed to send. Email me directly at <a href={`mailto:${YOUR_EMAIL}`} className="underline ml-1">{YOUR_EMAIL}</a></span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your Name" required error={errors.name}>
                      <input name="name" type="text" placeholder="John Doe"
                        value={fields.name} onChange={onChange} className={inputCls(errors.name)} />
                    </Field>
                    <Field label="Email" required error={errors.email}>
                      <input name="email" type="email" placeholder="john@example.com"
                        value={fields.email} onChange={onChange} className={inputCls(errors.email)} />
                    </Field>
                  </div>

                  <Field label="Subject">
                    <input name="subject" type="text" placeholder="Project / Internship / Collaboration"
                      value={fields.subject} onChange={onChange} className={inputCls(false)} />
                  </Field>

                  <Field label="Message" required error={errors.message}>
                    <textarea name="message" rows={5} placeholder="Hi! I'd like to..."
                      value={fields.message} onChange={onChange}
                      className={`${inputCls(errors.message)} resize-none`} />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/30 mt-2"
                  >
                    {status === 'sending'
                      ? <><i className="fa-solid fa-spinner fa-spin" /> Sending...</>
                      : <><i className="fa-solid fa-paper-plane" /> Send Message</>
                    }
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-white/70">
        {label} {required && <span className="text-violet-400">*</span>}
      </label>
      {children}
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  )
}

function inputCls(hasError) {
  return `w-full px-4 py-3 rounded-xl bg-white/5 border ${
    hasError ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-violet-500'
  } text-white placeholder-white/30 text-sm outline-none transition-all duration-300 focus:bg-white/8 focus:shadow-lg focus:shadow-violet-900/20`
}
