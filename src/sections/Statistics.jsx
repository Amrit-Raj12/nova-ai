import Container from '../components/common/Container'
import StatItem from '../components/ui/StatItem'

const statistics = [
  {
    value: 42,
    suffix: '%',
    label: 'less time spent on weekly status updates',
  },
  {
    value: 3,
    suffix: '.2x',
    label: 'faster task handoffs',
  },
  {
    value: 68,
    suffix: '%',
    label: 'of tasks completed on time',
  },
  {
    value: 12,
    suffix: 'k+',
    label: 'teams using the workflow',
  },
]

function Statistics() {
  return (
    <section className="section-atmosphere border-b border-[#293734] bg-[#101820] py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat) => (
            <StatItem
              key={stat.label}
              {...stat}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Statistics