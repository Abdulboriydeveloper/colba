import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import './FAQ.css'

const faqs = [
  {
    q: "Nechanchi sinfdan qabul qilinadi?",
    a: "7-sinfdan 10-sinfgacha o’quvchilar qabul qilinadi. Agar 11-sinf boshi bo’lsa ham qabul qilinadi."
  },
  {
    q: "Rus tilidagi ham guruhlar mavjudmi?",
    a: "Afsuski, rus tilidagi guruhlarimiz mavjud emas. Colba markazida faqat o’zbek tilidagi guruhlar mavjud."
  },
  {
    q: "Darslar qaysi vaqtlarda bo’ladi?",
    a: "Darslarimiz haftasiga 5 kun ya’ni dushanbadan jumagacha, soat 14:00 dan 18:00 gacha o‘tkaziladi."
  },
  {
    q: "Colba markazida o‘qishni boshlasam, kitob va daftar sotib olishim kerakmi?",
    a: "Colba markazida har bir o‘quvchiga kitob va daftar bepul taqdim etiladi."
  },
  {
    q: "Milliy sertifikat olishim uchun qancha vaqt o’qishim kerak?",
    a: "Colba markazining ta’lim dasturi 1,5-2 yilga mo’ljallangan. Dasturni tugatsangiz yuqori natijaga chiqishingizni kafolatlaymiz."
  }
]

// const categories = [
//   { label: 'Barcha savollar', count: faqs.length },
//   { label: "Ta'lim jarayoni", count: 4 },
//   { label: "To'lov va narxlar", count: 2 },
//   { label: 'Darslar', count: 4 },
// ]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(search.toLowerCase()) ||
    f.a.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="faq-page page-enter">
      <section className="page-hero faq-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="page-eyebrow">Yordam</span>
          <h1>FAQ</h1>
          <p>Ko'p beriladigan savollar va ularning javoblari</p>
          <div className="faq-search-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              className="faq-search"
              placeholder="Savol qidiring..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container faq-layout">
          {/* Sidebar */}
          <aside className="faq-sidebar">
            {/* <h3>Kategoriyalar</h3>
            {categories.map((c, i) => (
              <button key={i} className={`faq-cat-btn ${i === 0 ? 'active' : ''}`}>
                <span>{c.label}</span>
                <span className="faq-cat-count">{c.count}</span>
              </button>
            ))} */}
            <div className="faq-contact-card">
              <div className="faq-contact-icon">💬</div>
              <h4>Javob topolmadingizmi?</h4>
              <p>Mutaxassislarimiz sizga yordam beradi</p>
              <a href="tel:+998781137818" className="btn-primary" style={{ fontSize: '0.85rem', padding: '10px 18px' }}>
                Qo'ng'iroq qilish
              </a>
            </div>
          </aside>

          {/* Accordion */}
          <div className="faq-main">
            {search && (
              <p className="faq-search-result">
                "{search}" bo'yicha {filtered.length} ta natija topildi
              </p>
            )}
            {filtered.length === 0 ? (
              <div className="faq-empty">
                <div className="faq-empty-icon">🔍</div>
                <h3>Natija topilmadi</h3>
                <p>Boshqa kalit so'zlar bilan qidirib ko'ring</p>
              </div>
            ) : (
              filtered.map((f, i) => (
                <div
                  key={i}
                  className={`faq-item ${open === i ? 'faq-open' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    <span className="faq-q-num">0{i + 1}</span>
                    <span className="faq-q-text">{f.q}</span>
                    <span className="faq-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M5 12l7 7 7-7"/>
                      </svg>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
