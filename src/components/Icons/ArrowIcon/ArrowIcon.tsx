const ArrowIcon = ({ direction }: { direction: 'right' | 'left' | 'down' }) => {
  const rotate = direction === 'left' ? 'rotate-180' : direction === 'down' ? 'rotate-90' : ''

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${rotate} h-12 w-12 stroke-gray-light`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

export default ArrowIcon
