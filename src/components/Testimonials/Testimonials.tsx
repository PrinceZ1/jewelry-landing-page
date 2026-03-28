import styles from './Testimonials.module.css'

interface Testimonial {
  id: number
  quote: string
  name: string
  tag: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Tôi đã đặt chế tác nhẫn cưới tại Tân Nguyên và cực kỳ hài lòng. Sự tỉ mỉ trong từng đường nét và cách phục vụ rất chuyên nghiệp.',
    name: 'Hương Giang',
    tag: 'KHÁCH HÀNG THÂN THIẾT',
  },
  {
    id: 2,
    quote:
      'Tiệm vàng uy tín nhất khu vực Dương Nội. Giá thu mua vàng luôn rất tốt và dịch vụ làm mới trang sức vô cùng nhanh chóng.',
    name: 'Anh Minh',
    tag: 'DƯƠNG NỘI, HÀ NỘI',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials} aria-labelledby="testimonials-heading">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 id="testimonials-heading" className={styles.titleLine}>
            Chia Sẻ Từ
          </h2>
          <p className={styles.titleAccent}>
            <em>Khách Hàng</em>
          </p>
          <span className={styles.quoteMark} aria-hidden>
            &ldquo;
          </span>
        </div>
        <div className={styles.right}>
          {testimonials.map((t) => (
            <blockquote key={t.id} className={styles.card}>
              <p className={styles.quote}>{t.quote}</p>
              <footer>
                <cite className={styles.name}>{t.name}</cite>
                <p className={styles.tag}>{t.tag}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
