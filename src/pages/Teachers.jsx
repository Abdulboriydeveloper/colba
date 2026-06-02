import { Link } from 'react-router-dom'
import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import './Teachers.css'

const fallbackTeacherImage = '/teachers/umida-karimova.jpg'

const teachers = [
  { name: 'Mukhammadisa Makhmudov', subject: 'Kimyo', exp: '7 yil', students: '3 500+', color: '#00b4d8', image: '/teachers/mukhammadisa-makhmudov.jpg' },
  { name: 'Kristina Khafizova', subject: 'Biologiya', exp: '5 yil', students: '1 000+', color: '#2ec4b6', image: '/teachers/kristina-khafizova.jpg' },
  { name: 'Nurmuhammad Ravshanov', subject: 'Kimyo', exp: '12 yil', students: '4 000+', color: '#f77f00', image: '/teachers/nurmuhammad-ravshanov.jpg' },
  { name: 'Diyor Soliyev', subject: 'Biologiya', exp: '10 yil', students: '1 000+', color: '#e63946', image: '/teachers/diyor-soliyev.jpg' },
  { name: 'Aziz Jalilov', subject: 'Kimyo', exp: '10 yil', students: '3 500+', color: '#457b9d', image: '/teachers/aziz-jalilov.jpg' },
  { name: 'Umida Karimova', subject: 'Biologiya', exp: '17 yil', students: '7 000+', color: '#6a4c93', image: '/teachers/umida-karimova.jpg' },
  { name: 'Odilbek Shavkiyev', subject: 'Kimyo', exp: '12 yil', students: '4 000+', color: '#1d3557', image: '/teachers/odilbek-shavkiyev.jpg' },
  { name: 'Khojimurod Yusupov', subject: 'Biologiya', exp: '13 yil', students: '5 000+', color: '#2d6a4f', image: '/teachers/khojimurod-yusupov.jpg' },
  { name: 'Timur Inagamov', subject: 'Kimyo', exp: '25+ yil', students: '10 000+', color: '#780000', image: '/teachers/timur-inagamov.jpg' },
  { name: 'Foziljon Ergashaliyev', subject: 'Biologiya', exp: '9 yil', students: '5 000+', color: '#4a4e69', image: '/teachers/foziljon-ergashaliyev.jpg' },
]

export default function Teachers() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? teachers : teachers.filter(t => t.subject === filter)

  return (
    <main className="teachers page-enter">
      <section className="page-hero teachers-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          {/* <span className="page-eyebrow">Ustozlar</span> */}
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
              return (
                <div className="teacher-card" key={i} style={{ '--accent': t.color }}>
                  <div className="teacher-photo-wrap">
                    <div className="teacher-photo-fallback">
                      <span>{t.name.split(' ').map(part => part[0]).join('').slice(0, 2)}</span>
                    </div>
                    <img
                      src={t.image}
                      alt={t.name}
                      className="teacher-photo"
                      onError={(event) => {
                        if (event.currentTarget.src.endsWith(fallbackTeacherImage)) {
                          event.currentTarget.style.display = 'none'
                          return
                        }

                        event.currentTarget.src = fallbackTeacherImage
                      }}
                    />
                  </div>

                  <div className="teacher-info">
                    <div className="teacher-subject">{t.subject}</div>
                    <h3 className="teacher-name">{t.name}</h3>
                  </div>

                  <div className="teacher-stats">
                    <div className="t-stat">
                      <div className="t-stat-label">Tajriba</div>
                      <div className="t-stat-num">{t.exp}</div>
                    </div>
                    <div className="t-stat-divider" />
                    <div className="t-stat">
                      <div className="t-stat-label">O'quvchilar</div>
                      <div className="t-stat-num">{t.students}</div>
                    </div>
                  </div>

                  <div className="teacher-overlay">
                    <Link to="/registration" className="teacher-cta">Ro'yxatdan o'tish</Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/registration" className="btn-primary">
              ✦ Ro'yxatdan o'tish
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
