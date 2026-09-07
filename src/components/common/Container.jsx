function Container({ children, className = '' }) {
  return (
    <div className={`container-page ${className}`}>
      {children}
    </div>
  )
}

export default Container