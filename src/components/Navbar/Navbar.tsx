import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'COLLECTIONS', href: '#products' },
  { label: 'BESPOKE', href: '#services' },
  { label: 'HERITAGE', href: '#about' },
  { label: 'ATELIER', href: '#contact' },
] as const

function scrollToSection(href: string) {
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 6h15l-1.5 9h-12L6 6zm0 0L5 3H2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="1.5" fill="currentColor" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" />
    </svg>
  )
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 20c1.5-4 5.5-6 7-6s5.5 2 7 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M1 1h20M1 9h20M1 17h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isOpen])

  const navLinkClass = `${styles.navLink} ${scrolled ? styles.linkScrolled : ''}`
  const iconClass = `${styles.icon} ${scrolled ? styles.iconScrolled : ''}`
  const headerClass = `${styles.header} ${scrolled ? styles.headerScrolled : ''}`

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
    setIsOpen(false)
  }

  return (
    <header className={headerClass}>
      <nav className={styles.nav} aria-label="Chính">
        <a href="#" className={styles.logo}>
          TÂN NGUYÊN
        </a>

        <ul className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a className={navLinkClass} href={href} onClick={(e) => handleNavClick(e, href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Giỏ hàng"
            onClick={() => scrollToSection('#products')}
          >
            <CartIcon className={iconClass} />
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Tài khoản"
            onClick={() => scrollToSection('#contact')}
          >
            <UserIcon className={iconClass} />
          </button>
          <button
            type="button"
            className={`${styles.menuBtn} ${iconClass}`}
            aria-expanded={isOpen}
            aria-label="Mở menu"
            onClick={() => setIsOpen((o) => !o)}
          >
            <HamburgerIcon />
          </button>
        </div>
      </nav>
    </header>
  )
}
