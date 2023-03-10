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
      return <h1 className={`${className} text-4xl font-bold`}>{children}</h1>
    case 'h2':
      return <h2 className={`${className} text-xl font-bold`}>{children}</h2>
    case 'p':
      return <p className={className}>{children}</p>
    case 'span':
      return <span className={className}>{children}</span>
    default:
      return <p className={className}>{children}</p>
  }
}

export default Text
