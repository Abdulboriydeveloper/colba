import { useState } from 'react'
import { sendLeadToBitrix } from '../utils/bitrixLead'
import './ContactForm.css'

function getPhoneDigits(value) {
  return value.replace(/\D/g, '')
}

function getLocalPhoneDigits(value) {
  const digits = getPhoneDigits(value)
  if (digits.startsWith('998')) return digits.slice(3, 12)
  if (digits.startsWith('0')) return digits.slice(1, 10)
  return digits.slice(0, 9)
}

function formatPhone(value) {
  const local = getLocalPhoneDigits(value)
  if (!local) return ''
  const parts = ['+998']
  if (local.length > 0) parts.push(local.slice(0, 2))
  if (local.length > 2) parts.push(local.slice(2, 5))
  if (local.length > 5) parts.push(local.slice(5, 7))
  if (local.length > 7) parts.push(local.slice(7, 9))
  return parts.join(' ')
}

function isValidPhone(value) {
  const digits = getPhoneDigits(value)
  return digits.length === 12 && digits.startsWith('998')
}

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
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const trimmedName = name.trim()
    const formattedPhone = formatPhone(phone).trim()

    if (!trimmedName || !isValidPhone(formattedPhone) || sending) {
      setError("Iltimos, ism va telefon raqamini to'g'ri kiriting.")
      return
    }

    setSending(true)
    setError('')

    try {
      await sendLeadToBitrix({
        name: trimmedName,
        phone: formattedPhone,
        sourceLabel: 'ContactForm',
      })
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setName('')
        setPhone('')
      }, 3000)
    } catch (err) {
      console.error('[Colba] ContactForm Bitrix xatosi:', err)
      setError("Xatolik yuz berdi. Qayta urinib ko'ring.")
    } finally {
      setSending(false)
    }
  }

  const handlePhoneFocus = () => {
    if (!phone) setPhone('+998 ')
  }

  const handlePhoneInput = (e) => {
    setPhone(formatPhone(e.target.value))
    setError('')
  }

  const handlePhoneBlur = () => {
    if (getLocalPhoneDigits(phone).length === 0) setPhone('')
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
            <form className="contact-form-row" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ismingiz"
                value={name}
                onChange={e => { setName(e.target.value); setError('') }}
                className="contact-input"
                autoComplete="name"
              />
              <input
                type="tel"
                placeholder="+998 (__)  __ -  __ - __"
                value={phone}
                onFocus={handlePhoneFocus}
                onChange={handlePhoneInput}
                onBlur={handlePhoneBlur}
                className="contact-input"
                autoComplete="tel"
                inputMode="numeric"
                maxLength={17}
              />
              <button className="btn-orange contact-submit" type="submit" disabled={sending}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
                {sending ? 'Yuborilmoqda...' : buttonText}
              </button>
              {error && <p className="contact-error" role="alert">{error}</p>}
            </form>
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
