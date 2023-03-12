import Text from '../Text'

import ArrowIcon from '../Icons/ArrowIcon'
import useHorizontalScroll from '../../hooks/useHorizontalScroll'
import { ListProps } from './List.types'

const LIST_HEIGHT = {
  listContainer: {
    medium: 'h-56',
    large: 'h-72',
  },
  arrowContainer: {
    medium: 'h-48',
    large: 'h-64',
  },
}

const List = (props: ListProps) => {
  const { size, title, children } = props

  const { listRef, isListLeftScrolled, handleScroll } = useHorizontalScroll()

  return (
    <div data-testid="repositories-list-container" className="relative mt-8">
      <Text as="h1" className="pl-16">
        {title}
      </Text>
      <div
        data-testid="repositories-list"
        ref={listRef}
        className={`${LIST_HEIGHT.listContainer[size]} no-scrollbar relative flex h-56 w-full snap-mandatory flex-row flex-nowrap items-center space-x-4 overflow-x-auto overflow-y-hidden py-4 pl-16 pr-4`}
      >
        {children}
      </div>
      <div
        className={`${LIST_HEIGHT.arrowContainer[size]} absolute bottom-0 right-0 z-20 mb-4 flex w-60 items-center justify-end bg-gradient-to-r from-transparent to-base opacity-0 transition-opacity hover:opacity-100`}
      >
        <button onClick={() => handleScroll('right')} className="h-full pl-8 pr-2">
          <ArrowIcon direction="right" />
        </button>
      </div>
      {isListLeftScrolled ? (
        <div
          className={`${LIST_HEIGHT.arrowContainer[size]} absolute bottom-0 left-0 z-20 mb-4 flex h-48 w-60 items-center justify-start bg-gradient-to-l from-transparent to-base opacity-0 transition-opacity hover:opacity-100`}
        >
          <button onClick={() => handleScroll('left')} className="h-full pr-8 pl-2">
            <ArrowIcon direction="left" />
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default List
