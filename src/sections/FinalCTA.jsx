import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Container from '../components/common/Container'
import Reveal from '../components/common/Reveal'

function FinalCTA() {
  return (
    <section className="border-b border-line bg-cream py-20 dark:border-[#293734] dark:bg-[#101817] sm:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-white px-6 py-12 text-center shadow-soft dark:border-[#293734] dark:bg-[#17211F] sm:px-10 sm:py-14">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#E8F4F1] text-teal dark:bg-[#123B37] dark:text-[#61D1C5]">
              <CheckCircle2 size={23} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-teal">
              Ready when you are
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-ink dark:text-white sm:text-5xl">
              Make your team's next week easier.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate dark:text-gray-400 sm:text-base">
              Bring your projects, people and workflows together with NOVA.
              Start for free and see how much simpler work can feel.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal"
              >
                Start for free
                <ArrowRight size={17} />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-teal hover:text-teal dark:border-[#40504C] dark:bg-[#17211F] dark:text-white dark:hover:border-[#61D1C5] dark:hover:text-[#61D1C5]"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default FinalCTA