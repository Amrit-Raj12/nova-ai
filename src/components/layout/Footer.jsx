import { useEffect, useState } from 'react'
import { ArrowUp, ArrowRight } from 'lucide-react'
import Container from '../common/Container'
import { smoothScrollTo } from '../../utils/smoothScroll'

const footerLinks = {
  Product: [
    ['Features', '#features'],
    ['How it works', '#how-it-works'],
    ['Solutions', '#solutions'],
    ['Pricing', '#pricing'],
  ],
  Company: [
    ['About', '#'],
    ['Careers', '#'],
    ['Contact', '#'],
    ['Blog', '#'],
  ],
  Resources: [
    ['Help center', '#'],
    ['Documentation', '#'],
    ['Community', '#'],
    ['Status', '#'],
  ],
}

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    smoothScrollTo('#top')
  }

  return (
    <footer className="bg-white dark:bg-[#101817]">
      <Container>
        <div className="grid gap-10 border-b border-line py-12 dark:border-[#293734] md:grid-cols-[1.5fr_repeat(3,1fr)] lg:py-14">
          <div className="max-w-sm">
            <a
              href="#"
              className="inline-flex items-center gap-2"
              aria-label="NOVA home"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal text-sm font-extrabold text-white">
                N
              </span>

              <span className="text-lg font-extrabold tracking-[-0.03em] text-ink dark:text-white">
                NOVA
              </span>
            </a>

            <p className="mt-4 text-sm leading-6 text-slate dark:text-gray-400">
              A simpler workspace for teams that want to build better, work
              smarter, and spend less time managing work.
            </p>

            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-teal-dark"
            >
              Get started
              <ArrowRight size={15} />
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-bold text-ink dark:text-white">
                {title}
              </h3>

              <ul className="mt-4 space-y-3">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-slate transition hover:text-teal dark:text-gray-500 dark:hover:text-[#61D1C5]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate dark:text-gray-500">
            © 2026 NOVA. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-slate transition hover:text-teal dark:text-gray-500 dark:hover:text-[#61D1C5]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-xs text-slate transition hover:text-teal dark:text-gray-500 dark:hover:text-[#61D1C5]"
            >
              Terms
            </a>

          </div>
        </div>
      </Container>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-teal bg-teal text-white shadow-soft transition-all duration-300 hover:bg-teal-dark focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 dark:border-[#61D1C5] dark:bg-[#0F766E] dark:hover:bg-[#115E59] ${
          showBackToTop
            ? 'translate-y-0 opacity-100 animate-bounce'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  )
}

export default Footer