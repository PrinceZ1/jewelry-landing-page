import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Giới thiệu">
      <img
        className={styles.bgImage}
        src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1400"
        alt=""
        width={1400}
        height={933}
        fetchPriority="high"
      />
      <div className={styles.overlay} aria-hidden />
      <div className={styles.content}>
        <p className={styles.label}>CRAFTING EXCELLENCE SINCE 1993</p>
        <h1 className={styles.headline}>
          <span className={styles.line1}>Tinh Hoa Trang Sức –</span>
          <span className={styles.line2}>
            <em>Tôn Vinh Giá Trị</em>
          </span>
        </h1>
        <p className={styles.body}>
          Chuyên mua bán, ký gửi và chế tác trang sức cao cấp. Tân Nguyên mang đến dịch vụ sửa chữa tinh xảo và thiết kế
          theo yêu cầu riêng biệt.
        </p>
        <div className={styles.ctaRow}>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            XEM SẮN PHẨM
          </button>
          <button
            type="button"
            className={styles.btnOutline}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            LIÊN HỆ NGAY
          </button>
        </div>
      </div>
      <p className={styles.sideText} aria-hidden>
        COLLECTION MASTERPIECE
      </p>
    </section>
  )
}
