type TextProps = {
  as?: 'h1' | 'h2' | 'p' | 'span'
  children: React.ReactNode
  className?: string
}

const Text = (props: TextProps) => {
  const { children, as, className: customClassName } = props

  const className = `${customClassName ?? ''} text-[#e0def4] font-roboto`

  switch (as) {
    case 'h1':
      return <h1 className={`${className} text-2xl font-bold sm:text-4xl`}>{children}</h1>
    case 'h2':
      return <h2 className={`${className} font-bold sm:text-xl`}>{children}</h2>
    case 'p':
      return <p className={className}>{children}</p>
    case 'span':
      return <span className={className}>{children}</span>
    default:
      return <p className={className}>{children}</p>
  }
}

export default Text
