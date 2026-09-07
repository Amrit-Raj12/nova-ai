import useCountUp from '../../hooks/useCountUp'

function StatItem({
  value,
  suffix = '',
  label,
}) {
  const { ref, count } = useCountUp(value)

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">
        {count}
        {suffix}
      </div>

      <p className="mx-auto mt-2 max-w-[180px] text-xs leading-5 text-gray-400">
        {label}
      </p>
    </div>
  )
}

export default StatItem