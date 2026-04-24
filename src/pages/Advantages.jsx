import ContactForm from '../components/ContactForm'
import './Advantages.css'

const advantages = [
  {
    icon: '📚',
    color: '#f77f00',
    title: "Bepul ikkinchi o'qituvchi",
    desc: "Mavzuni yaxshi o'zlashtirolmagan bo'lsangiz, yordamchi o'qituvchilar har doim yoningizda va istagan mavzuyingizni qayta tushuntirib berishadi.",
    tag: 'BEPUL',
  },
  {
    icon: '✅',
    color: '#2ec4b6',
    title: 'Test Markazi',
    desc: "Alohida test markazimiz mavjud u yerda siz, ham MOCK imtihonlarini ham haqiqiy imtihonni topshirishingiz mumkin. To'g'ri o'qidingiz, haqiqiy imtihonni Colbada topshirasiz.",
    tag: 'EKSKLYUZIV',
  },
  {
    icon: '🏆',
    color: '#e63946',
    title: 'Bepul Tadbirlar',
    desc: "Olimpiada, seminar, taniqli olimlar bilan suhbat va unutmas sayohatlar, bularning barchasi Colba o'quvchilari uchun mutlaqo bepul.",
    tag: 'BEPUL',
  },
  {
    icon: '☕',
    color: '#457b9d',
    title: 'Co-working zonalar',
    desc: "Har bir filialimizda o'quvchilarimiz uchun maxsus co-working zonalar mavjud bo'lib, bu yerda siz darslardan ozod vaqtingizda ingliz tilini o'rganishingiz yoki qo'shimcha o'qituvchi bilan qolib ketgan darslaringizni qayta o'tishingiz mumkin.",
    tag: 'BONUS',
  },
  {
    icon: '🔬',
    color: '#6a4c93',
    title: 'Zamonaviy laboratoriya',
    desc: "Amaliy kimyo va biologiya tajribalarini bajarish uchun zamonaviy laboratoriya jihozlari bilan ta'minlangan maxsus xonalar. Nazariyani amalda ko'ring!",
    tag: 'LABORATORIYA',
  },
  {
    icon: '📱',
    color: '#2d6a4f',
    title: 'Online platforma',
    desc: "Dars materiallarini, vazifalarni va natijalarni onlayn platformamiz orqali har qanday qurilmadan kuzating va yuklab oling. 24/7 mavjud.",
    tag: 'ONLINE',
  },
]

const compare = [
  { feature: 'Tajribali ustozlar', colba: true, other: false },
  { feature: 'Bepul ikkinchi ustoz', colba: true, other: false },
  { feature: 'Test markazi', colba: true, other: false },
  { feature: 'Laboratoriya', colba: true, other: false },
  { feature: "Online ta'lim", colba: true, other: true },
  { feature: 'Bepul tadbirlar', colba: true, other: false },
  { feature: 'Co-working zona', colba: true, other: false },
  { feature: '13 filial', colba: true, other: false },
]

export default function Advantages() {
  return (
    <main className="advantages page-enter">
      <section className="page-hero adv-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="page-eyebrow">Afzalliklar</span>
          <h1>NEGA AYNAN BIZ?</h1>
          <p>2013-yildan buyon yoshlarga sifatli ta'lim berib kelmoqdamiz va hozirga kelib 13 ta filialga egamiz</p>
        </div>
      </section>

      {/* ADVANTAGES GRID */}
      <section className="section section-dark">
        <div className="container">
          <span className="section-eyebrow-light">Bizning ustunliklarimiz</span>
          <h2 className="section-title" style={{ color: 'white' }}>Nega yoshlar bizni tanlashmoqda?</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Har bir imtiyoz o'quvchilarimizning muvaffaqiyatiga hissa qo'shadi
          </p>
          <div className="adv-grid">
            {advantages.map((a, i) => (
              <div
                className={`adv-card ${i === 2 ? 'adv-card-wide' : ''}`}
                key={i}
                style={{ '--adv-color': a.color }}
              >
                <div className="adv-tag" style={{ background: `${a.color}33`, color: a.color }}>{a.tag}</div>
                <div className="adv-icon-wrap" style={{ background: `${a.color}22` }}>
                  <span className="adv-icon">{a.icon}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <div className="adv-glow" style={{ background: a.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="compare-section section section-gray">
        <div className="container">
          <span className="stats-eyebrow">Solishtirma</span>
          <h2 className="section-title">Colba vs Boshqa markazlar</h2>
          <p className="section-subtitle">Nima uchun Colba yaxshiroq ekanini o'zingiz ko'ring</p>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Xizmat</th>
                  <th className="colba-col">
                    <div className="colba-header">
                      <span>🏆</span> COLBA
                    </div>
                  </th>
                  <th>Boshqalar</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((c, i) => (
                  <tr key={i}>
                    <td>{c.feature}</td>
                    <td className="colba-col">
                      <div className={`compare-check ${c.colba ? 'yes' : 'no'}`}>
                        {c.colba ? '✓' : '✗'}
                      </div>
                    </td>
                    <td>
                      <div className={`compare-check ${c.other ? 'yes' : 'no'}`}>
                        {c.other ? '✓' : '✗'}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
