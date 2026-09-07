export function smoothScrollTo(target) {
  const element = document.querySelector(target)

  if (!element) {
    return
  }

  const headerOffset = 64
  const startPosition = window.scrollY
  const targetPosition = Math.max(
    element.getBoundingClientRect().top + window.scrollY - headerOffset,
    0,
  )
  const distance = targetPosition - startPosition

  const startTime = performance.now()
  const duration = Math.min(1400, Math.max(700, Math.abs(distance) * 0.8))

  const animateScroll = (currentTime) => {
    const elapsed = Math.min((currentTime - startTime) / duration, 1)
    const easedProgress =
      elapsed < 0.5
        ? 4 * elapsed * elapsed * elapsed
        : 1 - Math.pow(-2 * elapsed + 2, 3) / 2

    window.scrollTo(0, startPosition + distance * easedProgress)

    if (elapsed < 1) {
      window.requestAnimationFrame(animateScroll)
    }
  }

  window.requestAnimationFrame(animateScroll)
}
