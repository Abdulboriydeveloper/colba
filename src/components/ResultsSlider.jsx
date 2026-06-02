import './ResultsSlider.css'

const FALLBACK_CERTIFICATE_IMAGE = '/certificates/solixa.jpg'

export default function ResultsSlider({ results, ariaLabel = 'Bitiruvchilar natijalari slayderi' }) {
  return (
    <div className="results-slider" aria-label={ariaLabel}>
      {results.map((result, index) => {
        const image = result.image || FALLBACK_CERTIFICATE_IMAGE

        return (
          <div className="result-slide-card" key={`${result.name}-${index}`}>
            <div className="result-slide-image-wrap">
              <div className="result-slide-fallback" aria-hidden="true">
                <div className="result-slide-paper">
                  <span>{result.subject}</span>
                  <strong>{result.score}</strong>
                </div>
              </div>
              <img
                src={image}
                alt={`${result.name} natijasi`}
                className="result-slide-image"
                onError={(event) => {
                  if (event.currentTarget.src.endsWith(FALLBACK_CERTIFICATE_IMAGE)) {
                    event.currentTarget.style.display = 'none'
                    return
                  }

                  event.currentTarget.src = FALLBACK_CERTIFICATE_IMAGE
                }}
              />
            </div>
            <div className="result-slide-meta">
              <div>
                <span>{result.name}</span>
                <small>{result.subject}</small>
              </div>
              <strong>{result.score}</strong>
              <em>{result.year}</em>
            </div>
          </div>
        )
      })}
    </div>
  )
}
