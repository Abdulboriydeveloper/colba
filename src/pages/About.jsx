import ContactForm from '../components/ContactForm'
import './About.css'

const milestones = [
  { year: '2013', event: "Colba ta'lim markazi tashkil topdi" },
  { year: '2015', event: "5 ta filial ochildi, 2000+ o'quvchilar" },
  { year: '2018', event: "10 ta filialga yetdi, 100,000 bitiruvchi" },
  { year: '2021', event: "Online ta'lim tizimi ishga tushirildi" },
  { year: '2024', event: "13 ta filial, 200,000+ bitiruvchi" },
]

const team = [
  { name: 'Kimyo bolimi', count: '45+', icon: '⚗️' },
  { name: 'Biologiya bolimi', count: '38+', icon: '🔬' },
  { name: 'DTM tayyorlov', count: '30+', icon: '📝' },
  { name: 'Administratsiya', count: '120+', icon: '💼' },
]

export default function About() {
  return (
    <main className="about page-enter">
      {/* PAGE HERO */}
      <section className="page-hero about-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="page-eyebrow">Colba haqida</span>
          <h1>BIZ HAQIMIZDA</h1>
          <p>2013-yildan buyon kimyo va biologiya fanlarini o'qitib kelayotgan O'zbekistondagi eng yirik ixtisoslashgan ta'lim markazi</p>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="section">
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
            <span className="text-eyebrow">Bizning missiyamiz</span>
            <h2>O'zbekiston ta'limini yangi bosqichga olib chiqamiz</h2>
            <p>
              Colba Ta'lim Markazi 2013-yilda kimyo va biologiya fanlarini chuqur o'qitish maqsadida tashkil topgan. Bugungi kunda biz O'zbekistondagi eng yirik ixtisoslashgan ta'lim markazilarimizdan birimiz.
            </p>
            <p>
              Bizning asosiy maqsadimiz — har bir o'quvchini DTM va xalqaro imtihonlarga sifatli tayyorlash va ularga yorqin kelajak yaratishda ko'mak berish.
            </p>
            <div className="about-highlights">
              {[
                { icon: '🎯', text: 'DTMda 95%+ muvaffaqiyat darajasi' },
                { icon: '🌍', text: 'Xalqaro olimpiadalarda ishtirok' },
                { icon: '🔬', text: 'Zamonaviy laboratoriya uskunalari' },
              ].map((h, i) => (
                <div className="highlight-item" key={i}>
                  <span>{h.icon}</span>
                  <p>{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="about-stats section-dark section">
        <div className="container">
          <div className="about-stats-grid">
            {[
              { num: '13', label: 'Filiallar' },
              { num: '600+', label: 'Malakali xodimlar' },
              { num: '13 yil', label: 'Faoliyat tajribasi' },
              { num: '21 000+', label: "Faol o'quvchilar" },
              { num: '200 000+', label: 'Muvaffaqiyatli bitiruvchilar' },
            ].map((s, i) => (
              <div className="about-stat" key={i}>
                <div className="about-stat-num">{s.num}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section section section-gray">
        <div className="container">
          <span className="stats-eyebrow">Tarix</span>
          <h2 className="section-title">Bizning yo'limiz</h2>
          <p className="section-subtitle">Kichkina o'quv guruhdan O'zbekistondagi eng yirik ixtisoslashgan markazgacha</p>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-year">{m.year}</div>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section section">
        <div className="container">
          <span className="stats-eyebrow">Jamoamiz</span>
          <h2 className="section-title">600+ malakali xodimlar</h2>
          <div className="team-grid">
            {team.map((t, i) => (
              <div className="team-card" key={i}>
                <div className="team-icon">{t.icon}</div>
                <div className="team-count">{t.count}</div>
                <div className="team-name">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
