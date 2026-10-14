import { Link } from 'react-router-dom'
import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import PageFAQ from '../components/PageFAQ'
import './Teachers.css'

const fallbackTeacherImage = '/teachers/new/dadaxonova-oydinabonu.jpg'

const teachers = [
  { name: 'Oydinabonu Dadaxonova', subject: 'Biologiya', badge: 'Sertifikatlar sohibi', exp: '4 yil', students: '100', color: '#00b4d8', image: '/teachers/new/dadaxonova-oydinabonu.jpg' },
  { name: 'Firuza Habibullayeva', subject: 'Biologiya', badge: 'Sertifikatlar sohibi', exp: '4 yil', students: '100', color: '#f77f00', image: '/teachers/new/habibullayeva-feruza.jpg' },
  { name: 'Bahrom Ibrohimov', subject: 'Biologiya', badge: 'Sertifikatlar sohibi', exp: '4 yil', students: '100', color: '#e63946', image: '/teachers/new/ibrohimov-bahrom.jpg' },
  { name: "Shahzod To'rayev", subject: 'Biologiya', badge: 'Sertifikatlar sohibi', exp: '5 yil', students: '100', color: '#2ec4b6', image: '/teachers/new/torayev-shahzod.jpg' },
  { name: "Hamroz Normo'minov", subject: 'Biologiya', badge: 'Sertifikatlar sohibi', exp: '3 yil', students: '100', color: '#4a4e69', image: '/teachers/new/normominov-hamroz.jpg' },
  { name: 'Zebo Ilyosova', subject: 'Biologiya', badge: 'Sertifikatlar sohibi', exp: '3 yil', students: '100', color: '#780000', image: '/teachers/new/img-8957.jpg' },
  { name: 'Jahongir Abdusattorov', subject: 'Biologiya', badge: 'Sertifikatlar sohibi', exp: '3 yil', students: '100', color: '#457b9d', image: '/teachers/new/abdusattorov-jahongir.jpg' },
  { name: 'Jonibek Ergashev', subject: 'Biologiya', badge: 'Sertifikatlar sohibi', exp: '5 yil', students: '100', color: '#6a4c93', image: '/teachers/new/ergashev-jonibek.jpg' },
  { name: 'Jonibek Jalolov', subject: 'Kimyo', badge: 'Sertifikatlar sohibi', exp: '4 yil', students: '60', color: '#0096c7', image: '/teachers/new/jalolov-jonibek.jpg' },
  { name: 'Diyorbek Karimov', subject: 'Kimyo', badge: 'Sertifikatlar sohibi', exp: '4 yil', students: '100', color: '#1d3557', image: '/teachers/new/karimov-diyorbek.jpg' },
  { name: "Sohibjon Yo'ldashev", subject: 'Kimyo', badge: 'Sertifikatlar sohibi', exp: '4 yil', students: '100', color: '#2d6a4f', image: '/teachers/new/yoldashev-sohibjon.jpg' },
  { name: 'Jahongir Jabborov', subject: 'Kimyo', badge: 'Sertifikatlar sohibi', exp: '5 yil', students: '100', color: '#457b9d', image: '/teachers/new/jabborov-jahongir.jpg' },
  { name: 'Anvarjon Xudoyberdiyev', subject: 'Kimyo', badge: 'Sertifikatlar sohibi', exp: '6 yil', students: '100', color: '#e63946', image: '/teachers/new/xudoyberdiyev-anvarjon.jpg' },
  { name: 'Feruzaxon Ergasheva', subject: 'Ona tili', badge: 'Sertifikatlar sohibi', exp: '6 yil', students: '200', color: '#2ec4b6', image: '/teachers/new/ergasheva-feruzaxon.jpg' },
  { name: 'Jahongir Qilichev', subject: 'Ona tili', badge: 'Sertifikatlar sohibi', exp: '5 yil', students: '200', color: '#0096c7', image: '/teachers/new/qilichev-jahongir.jpg' },
  { name: 'Ilyosbek Nabijonov', subject: 'Matematika', badge: 'Sertifikatlar sohibi', exp: '5 yil', students: '200', color: '#6a4c93', image: '/teachers/new/nabijonov-ilyosbek.jpg' },

  // Ro'yxatda yo'q — kerak bo'lsa izohdan chiqaring
  // { name: 'Diyorbek Mehmonaliyev', subject: '', exp: '', students: '', color: '#00b4d8', image: '/teachers/new/mehmonaliyev-diyorbek.jpg' },
  // { name: 'Umida Karimova', subject: 'Kimyo', exp: '12 yil', students: '4 000+', color: '#1d3557', image: '/teachers/umida-karimova.jpg' },
  // { name: 'Timur Inagamov', subject: 'Kimyo', exp: '25+ yil', students: '10 000+', color: '#780000', image: '/teachers/timur-inagamov.jpg' },
  // { name: 'Foziljon Ergashaliyev', subject: 'Biologiya', exp: '9 yil', students: '5 000+', color: '#4a4e69', image: '/teachers/foziljon-ergashaliyev.jpg' },
  // { name: 'Shuxrat Usmonov', subject: 'Kimyo', exp: '5 yil', students: '500+', color: '#2d6a4f', image: '/teachers/usmonov-shuxrat.JPG' },
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
            {['all', 'Kimyo', 'Biologiya', 'Matematika', 'Ona tili'].map(f => (
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
            {filtered.map((t) => {
              return (
                <div className="teacher-card" key={t.name} style={{ '--accent': t.color }}>
                  <div className="teacher-photo-wrap">
                    <div className="teacher-photo-fallback">
                      <span>{t.name.split(' ').map(part => part[0]).join('').slice(0, 2)}</span>
                    </div>
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
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
                    {t.subject && <div className="teacher-subject">{t.subject}</div>}
                    <h3 className="teacher-name">{t.name}</h3>
                    {t.badge && <div className="teacher-badge">{t.badge}</div>}
                  </div>

                  {(t.exp || t.students) && (
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
                  )}

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

      <PageFAQ page="teachers" />

      <ContactForm />
    </main>
  )
}
