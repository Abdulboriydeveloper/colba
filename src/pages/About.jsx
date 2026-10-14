import ContactForm from '../components/ContactForm'
import PageFAQ from '../components/PageFAQ'
import StatsCards from '../components/StatsCards'
import './About.css'

const stats = [
  { icon: '🏢', num: '3', label: 'Filiallar' },
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
            <iframe
              className="about-video"
              src="https://www.youtube.com/embed/uIn1KamUaxk"
              title="Colba haqida video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
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

      <PageFAQ page="about" />

      <ContactForm />
    </main>
  )
}
