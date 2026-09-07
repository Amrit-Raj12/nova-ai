import { ChevronDown } from 'lucide-react'

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-line last:border-b-0 dark:border-[#293734]">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="text-sm font-semibold text-ink dark:text-white sm:text-base">
          {question}
        </span>

        <span
          className={`shrink-0 text-slate transition-transform duration-200 dark:text-gray-400 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <ChevronDown size={19} />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pr-8 text-sm leading-6 text-slate dark:text-gray-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQItem