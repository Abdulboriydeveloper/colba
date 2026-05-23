import ContactForm from '../components/ContactForm'
import StatsCards from '../components/StatsCards'
import './About.css'

const stats = [
  { icon: '🏢', num: '2', label: 'Filiallar' },
  { icon: '👥', num: '50+', label: 'Xodimlar' },
  { icon: '📅', num: '16 yil', label: 'Faoliyat davri' },
  { icon: '🎓', num: '12 000+', label: "O'quvchilar" },
  { icon: '🏆', num: '200+', label: 'Bitiruvchilar' },
]

export default function About() {
  return (
    <main className="about page-enter">
      <section className="about-simple-hero">
        <div className="container">
          <h1>Colba haqida</h1>
        </div>
      </section>

      <section className="section about-main-section">
        <div className="container about-intro">
          <div className="about-video-wrap">
            <div className="video-placeholder">
              <div className="play-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M5 3l14 9-14 9V3z"/>
                </svg>
              </div>
              <p>Colba haqida video</p>
              <div className="video-badge">▶ 3:45</div>
            </div>
          </div>

          <div className="about-text">
            <p>
              Colba Ta'lim Markazi tibbiyot oliygohlariga kirishni maqsad qilgan yoshlar uchun kimyo va biologiya fanlarini chuqur o'rgatadigan ixtisoslashgan ta'lim markazidir.
            </p>
            <p>
              Biz o'quvchilarga mualliflik metodikasi, har kunlik nazorat va tajribali ustozlar orqali kuchli tayyorgarlik beramiz.
            </p>
          </div>
        </div>
      </section>

      <section className="about-stats-simple section-gray section">
        <div className="container">
          <StatsCards stats={stats} />
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
