import { useState, useEffect, useRef } from 'react'
import ContactForm from '../components/ContactForm'
import './Locations.css'

// ✅ Koordinatalarni shu yerga kiriting: [latitude, longitude]
const branches = [
  {
    id: 1,
    name: 'TINCHLIK',
    address: "Bog' ko'chasining 2-tor ko'chasi, 1/3",
    landmark: "Tinchlik metro bekati yonida",
    district: 'Shayxontohur tumani',
    coords: [41.3202, 69.2631], // 👈 [latitude, longitude]
  },
  {
    id: 2,
    name: 'NURAFSHON',
    address: "Tinchlik metro bekatidan 600 metr",
    landmark: "Tinchlik metro bekati yaqinida",
    district: 'Shayxontohur tumani',
    coords: [41.3150, 69.2580], // 👈 [latitude, longitude]
  },
  {
    id: 3,
    name: "SIRGʻALI",
    address: "O'zgarish mahalla fuqarolar yig'ini",
    landmark: "O'zgarish metro bekati",
    district: "Sirg'ali tumani",
    coords: [41.2480, 69.1720], // 👈 [latitude, longitude]
  },
]

// 👇 Yandex Maps API kalitingizni shu yerga kiriting (https://developer.tech.yandex.ru/)
const YANDEX_API_KEY = 'YOUR_API_KEY'

function yandexLink(b) {
  return `https://yandex.uz/maps/?pt=${b.coords[1]},${b.coords[0]},pm2ym&z=16&l=map`
}
function googleLink(b) {
  return `https://maps.google.com/?q=${b.coords[0]},${b.coords[1]}`
}

export default function Locations() {
  const [active, setActive] = useState(0)
  const mapRef = useRef(null)       // DOM element
  const ymapRef = useRef(null)      // ymaps.Map instance
  const markersRef = useRef([])

  /* ---------- Yandex Maps JS API ni yuklash ---------- */
  useEffect(() => {
    function initMap() {
      const ymaps = window.ymaps
      ymaps.ready(() => {
        if (ymapRef.current) return   // already initialized

        ymapRef.current = new ymaps.Map(mapRef.current, {
          center: branches[0].coords,
          zoom: 12,
          controls: ['zoomControl', 'fullscreenControl'],
        })

        branches.forEach(b => {
          const placemark = new ymaps.Placemark(
            b.coords,
            {
              balloonContentHeader: `<strong>${b.name}</strong>`,
              balloonContentBody: `${b.district}<br/><small>${b.landmark}</small>`,
            },
            {
              preset: 'islands#yellowDotIcon',   // sariq pin — birinchi rasmdagidek
              iconColor: '#f5a623',
            }
          )
          markersRef.current.push(placemark)
          ymapRef.current.geoObjects.add(placemark)
        })
      })
    }

    if (window.ymaps) {
      initMap()
      return
    }

    const script = document.createElement('script')
    const apiKey = YANDEX_API_KEY !== 'YOUR_API_KEY' ? `&apikey=${YANDEX_API_KEY}` : ''
    script.src = `https://api-maps.yandex.ru/2.1/?lang=uz_UZ${apiKey}`
    script.async = true
    script.onload = initMap
    document.head.appendChild(script)

    return () => {
      if (ymapRef.current) {
        ymapRef.current.destroy()
        ymapRef.current = null
        markersRef.current = []
      }
    }
  }, [])

  /* ---------- Active filial o'zgarganda xarita pan qiladi ---------- */
  useEffect(() => {
    if (ymapRef.current && branches[active]) {
      ymapRef.current.panTo(branches[active].coords, { flying: true, duration: 500 })
    }
  }, [active])

  return (
    <main className="locations-page page-enter">
      <section className="page-hero locations-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <h1>BIZNING FILIALLARIMIZ</h1>
          <p>Hozirda Colba markazining Toshkent shahrida 3 ta filiali mavjud</p>
        </div>
      </section>

      {/* QUICK STATS */}
      <div className="locations-band">
        <div className="container">
          <div className="loc-band-items">
            <div className="loc-band-item">
              <span className="loc-band-icon">🏢</span>
              <strong>3</strong>
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

            {/* Yandex Map — iframe emas, to'g'ridan-to'g'ri div */}
            <div className="map-wrap">
              <div className="map-placeholder">
                <div
                  ref={mapRef}
                  style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-xl)' }}
                />
                <div className="map-overlay-badge">
                  <span>📍</span> Toshkent shahrida 3 filial
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
                      <p>{b.district}, {b.address}</p>
                      <span className="branch-landmark">{b.landmark}</span>
                    </div>
                  </div>

                  <div className="branch-actions">
                    <a href={yandexLink(b)} target="_blank" rel="noreferrer"
                      className="map-action-btn yandex-btn" title="Yandex Maps"
                      onClick={e => e.stopPropagation()}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </a>
                    <a href={googleLink(b)} target="_blank" rel="noreferrer"
                      className="map-action-btn maps-btn" title="Google Maps"
                      onClick={e => e.stopPropagation()}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      </svg>
                    </a>
                    {/* <a href={`https://yandex.uz/maps/?panorama[point]=${b.coords[1]},${b.coords[0]}`}
                      target="_blank" rel="noreferrer"
                      className="map-action-btn street-btn" title="Ko'cha ko'rinishi"
                      onClick={e => e.stopPropagation()}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </a> */}
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