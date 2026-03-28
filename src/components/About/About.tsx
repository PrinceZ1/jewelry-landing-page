import type { ReactNode } from 'react'
import styles from './About.module.css'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M5 12.5l5 5L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconQuality({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5L12 15.9 7.5 16.7l.9-5L4.8 8.2l5-.7L12 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function IconTag({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M4 10V4h6l10 10-6 6L4 10z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="7.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

const features: Feature[] = [
  {
    icon: <IconCheck className={styles.featureIconSvg} />,
    title: 'Tin Cậy',
    description: 'Kiểm định minh bạch, cam kết đúng tuổi vàng.',
  },
  {
    icon: <IconQuality className={styles.featureIconSvg} />,
    title: 'Chất Lượng',
    description: 'Nguyên liệu chọn lọc, chế tác tinh xảo từng chi tiết.',
  },
  {
    icon: <IconTag className={styles.featureIconSvg} />,
    title: 'Giá Tốt',
    description: 'Chính sách thu đổi hấp dẫn, giá cạnh tranh nhất.',
  },
]

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1612282573946-1d5a3e7f7e68?auto=format&fit=crop&w=700&q=80"
              alt="Trang sức Tân Nguyên"
              width={700}
              height={875}
              className={styles.image}
              onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80'
              }}
            />
            <div className={styles.badge}>
              <span className={styles.badgeNumber}>30+</span>
              <span className={styles.badgeLabel}>NĂM KINH NGHIỆM</span>
            </div>
          </div>
        </div>
        <div className={styles.textCol}>
          <h2 id="about-heading" className={styles.title}>
            Uy Tín Được Khẳng Định Qua <em>Thập Kỷ</em>
          </h2>
          <p className={styles.paragraph}>
            Với hơn ba thập kỷ đồng hành cùng khách hàng tại Hà Nội, chúng tôi không ngừng hoàn thiện quy trình kiểm định
            và chế tác để mỗi món trang sức đều phản ánh sự trung thực và tinh tế trong từng chi tiết.
          </p>
          <div className={styles.features}>
            {features.map((f) => (
              <div key={f.title} className={styles.feature}>
                <span className={styles.featureIconWrap}>{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
