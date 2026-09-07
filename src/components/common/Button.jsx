import { ArrowRight } from 'lucide-react'
import { smoothScrollTo } from '../../utils/smoothScroll'

function Button({
  children,
  href = '#',
  variant = 'primary',
  icon = true,
}) {
  const variants = {
    primary: 'bg-ink text-white hover:bg-teal',
    teal: 'bg-teal text-white hover:bg-teal-dark',
    secondary:
      'border border-line bg-white text-ink hover:border-teal hover:text-teal dark:border-[#293734] dark:bg-[#17211F] dark:text-white',
  }

  const handleClick = (event) => {
    if (!href.startsWith('#')) {
      return
    }

    event.preventDefault()
    smoothScrollTo(href)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 ${variants[variant]}`}
    >
      {children}

      {icon && (
        <ArrowRight
          size={17}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </a>
  )
}

export default Button