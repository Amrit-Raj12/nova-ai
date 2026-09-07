import { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    if (!element || started) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.4,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) {
      return
    }

    const startTime = performance.now()

    const update = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setCount(Math.round(target * easedProgress))

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }, [started, target, duration])

  return {
    ref,
    count,
  }
}

export default useCountUp