import { useState, type FormEvent } from 'react'
import styles from './Footer.module.css'

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M13.5 22v-8.3h2.8l.4-3.3h-3.2V8.6c0-.9.3-1.6 1.7-1.6h1.7V4.1c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V10H8v3.3h2.3V22h3.2Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.upper}>
        <div className={styles.upperInner}>
          <div className={styles.col}>
            <span className={styles.logo}>TÂN NGUYÊN</span>
            <p className={styles.tagline}>
              Trang sức cao cấp và dịch vụ kim hoàn tại Hà Nội — nơi tinh hoa nghề thủ công gặp gỡ phong cách hiện đại.
            </p>
          </div>
          <div className={styles.col}>
            <h3 className={styles.heading}>EXPLORE</h3>
            <ul className={styles.links}>
              <li>
                <a href="#products">Bộ Sưu Tập</a>
              </li>
              <li>
                <a href="#about">Về Chúng Tôi</a>
              </li>
              <li>
                <a href="#services">Dịch Vụ</a>
              </li>
              <li>
                <a href="#news">Tin Tức</a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3 className={styles.heading}>LEGAL</h3>
            <ul className={styles.links}>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
              <li>
                <a href="#shipping">Shipping &amp; Returns</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3 className={styles.heading}>NEWSLETTER</h3>
            <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                className={styles.emailInput}
                autoComplete="email"
                required
              />
              <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
                {submitted ? '✓' : <ArrowIcon />}
              </button>
            </form>
            {submitted ? <p className={styles.successMsg}>Cảm ơn bạn đã đăng ký!</p> : null}
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.lowerInner}>
          <p className={styles.copy}>© 2024 TÂN NGUYÊN JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className={styles.social}>
            <a href="https://facebook.com" className={styles.socialLink} aria-label="Facebook">
              <FacebookIcon className={styles.socialIcon} />
            </a>
            <a href="https://instagram.com" className={styles.socialLink} aria-label="Instagram">
              <InstagramIcon className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
