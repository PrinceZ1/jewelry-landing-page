import type { SyntheticEvent } from 'react'
import { useState } from 'react'
import styles from './Products.module.css'

interface Product {
  id: number
  image: string
  name: string
  material: string
  featured?: boolean
}

const products: Product[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    name: 'Sovereign Ring',
    material: '18K ROSE GOLD / DIAMOND',
    featured: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80',
    name: 'Aurelia Pendant',
    material: 'GOLD / DIAMOND',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80',
    name: 'Modernist Bangle',
    material: '18K ROSE GOLD',
  },
]

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1573408301185-9519f94816b5?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=600&q=80',
]

function handleProductImageError(e: SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget
  const id = Number(img.dataset.productId)
  const fallbackIndex = products.findIndex((p) => p.id === id)
  const fallback = FALLBACK_IMAGES[fallbackIndex] ?? FALLBACK_IMAGES[0]
  if (img.src !== fallback) {
    img.src = fallback
  }
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const featured = products.find((p) => p.featured)
  const regular = products.filter((p) => !p.featured)

  return (
    <section id="products" className={styles.products} aria-labelledby="products-heading">
      <div className={styles.inner}>
        <header className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <p className={styles.label}>SẮN PHẨM NỔI BẬT</p>
            <h2 id="products-heading" className={styles.title}>
              Tuyệt Tác Thiết Kế
            </h2>
          </div>
          <a className={styles.viewAll} href="#products">
            XEM TOÀN BỘ SỰU TẬP
          </a>
        </header>

        <div className={styles.grid}>
          {featured ? (
            <article className={`${styles.card} ${styles.featured}`}>
              <div className={styles.imageWrap}>
                <img
                  src={featured.image}
                  alt={`${featured.name} — nhẫn kim cương nổi bật`}
                  width={800}
                  height={1000}
                  className={styles.featuredImage}
                  data-product-id={featured.id}
                  onError={handleProductImageError}
                />
              </div>
              <button
                type="button"
                className={styles.featuredDetailBtn}
                onClick={() => setSelectedProduct(featured)}
              >
                CHI TIẾT
              </button>
            </article>
          ) : null}
          {regular.map((p) => (
            <article key={p.id} className={styles.card}>
              <div className={`${styles.imageWrap} ${styles.imageWrapRegular}`}>
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.material}`}
                  width={600}
                  height={600}
                  className={styles.productImage}
                  data-product-id={p.id}
                  onError={handleProductImageError}
                />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.material}>{p.material}</p>
                <h3 className={styles.name}>{p.name}</h3>
                <button type="button" className={styles.detailBtn} onClick={() => setSelectedProduct(p)}>
                  CHI TIẾT
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProduct ? (
        <div
          className={styles.modalOverlay}
          role="presentation"
          onClick={() => setSelectedProduct(null)}
        >
          <div className={styles.modalBox} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.modalClose} onClick={() => setSelectedProduct(null)} aria-label="Đóng">
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className={styles.modalImage}
              data-product-id={selectedProduct.id}
              onError={handleProductImageError}
            />
            <div className={styles.modalBody}>
              <p className={styles.modalMaterial}>{selectedProduct.material}</p>
              <h2 className={styles.modalTitle}>{selectedProduct.name}</h2>
              <p className={styles.modalDesc}>
                Liên hệ với chúng tôi để biết thêm chi tiết về sản phẩm, báo giá và đặt hàng theo yêu cầu riêng.
              </p>
              <button
                type="button"
                className={styles.modalCTA}
                onClick={() => {
                  setSelectedProduct(null)
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                LIÊN HỆ ĐẶT HÀNG
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
