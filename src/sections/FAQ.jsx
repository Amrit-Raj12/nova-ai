import { useState } from 'react'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Reveal from '../components/common/Reveal'
import FAQItem from '../components/ui/FAQItem'
import { faqs } from '../data/faqs'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section
      id="faq"
      className="border-b border-line bg-cream py-20 dark:border-[#293734] dark:bg-[#101817] sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            description="Everything you need to know before getting started with NOVA."
          />
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl border border-line bg-white px-5 shadow-soft dark:border-[#293734] dark:bg-[#17211F] sm:px-7">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default FAQ