import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import './Teachers.css'

const teachers = [
  { name: 'Mukhammadisa Makhmudov', subject: 'Kimyo', score: '97/100', qual: 'DTM Olimpiada', exp: '7 yil', students: '3 500+', badge: 'top', color: '#00b4d8' },
  { name: 'Kristina Khafizova', subject: 'Biologiya', score: '98/100', qual: 'PhD, Biologiya', exp: '5 yil', students: '1 000+', badge: 'top', color: '#2ec4b6' },
  { name: 'Nurmuhammad Ravshanov', subject: 'Kimyo', score: '96/100', qual: 'Kimyo fanlari nomzodi', exp: '12 yil', students: '4 000+', badge: 'senior', color: '#f77f00' },
  { name: 'Diyor Soliyev', subject: 'Biologiya', score: '95/100', qual: 'Biologiya fanlari nomzodi', exp: '10 yil', students: '1 000+', badge: 'senior', color: '#e63946' },
  { name: 'Aziz Jalilov', subject: 'Kimyo', score: '97/100', qual: 'Kimyo PhD', exp: '10 yil', students: '3 500+', badge: 'top', color: '#457b9d' },
  { name: 'Umida Karimova', subject: 'Biologiya', score: '96/100', qual: 'PhD, Tibbiyot', exp: '17 yil', students: '7 000+', badge: 'legend', color: '#6a4c93' },
  { name: 'Odilbek Shavkiyev', subject: 'Kimyo', score: '95/100', qual: 'Professor, Kimyo', exp: '12 yil', students: '4 000+', badge: 'senior', color: '#1d3557' },
  { name: 'Khojimurod Yusupov', subject: 'Biologiya', score: '96/100', qual: 'Biologiya PhD', exp: '13 yil', students: '5 000+', badge: 'senior', color: '#2d6a4f' },
  { name: 'Timur Inagamov', subject: 'Kimyo', score: '95/100', qual: 'Kimyo Professori', exp: '25+ yil', students: '10 000+', badge: 'legend', color: '#780000' },
  { name: 'Foziljon Ergashaliyev', subject: 'Biologiya', score: '96/100', qual: 'Biologiya fanlari nomzodi', exp: '9 yil', students: '5 000+', badge: 'senior', color: '#4a4e69' },
]

const badgeConfig = {
  top: { label: '⭐ Top Ustoz', bg: '#ffd60a22', border: '#ffd60a', color: '#b88600' },
  senior: { label: '🎖 Senior', bg: '#00b4d822', border: '#00b4d8', color: '#007ea8' },
  legend: { label: '👑 Legend', bg: '#f77f0022', border: '#f77f00', color: '#c56200' },
}

export default function Teachers() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? teachers : teachers.filter(t => t.subject === filter)

  return (
    <main className="teachers page-enter">
      <section className="page-hero teachers-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="page-eyebrow">Ustozlar</span>
          <h1>USTOZLARIMIZ</h1>
          <p>Kimyo va biologiya fanlari bo'yicha eng tajribali va malakali mutaxassislar jamoasi</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className="teachers-filter">
            {['all', 'Kimyo', 'Biologiya'].map(f => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'Barcha ustozlar' : f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="teachers-grid">
            {filtered.map((t, i) => {
              const bc = badgeConfig[t.badge]
              return (
                <div className="teacher-card" key={i} style={{ '--accent': t.color }}>
                  <div className="teacher-card-top">
                    <div className="teacher-avatar" style={{ background: `${t.color}22`, border: `2px solid ${t.color}44` }}>
                      <span style={{ fontSize: '2.2rem' }}>
                        {t.subject === 'Kimyo' ? '⚗️' : '🔬'}
                      </span>
                    </div>
                    <div
                      className="teacher-badge"
                      style={{ background: bc.bg, borderColor: bc.border, color: bc.color }}
                    >
                      {bc.label}
                    </div>
                  </div>

                  <div className="teacher-info">
                    <div className="teacher-subject" style={{ color: t.color }}>{t.subject}</div>
                    <h3 className="teacher-name">{t.name}</h3>
                    <div className="teacher-qual">{t.qual}</div>
                  </div>

                  <div className="teacher-score">
                    <div className="score-label">Ball</div>
                    <div className="score-num" style={{ color: t.color }}>{t.score}</div>
                  </div>

                  <div className="teacher-stats">
                    <div className="t-stat">
                      <div className="t-stat-num">{t.exp}</div>
                      <div className="t-stat-label">Tajriba</div>
                    </div>
                    <div className="t-stat-divider" />
                    <div className="t-stat">
                      <div className="t-stat-num">{t.students}</div>
                      <div className="t-stat-label">O'quvchilar</div>
                    </div>
                  </div>

                  <div className="teacher-overlay">
                    <button className="teacher-cta">Ro'yxatdan o'tish</button>
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <button className="btn-primary">
              ✦ Ro'yxatdan o'tish
            </button>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
