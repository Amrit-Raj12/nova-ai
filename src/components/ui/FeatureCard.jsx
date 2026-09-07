function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="group rounded-xl border border-line bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-soft dark:border-[#293734] dark:bg-[#17211F] dark:hover:bg-[#1A2523]">
      <div className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-[#E8F4F1] text-teal dark:bg-[#123B37] dark:text-[#4CC9BE]">
        <Icon
          size={20}
          strokeWidth={1.8}
        />
      </div>

      <h3 className="text-base font-bold text-ink dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate dark:text-gray-400">
        {description}
      </p>
    </article>
  )
}

export default FeatureCard