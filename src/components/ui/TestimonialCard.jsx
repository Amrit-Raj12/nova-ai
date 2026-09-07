function TestimonialCard({ testimonial }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft dark:border-[#293734] dark:bg-[#17211F] sm:p-10">
      <span className="pointer-events-none absolute -right-2 -top-8 font-serif text-[11rem] leading-none text-teal/10 dark:text-[#5DE1D0]/10">
        “
      </span>
      <div className="flex gap-1 text-amber" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>

      <blockquote className="relative mt-6 max-w-2xl text-xl font-medium leading-8 tracking-[-0.03em] text-ink dark:text-white sm:text-2xl sm:leading-9">
        “{testimonial.quote}”
      </blockquote>

      <div className="mt-8 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-[#E8F4F1] text-sm font-bold text-teal dark:bg-[#123B37] dark:text-[#4CC9BE]">
          {testimonial.initials}
        </div>

        <div>
          <p className="text-sm font-bold text-ink dark:text-white">
            {testimonial.name}
          </p>

          <p className="mt-0.5 text-xs text-slate dark:text-gray-400">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard