import {
  CheckCircle2,
  ListChecks,
  Sparkles,
} from 'lucide-react'

import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Reveal from '../components/common/Reveal'

const steps = [
  {
    number: '01',
    icon: ListChecks,
    title: 'Plan',
    description:
      'Bring your projects, tasks and priorities into one organized workspace.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Automate',
    description:
      'Let simple workflows handle repetitive follow-ups and routine work.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Move forward',
    description:
      'See what matters and keep everyone aligned around the next step.',
  },
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-line bg-cream py-20 dark:border-[#293734] dark:bg-[#101817] sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="From scattered work to clear progress."
            description="A simple workflow that helps your team spend less time coordinating and more time making progress."
          />
        </Reveal>

        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-9 hidden border-t border-dashed border-[#CBD5D1] md:block dark:border-[#344440]" />

          {steps.map((step) => (
            <Reveal key={step.number}>
              <StepCard {...step} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function StepCard({
  number,
  icon: Icon,
  title,
  description,
}) {
  return (
    <article className="relative rounded-xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-[#293734] dark:bg-[#17211F]">
      <div className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-teal bg-white text-teal dark:border-[#4CC9BE] dark:bg-[#17211F]">
        <Icon size={18} />
      </div>

      <p className="mt-6 text-xs font-bold tracking-widest text-teal">
        {number}
      </p>

      <h3 className="mt-2 text-lg font-bold text-ink dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate dark:text-gray-400">
        {description}
      </p>

    </article>
  )
}

export default HowItWorks