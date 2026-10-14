import ContactForm from '../components/ContactForm'
import PageFAQ from '../components/PageFAQ'
import ResultsSlider from '../components/ResultsSlider'
import './Results.css'

const fallbackCertificateImage = '/certificates/solixa.jpg'

const results = [
  { name: 'Solixa X.', subject: 'Kimyo', score: '97/100', year: '2024', image: '/certificates/solixa.jpg' },
  { name: 'Malika R.', subject: 'Biologiya', score: '98/100', year: '2024', image: '/certificates/guli.jpg' },
  { name: "Jasur O'.", subject: 'DTM', score: '189.2', year: '2024', image: '/certificates/habiba.jpg' },
  { name: 'Nodira S.', subject: 'Kimyo', score: '96/100', year: '2024', image: '/certificates/komilaxon.jpg' },
  { name: 'Bobur K.', subject: 'Biologiya', score: '97/100', year: '2024', image: '/certificates/madina.jpg' },
  { name: 'Zulfiya M.', subject: 'DTM', score: '191.5', year: '2024', image: '/certificates/munira.jpg' },
  { name: 'Sherzod A.', subject: 'Kimyo', score: '95/100', year: '2023', image: '/certificates/muxlisabonu.jpg' },
  { name: 'Dilnoza Y.', subject: 'Biologiya', score: '96/100', year: '2023', image: '/certificates/parizoda.jpg' },
  { name: 'Madina S.', subject: 'DTM', score: '188.6', year: '2023', image: '/certificates/robiya.jpg' },
  { name: 'Ibrohim N.', subject: 'Kimyo', score: '94/100', year: '2023', image: '/certificates/sevinchoy.jpg' },
  { name: 'Madina S.', subject: 'DTM', score: '188.6', year: '2023', image: '/certificates/soliha' },
  { name: 'Ibrohim N.', subject: 'Kimyo', score: '94/100', year: '2023', image: '/certificates/tasnima.jpg' },
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
          <h2 className="section-title">O'quvchilar sertifikatlari</h2>
          <p className="section-subtitle">
            O'quvchilarimizning real natijalari va sertifikatlari
          </p>

          <div className="certificates-grid">
            {results.map((result, index) => (
              <article className="certificate-card" key={`${result.name}-${index}`}>
                <div className="certificate-image-wrap">
                  <div className="certificate-fallback" aria-hidden="true">
                    <div className="certificate-paper">
                      <span>{result.subject}</span>
                      <strong>{result.score}</strong>
                    </div>
                  </div>
                  <img
                    src={result.image}
                    alt={`${result.name} sertifikati`}
                    className="certificate-image"
                    onError={(event) => {
                      if (event.currentTarget.src.endsWith(fallbackCertificateImage)) {
                        event.currentTarget.style.display = 'none'
                        return
                      }

                      event.currentTarget.src = fallbackCertificateImage
                    }}
                  />
                </div>
                <div className="certificate-meta">
                  <div>
                    <h3>{result.name}</h3>
                    <p>{result.subject}</p>
                  </div>
                  <strong>{result.score}</strong>
                  {/* <span>{result.year}</span> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section results-slider-section">
        <div className="container">
          <h2 className="section-title">Natijalar lentasi</h2>
          <ResultsSlider results={results} ariaLabel="O'quvchilar natijalari slayderi" />
        </div>
      </section> */}

      <PageFAQ page="results" />

      <ContactForm />
    </main>
  )
}
