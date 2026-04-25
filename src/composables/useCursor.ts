import { onMounted, onUnmounted, nextTick } from 'vue'

export function useCursor() {
  let mx = 0, my = 0, rx = 0, ry = 0
  let rafId: number
  let cursorEl: HTMLElement | null = null
  let ringEl: HTMLElement | null = null

  function onMouseMove(e: MouseEvent) {
    mx = e.clientX
    my = e.clientY
    if (cursorEl) {
      cursorEl.style.left = mx - 6 + 'px'
      cursorEl.style.top = my - 6 + 'px'
    }
  }

  function animateRing() {
    rx += (mx - rx) * 0.12
    ry += (my - ry) * 0.12
    if (ringEl) {
      ringEl.style.left = rx - 18 + 'px'
      ringEl.style.top = ry - 18 + 'px'
    }
    rafId = requestAnimationFrame(animateRing)
  }

  function attachHoverListeners() {
    document.querySelectorAll<HTMLElement>('a, button, .project-card').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (!cursorEl || !ringEl) return
        cursorEl.style.transform = 'scale(2.5)'
        ringEl.style.transform = 'scale(1.5)'
        ringEl.style.opacity = '0.3'
      })
      el.addEventListener('mouseleave', () => {
        if (!cursorEl || !ringEl) return
        cursorEl.style.transform = 'scale(1)'
        ringEl.style.transform = 'scale(1)'
        ringEl.style.opacity = '0.6'
      })
    })
  }

  // Define the initialization logic separately
  const setupCursor = async () => {
    // Wait for Vue to render the #cursor divs (since they are behind a v-if)
    await nextTick()
    
    cursorEl = document.getElementById('cursor')
    ringEl = document.getElementById('cursor-ring')
    
    document.addEventListener('mousemove', onMouseMove)
    animateRing()
    setTimeout(attachHoverListeners, 300)
  }

  // These hooks are now called immediately when useCursor() is invoked in setup
  onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove)
    cancelAnimationFrame(rafId)
  })

  return { setupCursor }
}