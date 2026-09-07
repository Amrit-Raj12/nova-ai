function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}) {
  const alignment =
    align === 'left'
      ? 'text-left'
      : 'mx-auto text-center'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="section-eyebrow mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-teal">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold leading-[1.05] tracking-[-0.045em] text-ink sm:text-5xl dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-slate sm:text-base dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading