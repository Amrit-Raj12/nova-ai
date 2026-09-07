import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import FeatureCard from '../components/ui/FeatureCard'
import { features } from '../data/features'

function Features() {
  return (
    <section
      id="features"
      className="section-atmosphere border-b border-line bg-cream py-20 dark:border-[#293734] dark:bg-[#101817] sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything your team needs to keep moving."
          description="Simple tools for planning, collaboration and the work between the lines."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Features