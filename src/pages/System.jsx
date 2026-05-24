import ContactForm from '../components/ContactForm'
import './System.css'

const advantages = [
  {
    icon: '🧠',
    title: 'Oson tushuntiriladi',
    desc: 'Murakkab kimyo va biologiya mavzulari eng sodda usulda, bosqichma-bosqich tushuntiriladi.',
  },
  {
    icon: '⚡',
    title: 'Qisqa formulalar',
    desc: 'Har bir murakkab masalaga maxsus ishlab chiqilgan qisqa yechim yo\'llari va formulalar.',
  },
  {
    icon: '🌍',
    title: 'Xalqaro tajriba',
    desc: 'Turkiya va Ozarbayjon kabi tabiiy fanlar yaxshi rivojlangan davlatlar metodikasi asosida.',
  },
  {
    icon: '📈',
    title: 'Yuqori o\'zlashtirish',
    desc: 'Qiyinchilik minimal darajada bo\'lgani uchun qiziqish ortadi va natija sezilarli yaxshilanadi.',
  },
  {
    icon: '🎯',
    title: 'DTM yo\'naltirilgan',
    desc: 'Dastur DTM imtihonlari va olimpiadalar formatiga to\'liq moslashtirilgan.',
  },
  {
    icon: '🔬',
    title: 'Mualliflik metodikasi',
    desc: 'Colba asoschisi Doniyor Nasriddinovning ko\'p yillik izlanishlari natijasida yaratilgan.',
  },
]

export default function System() {
  return (
    <main className="system-page page-enter">

      {/* HERO */}
      <section className="page-hero system-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <h1>O'QUV DASTURIMIZ</h1>
          <p>Colba ta’lim markazi muqobili boʻlmagan mualliflik oʻquv dasturi va metodikasiga ega.</p>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="section system-founder-section">
        <div className="container">
          <div className="system-founder-grid">

            {/* Matn */}
            <div className="founder-text-block">
              {/* <div className="sys-eyebrow">Mualliflik dasturi</div> */}
              <h2 className="sys-heading">
                Colba'ning muqobili<br />
                bo'lmagan metodikasi
              </h2>
              <p className="sys-lead">
                Colba ta'lim markazi muqobili bo'lmagan mualliflik o'quv dasturi va
                metodikasiga ega. Bu dastur Colba asoschisi{' '}
                <strong>Doniyor Nasriddinov</strong>ning ko'p yillik izlanishlari va
                tajribasi asosida tuzilgan bo'lib, tabiiy fanlarni juda oson usulda
                tushuntirilishi va murakkab masalalarga juda qisqa yechimlar va
                formulalari borligi bilan ajralib turadi.
              </p>

              <div className="founder-signature-card">
                <div className="founder-avatar-wrap">
                  {/* Rasmni qo'yish uchun <img> ni almashtiring */}
                  <div className="founder-avatar-placeholder">
                    <span>👨‍🏫</span>
                  </div>
                </div>
                <div className="founder-sig-info">
                  <div className="founder-sig-name">Doniyor Nasriddinov</div>
                  <div className="founder-sig-role">Colba asoschisi &amp; bosh metodist</div>
                  <div className="founder-sig-desc">
                    Ko'p yillik izlanish va tajriba asosida yaratilgan
                    mualliflik o'quv dasturining muallifi
                  </div>
                </div>
              </div>
            </div>

            {/* Qo'shimcha panel */}
            <div className="founder-detail-block">
              <div className="detail-panel">
                <div className="detail-panel-header">
                  <span className="detail-panel-icon">🌐</span>
                  <h3>Xalqaro tajribaga asoslangan</h3>
                </div>
                <p>
                  Ushbu ta'lim dasturi tabiiy fanlar yaxshi rivojlangan{' '}
                  <strong>Turkiya, Ozarbayjon</strong> kabi davlatlar tajribasidan
                  foydalanib ishlab chiqilgan.
                </p>

                <div className="detail-divider" />

                <div className="detail-panel-header">
                  <span className="detail-panel-icon">💡</span>
                  <h3>Qiyinchilik minimumda</h3>
                </div>
                <p>
                  Dasturning afzalliklaridan biri o'rganish nisbatan osonligi.
                  Shu tufayli o'quvchilarda qiyinchilik minimum darajaga tushadi va
                  qiziqish ortadi hamda o'zlashtirish darajasi yuqori bo'ladi.
                </p>

                <div className="detail-stats-row">
                  <div className="detail-stat">
                    <span className="detail-stat-num">10+</span>
                    <span className="detail-stat-label">Yillik izlanish</span>
                  </div>
                  <div className="detail-stat-div" />
                  <div className="detail-stat">
                    <span className="detail-stat-num">3</span>
                    <span className="detail-stat-label">Xalqaro metodika</span>
                  </div>
                  <div className="detail-stat-div" />
                  <div className="detail-stat">
                    <span className="detail-stat-num">95%</span>
                    <span className="detail-stat-label">O'zlashtirish</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES GRID */}
      <section className="section system-advantages-section">
        <div className="container">
          <div className="sys-section-header">
            <div className="sys-eyebrow">Nima uchun Colba?</div>
            <h2 className="sys-heading">Dasturning afzalliklari</h2>
          </div>

          <div className="advantages-grid">
            {advantages.map((a, i) => (
              <div className="advantage-card" key={i}>
                <div className="adv-icon">{a.icon}</div>
                <h4 className="adv-title">{a.title}</h4>
                <p className="adv-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="system-cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-text">
              <h2>Ushbu metodika bilan o'rganing</h2>
              <p>Ro'yxatdan o'ting va birinchi darsni bepul oling</p>
            </div>
            <button className="btn-primary">✦ Ro'yxatdan o'tish</button>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}