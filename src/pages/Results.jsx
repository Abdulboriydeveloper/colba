import ContactForm from '../components/ContactForm'
import ResultsSlider from '../components/ResultsSlider'
import './Results.css'

const results = [
  { name: 'Azizbek T.', subject: 'Kimyo', score: '97/100', year: '2024' },
  { name: 'Malika R.', subject: 'Biologiya', score: '98/100', year: '2024' },
  { name: "Jasur O'.", subject: 'DTM', score: '189.2', year: '2024' },
  { name: 'Nodira S.', subject: 'Kimyo', score: '96/100', year: '2024' },
  { name: 'Bobur K.', subject: 'Biologiya', score: '97/100', year: '2024' },
  { name: 'Zulfiya M.', subject: 'DTM', score: '191.5', year: '2024' },
  { name: 'Sherzod A.', subject: 'Kimyo', score: '95/100', year: '2023' },
  { name: 'Dilnoza Y.', subject: 'Biologiya', score: '96/100', year: '2023' },
  { name: 'Madina S.', subject: 'DTM', score: '188.6', year: '2023' },
  { name: 'Ibrohim N.', subject: 'Kimyo', score: '94/100', year: '2023' },
]

const overallStats = [
  { num: '95%', label: "Bitiruvchilar talaba bo'lishadi" },
  { num: '12 000+', label: 'Muvaffaqiyatli bitiruvchilar' },
  { num: '2000+', label: "Ayni vaqtdagi o'quvchilar" },
]

export default function Results() {
  return (
    <main className="results page-enter">
      <section className="results-simple-hero">
        <div className="container">
          <h1>Bizning natijalarimiz!</h1>
        </div>
      </section>

      <section className="results-stats-band">
        <div className="container">
          <div className="results-stats-row three">
            {overallStats.map((s) => (
              <div className="res-stat" key={s.label}>
                <div className="res-stat-num">{s.num}</div>
                <div className="res-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">O'quvchilar natijalari</h2>
          <p className="section-subtitle">
            O'quvchilarimiz doimiy ravishda yuqori natijalarni qayd etib, tibbiyot oliygohlariga qabul qilinishmoqda
          </p>

          <ResultsSlider results={results} ariaLabel="O'quvchilar natijalari slayderi" />
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
