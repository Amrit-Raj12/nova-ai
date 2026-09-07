import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Reveal from '../components/common/Reveal'
import TestimonialCard from '../components/ui/TestimonialCard'
import { testimonials } from '../data/testimonials'

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      return undefined
    }

    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const previous = () => {
    setCurrent((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  const next = () => {
    setCurrent((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  return (
    <section className="border-b border-line bg-cream py-20 dark:border-[#293734] dark:bg-[#101817] sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What teams say"
            title="Less busywork. More momentum."
            description="Teams use NOVA to bring clarity to the work that matters most."
          />
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <TestimonialCard testimonial={testimonials[current]} />

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setCurrent(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={current === index ? 'true' : undefined}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      current === index
                        ? 'w-6 bg-teal'
                        : 'w-2 bg-[#CBD5D1] hover:bg-teal/50 dark:bg-[#40504C]'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-ink transition hover:border-teal hover:text-teal dark:border-[#293734] dark:bg-[#17211F] dark:text-white"
                >
                  <ArrowLeft size={17} />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-ink transition hover:border-teal hover:text-teal dark:border-[#293734] dark:bg-[#17211F] dark:text-white"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Testimonials