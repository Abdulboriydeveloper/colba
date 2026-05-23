import { useState } from 'react'
import './ContactForm.css'

export default function ContactForm({
  dark = false,
  title = 'Savollaringiz qoldimi?',
  highlight = "Biz bilan bog'laning!",
  description = "Mutaxassislarimiz sizga qulay vaqtda qo'ng'iroq qilishadi",
  buttonText = 'Ariza qoldirish',
}) {
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
            <h2>{title}<br /><span>{highlight}</span></h2>
            <p>{description}</p>
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
                {buttonText}
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
