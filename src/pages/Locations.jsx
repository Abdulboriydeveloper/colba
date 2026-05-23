import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import './Locations.css'

const branches = [
  { id: 1, name: 'OYBEK', address: '16 Afrosiyob kochasi', landmark: "sobiq \"Angel's Food\" (OYBEK metro bekati)", metro: 'Oybek', phone: '+998 78 113 78 18', hours: '09:00 – 17:00' },
  { id: 2, name: "XALQLAR DO'STLIGI", address: '8/1 Islom Karimov kochasi', landmark: "XALQLAR DOSTLIGI metro bekati, sobiq 'UzBowling'", metro: "Xalqlar dostligi", phone: '+998 78 113 78 18', hours: '09:00 – 17:00' },
]

const MAP_IFRAME = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191952.60774044432!2d69.07693!3d41.29950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s`

export default function Locations() {
  const [active, setActive] = useState(0)

  return (
    <main className="locations-page page-enter">
      <section className="page-hero locations-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="page-eyebrow">Manzillar</span>
          <h1>BIZNING MANZILLARIMIZ</h1>
          <p>Filiallarimiz Dushanbadan–Shanbagacha, soat 09:00 dan 17:00 gacha ishlaydi</p>
        </div>
      </section>

      {/* QUICK STATS */}
      <div className="locations-band">
        <div className="container">
          <div className="loc-band-items">
            <div className="loc-band-item">
              <span className="loc-band-icon">🏢</span>
              <strong>2</strong>
              <span>Filiallar</span>
            </div>
            <div className="loc-band-div" />
            <div className="loc-band-item">
              <span className="loc-band-icon">🕐</span>
              <strong>09:00 – 17:00</strong>
              <span>Ish vaqti</span>
            </div>
            <div className="loc-band-div" />
            <div className="loc-band-item">
              <span className="loc-band-icon">📅</span>
              <strong>Du – Sha</strong>
              <span>Ish kunlari</span>
            </div>
            <div className="loc-band-div" />
            <div className="loc-band-item">
              <span className="loc-band-icon">📞</span>
              <strong>+998 78 113 78 18</strong>
              <span>Umumiy raqam</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAP + LIST */}
      <section className="section">
        <div className="container">
          <div className="locations-layout">
            {/* Map */}
            <div className="map-wrap">
              <div className="map-placeholder">
                <iframe
                  title="Tashkent map"
                  src={MAP_IFRAME}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="map-overlay-badge">
                  <span>📍</span> Toshkent shahrida 2 filial
                </div>
              </div>
            </div>

            {/* Branch list */}
            <div className="branch-list">
              {branches.map((b, i) => (
                <div
                  key={b.id}
                  className={`branch-card ${active === i ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <div className="branch-card-left">
                    <div className="branch-pin">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div className="branch-info">
                      <h4>{b.name}</h4>
                      <p>{b.address}</p>
                      <span className="branch-landmark">{b.landmark}</span>
                    </div>
                  </div>
                  <div className="branch-actions">
                    <a href={`https://yandex.com/maps/?text=${encodeURIComponent('Toshkent ' + b.name)}`} target="_blank" rel="noreferrer" className="map-action-btn" title="Yandex Maps" onClick={e => e.stopPropagation()}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    </a>
                    <a href={`https://maps.google.com/?q=Toshkent+${b.name}`} target="_blank" rel="noreferrer" className="map-action-btn maps-btn" title="Google Maps" onClick={e => e.stopPropagation()}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
