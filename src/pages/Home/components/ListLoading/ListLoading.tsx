export const ListLoading = () => {
  return (
    <div className="mt-8 max-w-full animate-pulse pl-4 sm:pl-16">
      <div className="mb-4 h-8 w-80 bg-white dark:bg-gray sm:h-12 sm:w-96"></div>
      <div className="flex flex-row space-x-4 pt-6">
        <div className="h-36 w-72 bg-white dark:bg-gray sm:h-56 sm:w-112"></div>
        <div className="h-36 w-36 bg-white dark:bg-gray sm:h-56 sm:w-112"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default ListLoading
