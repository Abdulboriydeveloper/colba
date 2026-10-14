import { pageFaqs } from '../data/pageFaqs'
import './PageFAQ.css'

export default function PageFAQ({ page, title = "Ko'p beriladigan savollar" }) {
  const items = pageFaqs[page]
  if (!items?.length) return null

  return (
    <section className="page-faq section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="page-faq-list">
          {items.map((item, i) => (
            <div className="page-faq-item" key={item.q}>
              <span className="page-faq-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="page-faq-q">{item.q}</h3>
                <p className="page-faq-a">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
