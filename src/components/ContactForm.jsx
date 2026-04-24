import { useState } from 'react'
import './ContactForm.css'

export default function ContactForm({ dark = false }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !phone) return
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setName(''); setPhone('') }, 3000)
  }

  return (
    <section className={`contact-section ${dark ? 'contact-dark' : 'contact-light'}`}>
      <div className="container">
        <div className="contact-card">
          <div className="contact-left">
            <h2>Savollaringiz qoldimi?<br /><span>Biz bilan bog'laning!</span></h2>
            <p>Mutaxassislarimiz sizga qulay vaqtda qo'ng'iroq qilishadi</p>
          </div>

          {submitted ? (
            <div className="contact-success">
              <div className="success-icon">✓</div>
              <p>Arizangiz qabul qilindi! Tez orada bog'lanamiz.</p>
            </div>
          ) : (
            <div className="contact-form-row" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ismingiz"
                value={name}
                onChange={e => setName(e.target.value)}
                className="contact-input"
              />
              <input
                type="tel"
                placeholder="+998 (__)  __ -  __ - __"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="contact-input"
              />
              <button className="btn-orange contact-submit" onClick={handleSubmit}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
                Ariza qoldirish
              </button>
            </div>
          )}

          <div className="contact-decoration">
            <div className="qa-bubble q">Q</div>
            <div className="qa-bubble a">A</div>
          </div>
        </div>
      </div>
    </section>
  )
}
