import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import ResultsSlider from '../components/ResultsSlider'
import StatsCards from '../components/StatsCards'
import './Home.css'

const stats = [
  { icon: '🏢', num: '2', label: 'Filiallar' },
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

function BuildingIllustration() {
  return (
    <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" width="100%">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1628"/>
          <stop offset="100%" stopColor="#0d2040"/>
        </linearGradient>
        <linearGradient id="buildGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a3a5c"/>
          <stop offset="100%" stopColor="#102035"/>
        </linearGradient>
        <linearGradient id="windowGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#48cae4" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#0077b6" stopOpacity="0.6"/>
        </linearGradient>
      </defs>

      <rect width="280" height="200" fill="url(#skyGrad)"/>

      {/* Stars */}
      <circle cx="20" cy="15" r="1" fill="white" opacity="0.6"/>
      <circle cx="55" cy="8" r="0.8" fill="white" opacity="0.5"/>
      <circle cx="240" cy="20" r="1" fill="white" opacity="0.7"/>
      <circle cx="260" cy="10" r="0.8" fill="white" opacity="0.4"/>
      <circle cx="100" cy="5" r="0.7" fill="white" opacity="0.5"/>
      <circle cx="180" cy="12" r="1" fill="white" opacity="0.6"/>

      {/* Ground */}
      <rect x="0" y="185" width="280" height="15" fill="#0d1f35"/>

      {/* Main building */}
      <rect x="80" y="40" width="120" height="145" fill="url(#buildGrad)" rx="2"/>
      <line x1="140" y1="40" x2="140" y2="185" stroke="rgba(0,180,216,0.12)" strokeWidth="0.5"/>
      <line x1="80" y1="80" x2="200" y2="80" stroke="rgba(0,180,216,0.1)" strokeWidth="0.5"/>
      <line x1="80" y1="120" x2="200" y2="120" stroke="rgba(0,180,216,0.1)" strokeWidth="0.5"/>
      <line x1="80" y1="155" x2="200" y2="155" stroke="rgba(0,180,216,0.1)" strokeWidth="0.5"/>

      {/* Side building left */}
      <rect x="20" y="75" width="65" height="110" fill="#112238" rx="2"/>
      <line x1="20" y1="110" x2="85" y2="110" stroke="rgba(0,180,216,0.08)" strokeWidth="0.5"/>
      <line x1="20" y1="140" x2="85" y2="140" stroke="rgba(0,180,216,0.08)" strokeWidth="0.5"/>

      {/* Side building right */}
      <rect x="195" y="90" width="65" height="95" fill="#112238" rx="2"/>
      <line x1="195" y1="120" x2="260" y2="120" stroke="rgba(0,180,216,0.08)" strokeWidth="0.5"/>
      <line x1="195" y1="148" x2="260" y2="148" stroke="rgba(0,180,216,0.08)" strokeWidth="0.5"/>

      {/* Main building windows row 1 */}
      <rect x="93" y="52" width="16" height="20" fill="url(#windowGlow)" rx="2" opacity="0.9"/>
      <rect x="117" y="52" width="16" height="20" fill="url(#windowGlow)" rx="2" opacity="0.7"/>
      <rect x="141" y="52" width="16" height="20" fill="url(#windowGlow)" rx="2" opacity="0.85"/>
      <rect x="165" y="52" width="16" height="20" fill="url(#windowGlow)" rx="2" opacity="0.6"/>

      {/* Row 2 */}
      <rect x="93" y="88" width="16" height="20" fill="url(#windowGlow)" rx="2" opacity="0.7"/>
      <rect x="117" y="88" width="16" height="20" fill="url(#windowGlow)" rx="2" opacity="0.9"/>
      <rect x="141" y="88" width="16" height="20" fill="url(#windowGlow)" rx="2" opacity="0.6"/>
      <rect x="165" y="88" width="16" height="20" fill="url(#windowGlow)" rx="2" opacity="0.8"/>

      {/* Row 3 */}
      <rect x="93" y="127" width="16" height="20" fill="url(#windowGlow)" rx="2" opacity="0.6"/>
      <rect x="117" y="127" width="16" height="20" fill="url(#windowGlow)" rx="2" opacity="0.75"/>
      <rect x="141" y="127" width="16" height="20" fill="url(#windowGlow)" rx="2" opacity="0.9"/>
      <rect x="165" y="127" width="16" height="20" fill="url(#windowGlow)" rx="2" opacity="0.5"/>

      {/* Door */}
      <rect x="127" y="158" width="26" height="27" fill="#0d1f35" rx="2"/>
      <rect x="129" y="160" width="10" height="25" fill="rgba(72,202,228,0.25)" rx="1"/>
      <rect x="141" y="160" width="10" height="25" fill="rgba(72,202,228,0.25)" rx="1"/>

      {/* Left building windows */}
      <rect x="28" y="83" width="12" height="16" fill="rgba(72,202,228,0.4)" rx="1"/>
      <rect x="46" y="83" width="12" height="16" fill="rgba(72,202,228,0.55)" rx="1"/>
      <rect x="63" y="83" width="12" height="16" fill="rgba(72,202,228,0.35)" rx="1"/>
      <rect x="28" y="117" width="12" height="16" fill="rgba(72,202,228,0.5)" rx="1"/>
      <rect x="46" y="117" width="12" height="16" fill="rgba(72,202,228,0.3)" rx="1"/>
      <rect x="63" y="117" width="12" height="16" fill="rgba(72,202,228,0.45)" rx="1"/>
      <rect x="28" y="148" width="12" height="16" fill="rgba(72,202,228,0.35)" rx="1"/>
      <rect x="46" y="148" width="12" height="16" fill="rgba(72,202,228,0.55)" rx="1"/>

      {/* Right building windows */}
      <rect x="202" y="98" width="12" height="16" fill="rgba(72,202,228,0.45)" rx="1"/>
      <rect x="220" y="98" width="12" height="16" fill="rgba(72,202,228,0.3)" rx="1"/>
      <rect x="238" y="98" width="12" height="16" fill="rgba(72,202,228,0.5)" rx="1"/>
      <rect x="202" y="127" width="12" height="16" fill="rgba(72,202,228,0.35)" rx="1"/>
      <rect x="220" y="127" width="12" height="16" fill="rgba(72,202,228,0.6)" rx="1"/>
      <rect x="238" y="127" width="12" height="16" fill="rgba(72,202,228,0.4)" rx="1"/>
      <rect x="202" y="155" width="12" height="16" fill="rgba(72,202,228,0.5)" rx="1"/>
      <rect x="220" y="155" width="12" height="16" fill="rgba(72,202,228,0.35)" rx="1"/>

      {/* COLBA sign */}
      <rect x="104" y="28" width="72" height="14" fill="rgba(0,180,216,0.2)" rx="3" stroke="rgba(72,202,228,0.5)" strokeWidth="0.8"/>
      <text x="140" y="38" fontFamily="sans-serif" fontSize="7" fontWeight="700" fill="#48cae4" textAnchor="middle" letterSpacing="2">COLBA</text>

      {/* Ground glow */}
      <rect x="60" y="182" width="160" height="4" fill="rgba(0,180,216,0.15)" rx="2"/>
    </svg>
  )
}

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
                  <Link to="/about" className="btn-primary">
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
                    <BuildingIllustration />
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

      <ContactForm />
    </main>
  )
}
