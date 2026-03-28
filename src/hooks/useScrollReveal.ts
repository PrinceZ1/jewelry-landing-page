import { useEffect, useRef, type RefObject } from 'react'

/**
 * Returns a ref to attach to any element.
 * Adds class "revealed" when element enters viewport.
 * Use with CSS: opacity: 0; transform: translateY(30px); transition: ...
 * .revealed { opacity: 1; transform: none; }
 */
export function useScrollReveal(): RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('revealed')
            observer.unobserve(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
