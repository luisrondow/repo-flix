export const ListLoading = () => {
  return (
    <div className="mt-8 max-w-full animate-pulse pl-16">
      <div className="mb-4 h-12 w-96 bg-white dark:bg-gray"></div>
      <div className="flex flex-row space-x-4 pt-6">
        <div className="h-56 w-112 bg-white dark:bg-gray"></div>
        <div className="h-56 w-112 bg-white dark:bg-gray"></div>
        <div className="h-56 w-112 bg-white dark:bg-gray"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default ListLoading
