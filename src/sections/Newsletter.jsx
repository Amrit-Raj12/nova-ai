import { useState } from 'react'
import { ArrowRight, Check, Mail } from 'lucide-react'
import Container from '../components/common/Container'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email.trim())) {
      setStatus('error')
      return
    }

    setStatus('success')
    setEmail('')
  }

  return (
    <section className="border-b border-line bg-cream pb-16 pt-16 dark:border-[#293734] dark:bg-[#101817]">
      <Container>
        <div className="group rounded-[22px] border border-teal/15 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-[#293734] dark:bg-[#17211F] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-teal dark:text-[#61D1C5]">
                <Mail size={17} />

                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  Stay in the loop
                </span>
              </div>

              <h3 className="mt-3 text-xl font-bold text-ink dark:text-white">
                Get practical productivity tips.
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-slate dark:text-gray-400">
                One useful email every few weeks. No spam, no unnecessary
                noise.
              </p>
            </div>

            <div className="w-full lg:w-[390px]">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-2 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>

                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    setStatus('idle')
                  }}
                  placeholder="you@example.com"
                  aria-invalid={status === 'error'}
                  aria-describedby="newsletter-message"
                  className={`min-w-0 flex-1 rounded-lg border bg-cream px-4 py-3 text-sm text-ink outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-teal dark:bg-[#101817] dark:text-white dark:placeholder:text-gray-500 ${
                    status === 'error'
                      ? 'border-red-400'
                      : 'border-line dark:border-[#40504C]'
                  }`}
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-teal-dark hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>

              <div
                id="newsletter-message"
                aria-live="polite"
                className="mt-2 min-h-5 text-xs"
              >
                {status === 'error' && (
                  <p className="text-red-500 dark:text-red-300">
                    Please enter a valid email address.
                  </p>
                )}

                {status === 'success' && (
                  <p className="flex items-center gap-1 text-teal dark:text-[#61D1C5]">
                    <Check size={13} />
                    You're subscribed. Thanks!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Newsletter