// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function smoothScrollWithBounce(elementId: string, offset = 0, enableBounce = true) {
  const element = document.querySelector(elementId)
  if (!element) return

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition

  let startTime: number | null = null

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime

    // Fast, smooth duration without bounce
    const baseDuration = 350
    const distanceFactor = Math.min(Math.abs(distance) * 0.3, 200)
    const duration = baseDuration + distanceFactor

    if (timeElapsed < duration) {
      const progress = timeElapsed / duration

      // Simple smooth ease-in-out
      const easedProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2

      const currentPosition = startPosition + distance * easedProgress
      window.scrollTo(0, currentPosition)
      requestAnimationFrame(animation)
    } else {
      window.scrollTo(0, targetPosition)
    }
  }

  requestAnimationFrame(animation)
}

// Simple smooth scroll - same as bounce version now
export function smoothScrollSimple(elementId: string, offset = 0) {
  smoothScrollWithBounce(elementId, offset, false)
}
