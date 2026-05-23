import ContactForm from '../components/ContactForm'
import './Advantages.css'

const advantages = [
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
    icon: '📖',
    color: '#f77f00',
    title: 'Har kunlik darslar',
    desc: "Haftasiga 5 kun, 4-5 soatdan o'qitish orqali tibbiyot oliygohlariga kirishingizga yordam beramiz.",
  },
  {
    icon: '👨‍🏫',
    color: '#48cae4',
    title: "Bepul ikkinchi o'qituvchi",
    desc: "Mavzuni yaxshi o'zlashtirolmagan o'quvchilar uchun yordamchi o'qituvchilar mavzularni qayta tushuntirib berishadi.",
  },
  {
    icon: '✅',
    color: '#0096c7',
    title: 'Test markazi',
    desc: "Alohida test markazida MOCK imtihonlari va haqiqiy imtihon formatiga yaqin sinovlar o'tkaziladi.",
  },
  {
    icon: '🏆',
    color: '#fcbf49',
    title: 'Bepul tadbirlar',
    desc: "Olimpiada, seminar, taniqli olimlar bilan suhbat va sayohatlar Colba o'quvchilari uchun tashkil qilinadi.",
  },
  {
    icon: '☕',
    color: '#2ec4b6',
    title: 'Co-working zonalar',
    desc: "Filiallarimizda o'quvchilar mustaqil tayyorlanishi va qo'shimcha dars qilishi uchun qulay zonalar mavjud.",
  },
  {
    icon: '🔬',
    color: '#00b4d8',
    title: 'Mualliflik metodikasi',
    desc: "Murakkab mavzularni oson tushuntirishga moslangan maxsus dastur va qisqa yechim formulalari bilan o'qitamiz.",
  },
]

export default function Advantages() {
  return (
    <main className="advantages page-enter">
      <section className="advantages-simple-hero">
        <div className="container">
          <h1>Nega aynan Colba?</h1>
        </div>
      </section>

      <section className="section advantages-main">
        <div className="container">
          <div className="adv-grid">
            {advantages.map((a) => (
              <div className="adv-card" key={a.title} style={{ '--adv-color': a.color }}>
                <div className="adv-icon-wrap" style={{ background: `${a.color}22` }}>
                  <span className="adv-icon">{a.icon}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="advantages-cta section">
        <div className="container adv-cta-inner">
          <div>
            <h2>3 kunlik BEPUL darsga ro'yxatdan o'ting</h2>
            <p>O'zingizga yaqin filial va qulay vaqtni tanlab, Colba dars jarayonini sinab ko'ring.</p>
          </div>
          <a href="tel:+998781137818" className="btn-primary">Bog'lanish</a>
        </div>
      </section> */}

      <ContactForm
        title="3 kunlik BEPUL darsga"
        highlight="ro'yxatdan o'ting"
        description="Formani to'ldiring, administratorlarimiz siz bilan bog'lanib qulay vaqtni kelishadi."
        buttonText="Ro'yxatdan o'tish"
      />
    </main>
  )
}
