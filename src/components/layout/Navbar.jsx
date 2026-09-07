import { Menu, X, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { smoothScrollTo } from '../../utils/smoothScroll'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode((current) => !current)
    document.documentElement.classList.toggle('dark')
  }

  const handleSectionClick = (event, href) => {
    event.preventDefault()
    setMenuOpen(false)
    smoothScrollTo(href)
  }

  const links = [
    ['Features', '#features'],
    ['How it works', '#how-it-works'],
    ['Solutions', '#solutions'],
    ['Pricing', '#pricing'],
    ['FAQ', '#faq'],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur dark:border-[#293734] dark:bg-[#101817]/95">
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          onClick={(event) => handleSectionClick(event, '#top')}
          className="flex items-center gap-2"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-sm font-bold text-white dark:bg-teal">
            N
          </span>

          <span className="font-extrabold tracking-tight text-ink dark:text-white">
            NOVA
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={(event) => handleSectionClick(event, href)}
              className="text-sm font-medium text-slate transition hover:text-ink dark:text-gray-400 dark:hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-slate hover:bg-white dark:text-gray-400 dark:hover:bg-[#17211f]"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a
            href="#pricing"
            onClick={(event) => handleSectionClick(event, '#pricing')}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-ink hover:bg-white dark:text-white dark:hover:bg-[#17211f]"
          >
            Sign in
          </a>

          <a
            href="#cta"
            onClick={(event) => handleSectionClick(event, '#cta')}
            className="rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-dark"
          >
            Start free
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-cream px-5 py-4 md:hidden dark:border-[#293734] dark:bg-[#101817]">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={(event) => handleSectionClick(event, href)}
              className="block border-b border-line py-3 text-sm font-medium dark:border-[#293734] dark:text-gray-300"
            >
              {label}
            </a>
          ))}

          <a
            href="#cta"
            onClick={(event) => handleSectionClick(event, '#cta')}
            className="mt-4 block rounded-lg bg-teal px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Start free
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar