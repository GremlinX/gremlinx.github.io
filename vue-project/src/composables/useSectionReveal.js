import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSectionReveal(sectionRef, selector = '[data-reveal]') {
  let ctx

  onMounted(() => {
    if (!sectionRef.value) return

    ctx = gsap.context(() => {
      gsap.from(selector, {
        y: 48,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 78%'
        }
      })
    }, sectionRef.value)
  })

  onBeforeUnmount(() => {
    ctx?.revert()
  })
}
