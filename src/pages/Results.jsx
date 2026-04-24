import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import './Results.css'

const results = [
  { name: 'Azizbek T.', subject: 'Kimyo', score: '97/100', year: '2024', d1: 97, d2: 98, d3: 95, d4: 96 },
  { name: 'Malika R.', subject: 'Biologiya', score: '98/100', year: '2024', d1: 98, d2: 99, d3: 96, d4: 97 },
  { name: "Jasur O'.", subject: 'DTM', score: '189.2', year: '2024', d1: 188, d2: 190, d3: 189, d4: 190 },
  { name: 'Nodira S.', subject: 'Kimyo', score: '96/100', year: '2024', d1: 96, d2: 97, d3: 95, d4: 96 },
  { name: 'Bobur K.', subject: 'Biologiya', score: '97/100', year: '2024', d1: 97, d2: 98, d3: 96, d4: 97 },
  { name: 'Zulfiya M.', subject: 'DTM', score: '191.5', year: '2024', d1: 191, d2: 192, d3: 190, d4: 191 },
  { name: 'Sherzod A.', subject: 'Kimyo', score: '95/100', year: '2023', d1: 95, d2: 96, d3: 94, d4: 95 },
  { name: 'Dilnoza Y.', subject: 'Biologiya', score: '96/100', year: '2023', d1: 96, d2: 97, d3: 95, d4: 96 },
]

const colorMap = { 'Kimyo': '#00b4d8', 'Biologiya': '#2ec4b6', 'DTM': '#f77f00' }
const iconMap  = { 'Kimyo': '⚗️', 'Biologiya': '🔬', 'DTM': '📝' }

const overallStats = [
  { num: '95%+', label: 'Muvaffaqiyat darajasi' },
  { num: '200K+', label: 'Bitiruvchilar' },
  { num: '3000+', label: "Top natijali o'quvchilar" },
  { num: '98%',   label: "Ota-onalar mamnuniyati" },
]

const testimonials = [
  { name: 'Kamola B.', score: '97/100', subject: 'Kimyo',
    text: "Colbada o'qigan yillarim hayotimning eng samarali davri bo'ldi. Ustozlar juda tajribali va yordamga doimo tayyor." },
  { name: 'Sardor N.', score: '189.4', subject: 'DTM',
    text: "Test markazi va co-working zonalar menga juda yordam berdi. DTMga tayyorliq jarayonida Colba eng yaxshi tanlov!" },
  { name: 'Feruza T.', score: '98/100', subject: 'Biologiya',
    text: "Biologiya fani bo'yicha bunday chuqur bilim beradigan markaz boshqa yo'q. Laboratoriya mashg'ulotlari ayniqsa foydali." },
]

export default function Results() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? results : results.filter(r => r.subject === filter)

  return (
    <main className="results page-enter">
      {/* HERO */}
      <section className="page-hero results-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="page-eyebrow">Natijalar</span>
          <h1>BIZNING NATIJALARIMIZ!</h1>
          <p>O'quvchilarimiz doimiy ravishda yuqori natijalarga erishib o'z kelajaklarini qurmoqda</p>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="results-stats-band">
        <div className="container">
          <div className="results-stats-row">
            {overallStats.map((s, i) => (
              <div className="res-stat" key={i}>
                <div className="res-stat-num">{s.num}</div>
                <div className="res-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="section">
        <div className="container">
          <span className="stats-eyebrow">Sertifikatlar</span>
          <h2 className="section-title">O'quvchilarimizning natijalari</h2>
          <p className="section-subtitle">
            O'quvchilarimiz doimiy ravishda yuqori natijalarga erishib o'z kelajaklarini qurishadi
          </p>

          <div className="results-filter">
            {['all', 'Kimyo', 'Biologiya', 'DTM'].map(f => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? '🎓 Barchasi' : `${iconMap[f]} ${f}`}
              </button>
            ))}
          </div>

          <div className="results-grid">
            {filtered.map((r, i) => {
              const color = colorMap[r.subject] || '#00b4d8'
              const scores = [r.d1, r.d2, r.d3, r.d4]
              const labels = ['Ball-1', 'Ball-2', 'Ball-3', 'Ball-4']
              return (
                <div className="result-detail-card" key={i} style={{ '--res-color': color }}>
                  <div className="cert-mockup">
                    <div className="cert-header">
                      <div className="cert-logo-icon">{iconMap[r.subject]}</div>
                      <div>
                        <div className="cert-title-text">NATIJA GUVOHNOMASI</div>
                        <div className="cert-type-text">{r.subject} — {r.year}</div>
                      </div>
                    </div>
                    <div className="cert-divider-line" style={{ background: color }} />
                    <div className="cert-sub-scores">
                      {scores.map((v, j) => (
                        <div className="sub-score-row" key={j}>
                          <span className="sub-score-lbl">{labels[j]}</span>
                          <div className="sub-score-bar-bg">
                            <div className="sub-score-bar-fill" style={{ width: `${Math.min(v, 100)}%`, background: color }} />
                          </div>
                          <span className="sub-score-val">{v}</span>
                        </div>
                      ))}
                    </div>
                    <div className="cert-stamp" style={{ borderColor: color, color }}>✓</div>
                  </div>

                  <div className="result-meta">
                    <div className="result-meta-name">{r.name}</div>
                    <div className="result-meta-subject" style={{ background: `${color}22`, color }}>
                      {iconMap[r.subject]} {r.subject}
                    </div>
                    <div className="result-meta-overall">
                      <span className="overall-lbl">UMUMIY</span>
                      <span className="overall-num" style={{ color }}>{r.score}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials section section-gray">
        <div className="container">
          <span className="stats-eyebrow">Fikrlar</span>
          <h2 className="section-title">O'quvchilarimiz nima deydi?</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ background: colorMap[t.subject] }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-meta">
                      <span style={{ color: colorMap[t.subject] }}>{t.subject}</span> — {t.score}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
