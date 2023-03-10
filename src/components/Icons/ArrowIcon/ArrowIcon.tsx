const ArrowIcon = ({ direction }: { direction: 'right' | 'left' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-12 w-12 stroke-gray-light"
    >
      {direction === 'right' ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      )}
    </svg>
  )
}

export default ArrowIcon
