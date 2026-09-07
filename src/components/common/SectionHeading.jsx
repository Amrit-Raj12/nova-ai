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
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-teal">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-6 text-slate sm:text-base dark:text-gray-500">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading