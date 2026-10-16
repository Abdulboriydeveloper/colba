import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import PageFAQ from '../components/PageFAQ'
import ResultsSlider from '../components/ResultsSlider'
import StatsCards from '../components/StatsCards'
import homeImage from '../assets/images/homeimg.webp'
import './Home.css'

const stats = [
  { icon: '🏢', num: '3', label: 'Filiallar' },
  { icon: '👥', num: '50+', label: 'Xodimlar' },
  { icon: '📅', num: '16 yil', label: 'Faoliyat davri' },
  { icon: '🎓', num: '12 000+', label: "O'quvchilar" },
  { icon: '🏆', num: '200+', label: 'Bitiruvchilar' },
]

const features = [
  {
    icon: '🎯',
    color: '#00b4d8',
    title: '100% natija',
    desc: "Colba ta'lim dasturini to'liq yakunlagan o'quvchilar tibbiyot oliygohlariga muddatidan oldin kirishadi.",
  },
  {
    icon: '📝',
    color: '#2ec4b6',
    title: 'Har kunlik imtihon',
    desc: "O'quvchining mavzu o'zlashtirayotganini doimiy nazorat qilib borish uchun har kunlik imtihon tizimi joriy qilingan.",
  },
  {
    icon: '📚',
    color: ' 49bdfc',
    title: 'Har kunlik darslar',
    desc: "Haftasiga 5 kun, 4-5 soatdan o'qitish orqali tibbiyot oliygohlariga kirishingizga yordam beramiz.",
  },
]

const previewResults = [
  { subject: 'Kimyo', score: '96/100', name: 'Azizbek T.', year: '2024', image: '/results/result-1.jpg' },
  { subject: 'Biologiya', score: '98/100', name: 'Malika R.', year: '2024', image: '/results/result-2.jpg' },
  { subject: 'DTM', score: '189.2', name: "Jasur O'.", year: '2024', image: '/results/result-3.jpg' },
  { subject: 'Kimyo', score: '97/100', name: 'Nodira S.', year: '2024', image: '/results/result-4.jpg' },
  { subject: 'Biologiya', score: '95/100', name: 'Bobur K.', year: '2024', image: '/results/result-5.jpg' },
  { subject: 'DTM', score: '191.5', name: 'Zulfiya M.', year: '2024', image: '/results/result-6.jpg' },
  { subject: 'Kimyo', score: '95/100', name: 'Sherzod A.', year: '2023', image: '/results/result-7.jpg' },
  { subject: 'Biologiya', score: '96/100', name: 'Dilnoza Y.', year: '2023', image: '/results/result-8.jpg' },
  { subject: 'DTM', score: '188.6', name: 'Madina S.', year: '2023', image: '/results/result-9.jpg' },
  { subject: 'Kimyo', score: '94/100', name: 'Ibrohim N.', year: '2023', image: '/results/result-10.jpg' },
]

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb orb1" />
          <div className="hero-orb orb2" />
          <div className="hero-orb orb3" />
          <div className="hero-shape shape1" />
          <div className="hero-shape shape2" />
        </div>

        <div className="container hero-content">
          <div className="hero-grid">
            {/* LEFT - Text */}
            <div className="hero-left">

              <h1 className="hero-title">
                O'zbekistondagi eng yirik
                <span className="hero-title-block">Tibbiyotga Ixtisoslashgan</span>
                Markaz
              </h1>

              <p className="hero-desc">
                <strong>16 yil ichida</strong> Colba <strong>12 000 dan ortiq</strong> yoshlarga ta'lim va tarbiya berdi!
              </p>

              <div className="hero-cta-row">
                <p className="hero-cta-label">3 kunlik BEPUL darsga yoziling</p>
                <span className="hero-cta-arrow" aria-hidden="true">→</span>
                <div className="hero-actions">
                  <Link to="/registration" className="btn-primary">
                    Ariza qoldirish
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="hero-stats-row">
                <div className="hero-stat">
                  <span className="hero-stat-num">10</span>
                  <span className="hero-stat-lbl">Filial</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat">
                  <span className="hero-stat-num">600+</span>
                  <span className="hero-stat-lbl">Xodimlar</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat">
                  <span className="hero-stat-num">200K+</span>
                  <span className="hero-stat-lbl">Bitiruvchilar</span>
                </div>
              </div>
            </div>

            {/* RIGHT - Building illustration */}
            <div className="hero-right">
              <div className="building-frame">
                <div className="building-glow" />

                <div className="float-chip chip-top">
                  <div className="chip-val">12 000+</div>
                  <div className="chip-lbl">Faol o'quvchilar</div>
                </div>

                <div className="float-chip chip-bottom">
                  <div className="chip-val">2010</div>
                  <div className="chip-lbl">Tashkil etilgan</div>
                </div>

                <div className="building-card">
                  <div className="building-svg-wrap">
                    <img className="building-image" src={homeImage} alt="Colba o'quv markazi binosi" />
                  </div>
                  <div className="building-footer">
                    <span className="building-name">Colba O'quv Markazi</span>
                    <span className="building-badge">Toshkent, O'zbekiston</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section section-gray section">
        <div className="container">
          {/* <p className="stats-eyebrow">Raqamlarda</p> */}
          <h2 className="section-title">Colba markazi raqamlarda</h2>
          <StatsCards stats={stats} />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section section section-dark">
        <div className="container">
          {/* <p className="section-eyebrow-light">Nega aynan biz?</p> */}
          <h2 className="section-title" style={{ color: 'white' }}>Nega yoshlar aynan Colbani tanlashmoqda?</h2>
          {/* <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.5)' }}>
            2010-yildan buyon yoshlarga sifatli ta'lim berib kelmoqdamiz va hozirga kelib 2 ta filialga egamiz
          </p> */}

          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="feature-icon-wrap" style={{ background: `${f.color}22` }}>
                  <div className="feature-icon" style={{ background: f.color }}>{f.icon}</div>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="features-cta">
            <Link to="/advantages" className="btn-primary">
              Barcha afzalliklarni ko'rish
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK RESULTS */}
      <section className="results-preview section">
        <div className="container">
          <h2 className="section-title section-title-results">Bizning qahramonlarimiz!</h2>
          <p className="section-subtitle">
            Bitiruvchilarimiz natijalari bilan tanishing, keyingisi siz bo'lishingiz mumkin
          </p>
          <ResultsSlider results={previewResults} />
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/results" className="btn-primary">Barcha natijalarni ko'rish</Link>
          </div>
        </div>
      </section>

      <PageFAQ page="home" />

      <ContactForm />
    </main>
  )
}
