import { useState } from 'react'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Reveal from '../components/common/Reveal'
import PricingCard from '../components/ui/PricingCard'
import { pricingPlans } from '../data/pricing'

function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const [selectedPlan, setSelectedPlan] = useState(
    pricingPlans.find((plan) => plan.popular)?.name ?? pricingPlans[0]?.name,
  )

  const isAnnual = billing === 'annual'

  return (
    <section
      id="pricing"
      className="border-b border-line bg-white py-20 dark:border-[#293734] dark:bg-[#141d1b] sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Simple pricing"
            title="Plans that grow with your team."
            description="Start small, upgrade when you need more automation and collaboration."
          />
        </Reveal>

        <Reveal className="mt-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-line bg-cream p-1 dark:border-[#293734] dark:bg-[#17211F]">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`rounded-md px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                !isAnnual
                  ? 'bg-white text-ink shadow-sm dark:bg-[#293734] dark:text-white'
                  : 'text-slate hover:text-ink dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBilling('annual')}
              className={`rounded-md px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                isAnnual
                  ? 'bg-white text-ink shadow-sm dark:bg-[#293734] dark:text-white'
                  : 'text-slate hover:text-ink dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              Annual
            </button>
          </div>
        </Reveal>

        <Reveal className="mt-3 text-center">
          <p className="text-xs font-medium text-teal">
            Save 20% with annual billing
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Reveal key={plan.name}>
              <PricingCard
                {...plan}
                price={isAnnual ? plan.annual : plan.monthly}
                selected={selectedPlan === plan.name}
                onSelect={() => setSelectedPlan(plan.name)}
              />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate dark:text-gray-400">
          No credit card required. Cancel or change your plan anytime.
        </p>
      </Container>
    </section>
  )
}

export default Pricing