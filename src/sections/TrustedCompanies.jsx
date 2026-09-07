import Container from '../components/common/Container'

const companies = [
  'Northstar',
  'Fieldnote',
  'Loomwell',
  'Vertex',
  'Daylight',
  'Craftline',
]

function TrustedCompanies() {
  return (
    <section className="border-b border-line bg-white dark:border-[#293734] dark:bg-[#141d1b]">
      <Container>
        <div className="py-8 sm:py-10">
          <p className="text-center text-xs font-medium text-slate dark:text-gray-400">
            Trusted by teams building what comes next
          </p>

          <div className="mt-6 overflow-hidden" aria-label="Trusted companies">
            <div className="marquee-track flex w-max">
              {[0, 1].map((group) => (
                <div
                  key={group}
                  aria-hidden={group === 1}
                  className="flex shrink-0 items-center gap-10 sm:gap-16 lg:gap-24"
                >
                  {companies.map((company) => (
                    <div
                      key={`${group}-${company}`}
                      className="w-24 shrink-0 text-center text-sm font-bold tracking-tight text-[#7A858D] transition hover:text-ink dark:text-gray-400 dark:hover:text-gray-300 sm:w-28"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TrustedCompanies