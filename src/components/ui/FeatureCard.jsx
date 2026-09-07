function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-lift dark:border-[#293734] dark:bg-[#17211F] dark:hover:border-[#00A88F]/50 dark:hover:bg-[#1A2523]">
      <div className="mb-6 grid h-11 w-11 place-items-center rounded-xl bg-[#E8F4F1] text-teal transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 dark:bg-[#123B37] dark:text-[#5DE1D0]">
        <Icon
          size={20}
          strokeWidth={1.8}
        />
      </div>

      <h3 className="text-base font-bold tracking-[-0.02em] text-ink dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate dark:text-gray-400">
        {description}
      </p>
    </article>
  )
}

export default FeatureCard