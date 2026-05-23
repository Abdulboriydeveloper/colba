import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import './FAQ.css'

const faqs = [
  {
    q: "Individual darslar va guruhli darslar qaysi vaqtlarda bo'ladi?",
    a: "Guruhli darslar hafta davomida soat 09:00 dan 17:00 gacha turli vaqtlarda bo'lib o'tadi. Individual darslar esa o'quvchi va ustoz kelishuviga ko'ra belgilanadi. Qulay dars vaqtini tanlash uchun administrator bilan bog'laning."
  },
  {
    q: "Qaysi filialda eng yaxshi ustoz bor?",
    a: "Barcha filiallarimizda CELTA, PhD va yuksak malakali ustozlar ishlaydi. Har bir filialda 97/100 va undan yuqori natijalarga erishgan mutaxassislar mavjud. Biz ustozlarni barcha filiallarga teng darajada taqsimlaymiz."
  },
  {
    q: "Yoshga oid chegaralar mavjudmi?",
    a: "Yo'q, Colbada yoshga oid cheklovlar yo'q. Biz 8 yoshdan tortib katta yoshdagi o'quvchilargacha barcha toifadagi insonlarni qabul qilamiz. Har bir guruh yosh va daraja bo'yicha tashkil etiladi."
  },
  {
    q: "O'zim xohlagan darajada o'qishni boshlashim uchun nima qilishim kerak?",
    a: "Avvalo, biz bilan bog'laning yoki bizimizdagi bepul boshlang'ich test orqali darajangizni aniqlaymiz. So'ngra sizning darajangizga mos guruh yoki individual dars dasturini tavsiya etamiz."
  },
  {
    q: "Kurs narxlari qancha va to'lov qanday amalga oshiriladi?",
    a: "Kurs narxlari tanlangan fan, dars shakli (guruhli yoki individual) va dars soatlari soniga qarab farqlanadi. To'lovni naqd, karta yoki bank o'tkazma orqali amalga oshirish mumkin. Batafsil ma'lumot uchun qo'ng'iroq qiling."
  },
  {
    q: "Bepul sinov darslariga qanday yozilish mumkin?",
    a: "Saytimizda 'Ariza qoldirish' tugmasini bosing yoki +998 78 113 78 18 raqamiga qo'ng'iroq qiling. 3 kunlik bepul sinov darslariga yozilish to'liq bepul va hech qanday majburiyat talab qilmaydi."
  },
  {
    q: "DTMga tayyorlanish kursi qancha vaqt davom etadi?",
    a: "DTM tayyorlov kursi odatda 8–12 oy davom etadi. Bu vaqt ichida kimyo, biologiya, matematika va ona tili fanlaridan intensiv tayyorgarlik ko'rasiz. Shuningdek, 2–4 oylik tezlashtirilgan kurslar ham mavjud."
  },
  {
    q: "Online darslar mavjudmi?",
    a: "Ha, Colbada onlayn darslar ham mavjud. Zoom va bizning maxsus onlayn platformamiz orqali sifatli ta'lim olishingiz mumkin. Onlayn format jismoniy darslar bilan bir xil o'quv dasturini qamrab oladi."
  },
  {
    q: "Laboratoriya mashg'ulotlari bormi?",
    a: "Ha, barcha yirik filiallarimizda zamonaviy kimyo va biologiya laboratoriyalari mavjud. Amaliy tajribalar va eksperimentlar orqali nazariy bilimlarni mustahkamlaysiz."
  },
  {
    q: "Ota-onalar o'z farzandlarining o'qish jarayonini kuzata oladimi?",
    a: "Albatta. Bizning online platformamiz orqali ota-onalar farzandlarining davomat, baholari va o'quv jarayonini real vaqtda kuzata olishlari mumkin. Bundan tashqari, oy oxirida maxsus ota-onalar yig'ilishlari o'tkaziladi."
  },
]

const categories = [
  { label: 'Barcha savollar', count: faqs.length },
  { label: "Ta'lim jarayoni", count: 4 },
  { label: "To'lov va narxlar", count: 2 },
  { label: 'Darslar', count: 4 },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = faqs.filter(f =>
    f.q.toLowerCase().includes(search.toLowerCase()) ||
    f.a.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="faq-page page-enter">
      <section className="page-hero faq-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="page-eyebrow">Yordam</span>
          <h1>FAQ</h1>
          <p>Ko'p beriladigan savollar va ularning javoblari</p>
          <div className="faq-search-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              className="faq-search"
              placeholder="Savol qidiring..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container faq-layout">
          {/* Sidebar */}
          <aside className="faq-sidebar">
            <h3>Kategoriyalar</h3>
            {categories.map((c, i) => (
              <button key={i} className={`faq-cat-btn ${i === 0 ? 'active' : ''}`}>
                <span>{c.label}</span>
                <span className="faq-cat-count">{c.count}</span>
              </button>
            ))}
            <div className="faq-contact-card">
              <div className="faq-contact-icon">💬</div>
              <h4>Javob topolmadingizmi?</h4>
              <p>Mutaxassislarimiz sizga yordam beradi</p>
              <a href="tel:+998781137818" className="btn-primary" style={{ fontSize: '0.85rem', padding: '10px 18px' }}>
                Qo'ng'iroq qilish
              </a>
            </div>
          </aside>

          {/* Accordion */}
          <div className="faq-main">
            {search && (
              <p className="faq-search-result">
                "{search}" bo'yicha {filtered.length} ta natija topildi
              </p>
            )}
            {filtered.length === 0 ? (
              <div className="faq-empty">
                <div className="faq-empty-icon">🔍</div>
                <h3>Natija topilmadi</h3>
                <p>Boshqa kalit so'zlar bilan qidirib ko'ring</p>
              </div>
            ) : (
              filtered.map((f, i) => (
                <div
                  key={i}
                  className={`faq-item ${open === i ? 'faq-open' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    <span className="faq-q-num">0{i + 1}</span>
                    <span className="faq-q-text">{f.q}</span>
                    <span className="faq-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M5 12l7 7 7-7"/>
                      </svg>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
