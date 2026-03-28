import type { ReactElement } from 'react'
import styles from './Services.module.css'

interface Service {
  id: number
  icon: ReactElement
  title: string
  description: string
}

const TradeIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M7 12a5 5 0 0 1 9.3-2M17 12a5 5 0 0 1-9.3 2"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path d="M15 7.5 17 6l1 2.5M9 16.5 7 18l-1-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path
      d="M12 9.2v5.6M10.6 10.4h2.2a.9.9 0 0 1 0 1.8h-1.8a.9.9 0 0 0 0 1.8h2.4"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const WrenchIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M14.7 6.3a4 4 0 0 1 0 5.7l-3.4 3.4a4 4 0 1 1-5.7-5.7l1.4-1.4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="m8 8 8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const ScissorsIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="7" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M9.5 9.5 20 4M9.5 14.5 20 20"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
)

const services: Service[] = [
  {
    id: 1,
    icon: TradeIcon,
    title: 'Mua Bán Vàng Bạc',
    description:
      'Dịch vụ mua bán, ký gửi vàng bạc, trang sức với tỷ giá cập nhật và quy trình nhanh chóng.',
  },
  {
    id: 2,
    icon: WrenchIcon,
    title: 'Sửa Chữa Trang Sức',
    description:
      'Làm mới, xi ma, gắn đá và khắc chữ bằng công nghệ hiện đại, đảm bảo tính thẩm mỹ tuyệt đối.',
  },
  {
    id: 3,
    icon: ScissorsIcon,
    title: 'Chế Tác Theo Yêu Cầu',
    description:
      'Hiện thực hóa ý tưởng của bạn thành những món trang sức độc bản, mang dấu ấn cá nhân duy nhất.',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services} aria-labelledby="services-heading">
      <div className={styles.inner}>
        <p className={styles.label}>DỊCH VỤ CỦA CHÚNG TÔI</p>
        <h2 id="services-heading" className={styles.title}>
          Chuyên Nghiệp & <em>Tận Tâm</em>
        </h2>
        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.id} className={styles.card}>
              <div className={styles.iconWrap}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
              <a
                className={styles.cardLink}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                TÌM HIỂU THÊM
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
