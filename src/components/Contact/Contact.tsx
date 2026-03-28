import styles from './Contact.module.css'

/** Store address — Google Maps embed, directions, and UI copy */
const STORE_ADDRESS = '4 Đường Chùa Võ, Dương Nội, Hà Nội, Việt Nam'

/** Standard Maps embed (no API key). */
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(STORE_ADDRESS)}&output=embed&hl=vi&z=16`

const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STORE_ADDRESS)}`

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M6.5 4h3l2 5-2 1.2a8 8 0 0 0 3.3 3.3L16 11l5 2v3a2 2 0 0 1-2.2 2 17 17 0 0 1-15-15A2 2 0 0 1 6.5 4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 id="contact-heading" className={styles.title}>
            Kết Nối Với <em>Tân Nguyên</em>
          </h2>
          <ul className={styles.infoList}>
            <li className={styles.infoRow}>
              <PinIcon className={styles.infoIcon} />
              <span>{STORE_ADDRESS}</span>
            </li>
            <li className={styles.infoRow}>
              <PhoneIcon className={styles.infoIcon} />
              <span>09xxx xxx xxx</span>
            </li>
            <li className={styles.infoRow}>
              <ClockIcon className={styles.infoIcon} />
              <span>08:00 – 21:00 Hàng ngày</span>
            </li>
          </ul>
          <div className={styles.btnRow}>
            <button
              type="button"
              className={styles.btnGold}
              onClick={() => {
                window.location.href = 'tel:09xxxxxxxxx'
              }}
            >
              GỌI NGAY
            </button>
            <button
              type="button"
              className={styles.btnOutlineDark}
              onClick={() => window.open(MAPS_DIRECTIONS_URL, '_blank', 'noopener noreferrer')}
            >
              CHỈ ĐƯỜNG
            </button>
          </div>
        </div>
        <div className={styles.mapPanel}>
          <div className={styles.mapFallback} aria-hidden>
            <span className={styles.mapDot} />
            <p className={styles.mapLabel}>{STORE_ADDRESS}</p>
          </div>
          <iframe
            title="Tân Nguyên Jewelry Location"
            className={styles.mapIframe}
            src={MAP_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', minHeight: '400px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
