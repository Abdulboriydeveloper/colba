import ContactForm from '../components/ContactForm'
import PageFAQ from '../components/PageFAQ'
import './Advantages.css'

const advantages = [
  {
    icon: '🎯',
    color: '#00b4d8',
    title: '100% natija',
    desc: "Dasturni o'quv shartlarini bajargan holda yakunlagan o'quvchilar uchun natija kafolatlanadi. Dastur 1,5-2 yilga mo'ljallangan. Bitiruvchilarning sertifikat va ballari Natijalar sahifasida joylangan.",
  },
  {
    icon: '📝',
    color: '#2ec4b6',
    title: 'Har kunlik imtihon',
    desc: "Mavzuning o'zlashtirilishi har kuni imtihon orqali tekshiriladi. Bu bilimdagi bo'shliq to'planib qolishidan oldin uni aniqlashga imkon beradi. Natija o'quvchiga ham, ustozga ham qaysi mavzuga qaytish kerakligini ko'rsatadi.",
  },
  {
    icon: '📖',
    color: '#f77f00',
    title: 'Har kunlik darslar',
    desc: "Darslar haftasiga besh kun, dushanbadan jumagacha, soat 14:00 dan 19:00 gacha o'tkaziladi. Kuz va qish oylarida jadval 14:20 dan 18:30 gacha. Kuniga 4-5 soatlik muntazam mashg'ulot mavzularni uzilishsiz o'zlashtirishga yordam beradi.",
  },
  {
    icon: '👨‍🏫',
    color: '#48cae4',
    title: "Bepul ikkinchi o'qituvchi",
    desc: "Mavzuni yaxshi o'zlashtira olmagan o'quvchi uchun yordamchi o'qituvchi mavzuni qayta tushuntirib beradi. Bu xizmat uchun alohida to'lov olinmaydi.",
  },
  {
    icon: '✅',
    color: '#0096c7',
    title: 'Test markazi',
    desc: "Alohida test markazida MOCK imtihonlari va haqiqiy imtihon formatiga yaqin sinovlar o'tkaziladi. O'quvchi imtihon formatiga oldindan o'rganib boradi.",
  },
  // {
  //   icon: '🏆',
  //   color: '#fcbf49',
  //   title: 'Bepul tadbirlar',
  //   desc: "Olimpiada, seminar, taniqli olimlar bilan suhbat va sayohatlar Colba o'quvchilari uchun tashkil qilinadi.",
  // },
  // {
  //   icon: '☕',
  //   color: '#2ec4b6',
  //   title: 'Co-working zonalar',
  //   desc: "Filiallarimizda o'quvchilar mustaqil tayyorlanishi va qo'shimcha dars qilishi uchun qulay zonalar mavjud.",
  // },
  {
    icon: '🔬',
    color: '#00b4d8',
    title: 'Mualliflik metodikasi',
    desc: "Dastur Colba asoschisi Doniyor Nasriddinovning ko'p yillik izlanishlari asosida tuzilgan. Murakkab mavzular oson usulda tushuntiriladi, masalalar uchun qisqa yechim formulalari beriladi. Metodika tabiiy fanlari yaxshi rivojlangan Turkiya va Ozarbayjon tajribasiga tayangan va DTM hamda olimpiada formatiga mos.",
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
          <a href="tel:+998550550040" className="btn-primary">Bog'lanish</a>
        </div>
      </section> */}

      <PageFAQ page="advantages" />

      <ContactForm
        title="3 kunlik BEPUL darsga"
        highlight="ro'yxatdan o'ting"
        description="Formani to'ldiring, administratorlarimiz siz bilan bog'lanib qulay vaqtni kelishadi."
        buttonText="Ro'yxatdan o'tish"
      />
    </main>
  )
}
