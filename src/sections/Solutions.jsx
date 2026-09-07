import { Check } from 'lucide-react'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Reveal from '../components/common/Reveal'
import { solutions } from '../data/solutions'

function Solutions() {
  return (
    <section
      id="solutions"
      className="border-b border-line bg-white py-20 dark:border-[#293734] dark:bg-[#141d1b] sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Built for real teams"
            title="A better way to run everyday work."
            description="Whether you are launching a product or managing recurring operations, NOVA gives your team the structure to keep moving."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => {
            const Icon = solution.icon

            return (
              <Reveal key={solution.title} className={`delay-${index * 100}`}>
                <article className="group h-full rounded-xl border border-line bg-cream p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-soft dark:border-[#293734] dark:bg-[#17211F]">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#E8F4F1] text-teal dark:bg-[#123B37] dark:text-[#4CC9BE]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-ink dark:text-white">
                    {solution.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate dark:text-gray-400">
                    {solution.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {solution.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs leading-5 text-slate dark:text-gray-400"
                      >
                        <span className="mt-0.5 text-teal">
                          <Check size={14} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Solutions