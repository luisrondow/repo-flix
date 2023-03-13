const Button = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`mt-8 h-12 rounded-md bg-white font-semibold transition-all duration-200 hover:bg-gray-light ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
