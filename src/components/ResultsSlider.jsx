import './ResultsSlider.css'

export default function ResultsSlider({ results, ariaLabel = 'Bitiruvchilar natijalari slayderi' }) {
  return (
    <div className="results-slider" aria-label={ariaLabel}>
      {results.map((result, index) => {
        const image = result.image || `/results/result-${index + 1}.jpg`

        return (
          <div className="result-slide-card" key={`${result.name}-${index}`}>
            <img
              src={image}
              alt={`${result.name} natijasi`}
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />
            <div className="result-slide-placeholder" aria-hidden="true">
              <div className="result-cert-paper">
                <span className="result-cert-subject">{result.subject}</span>
                <div className="result-cert-lines">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="result-cert-stamp">✓</div>
              </div>
              <div className="result-slide-score">{result.score}</div>
            </div>
            <div className="result-slide-meta">
              <span>{result.name}</span>
              <small>{result.year}</small>
            </div>
          </div>
        )
      })}
    </div>
  )
}
