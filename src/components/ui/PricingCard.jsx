import { Check } from 'lucide-react'
import Button from '../common/Button'

function PricingCard({
  name,
  description,
  price,
  popular,
  features,
  selected,
  onSelect,
}) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect()
    }
  }

  return (
    <article
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      className={`relative flex h-full cursor-pointer flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 sm:p-7 ${
        selected
          ? 'border-teal bg-[#F2F9F7] shadow-glow ring-2 ring-teal/30 dark:border-[#00A88F] dark:bg-[#162521] dark:ring-[#5DE1D0]/30'
          : 'border-line bg-white opacity-90 hover:opacity-100 dark:border-[#293734] dark:bg-[#17211F]'
      }`}
    >
      {popular && (
        <div className="absolute right-5 top-5 rounded-full bg-teal px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
          Most popular
        </div>
      )}

      <div>
        <h3 className="text-lg font-bold text-ink dark:text-white">
          {name}
        </h3>

        <p className="mt-2 max-w-[250px] text-sm leading-6 text-slate dark:text-gray-400">
          {description}
        </p>
      </div>

      <div className="mt-7 flex items-end gap-1">
        <span className="text-4xl font-extrabold tracking-[-0.04em] text-ink dark:text-white">
          ${price}
        </span>

        <span className="mb-1 text-sm text-slate dark:text-gray-500">
          / month
        </span>
      </div>

      <div className="mt-7">
        <Button
          href="#"
          variant={popular ? 'teal' : 'secondary'}
        >
          Get started
        </Button>
      </div>

      <div className="my-7 h-px bg-line dark:bg-[#293734]" />

      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate dark:text-gray-500">
        Includes
      </p>

      <ul className="mt-4 flex-1 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-slate dark:text-gray-400"
          >
            <span className="mt-0.5 text-teal">
              <Check size={15} />
            </span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default PricingCard