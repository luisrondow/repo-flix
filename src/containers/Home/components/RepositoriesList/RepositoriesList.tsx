import Text from '../../../../components/Text'

import RepositoryCard from '../RepositoryCard'
import { RepositoriesListProps } from './RepositoriesList.types'
import ArrowIcon from '../../../../components/Icons/ArrowIcon'
import useRepositories from '../../../../hooks/useRepositories'
import useHorizontalScroll from '../../../../hooks/useHorizontalScroll'

const RepositoriesList = (props: RepositoriesListProps) => {
  const { title, techName } = props

  const { repositories, isLoading, isError, error } = useRepositories(techName, 'stars')
  const { listRef, isListLeftScrolled, handleScroll } = useHorizontalScroll()

  if (isLoading) return <div>Loading...</div>
  if (isError) {
    return <pre>{JSON.stringify(error)}</pre>
  }

  return (
    <div data-testid="repositories-list-container" className="relative">
      <Text as="h1" className="pl-16">
        {title}
      </Text>
      <div
        data-testid="repositories-list"
        ref={listRef}
        className="no-scrollbar relative flex h-72 w-full snap-mandatory flex-row flex-nowrap items-center space-x-4 overflow-x-auto overflow-y-hidden py-4 pl-16 pr-4"
      >
        {repositories?.map((repository) => {
          const { id, name, url, image } = repository

          return (
            <RepositoryCard
              key={id}
              type="list"
              repository={{ id, name, image }}
              onRepositoryClick={() => window.open(url, '_blank')}
            />
          )
        })}
      </div>
      <div className="absolute bottom-0 right-0 z-20 mb-4 flex h-64 w-60 items-center justify-end bg-gradient-to-r from-transparent to-base opacity-0 transition-opacity hover:opacity-100">
        <button onClick={() => handleScroll('right')} className="h-full pl-8 pr-2">
          <ArrowIcon direction="right" />
        </button>
      </div>
      {isListLeftScrolled ? (
        <div className="absolute bottom-0 left-0 z-20 mb-4 flex h-64 w-60 items-center justify-start bg-gradient-to-l from-transparent to-base opacity-0 transition-opacity hover:opacity-100">
          <button onClick={() => handleScroll('left')} className="h-full pr-8 pl-2">
            <ArrowIcon direction="left" />
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default RepositoriesList
