import Text from '../Text'

import ArrowIcon from '../Icons/ArrowIcon'
import useHorizontalScroll from '../../hooks/useHorizontalScroll'
import { ListProps } from './List.types'
import ListSortMenu from '../ListSortMenu'
import { useState } from 'react'
import { SORT_OPTIONS } from '../../utils/constants'

const LIST_HEIGHT = {
  listContainer: {
    medium: 'h-48 sm:h-56',
    large: 'h-56 sm:h-72',
  },
  arrowContainer: {
    medium: 'h-48',
    large: 'h-64',
  },
}

const List = (props: ListProps) => {
  const { size, title, showMenu, children, onMenuClick, sortOption } = props

  const { listRef, isListLeftScrolled, handleScroll } = useHorizontalScroll()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOnSortOptionClick = (value: (typeof SORT_OPTIONS)[number]['value']) => {
    onMenuClick && onMenuClick(value)
    setIsMenuOpen(false)
  }

  return (
    <div data-testid="repositories-list-container" className="relative mt-8">
      <div className="flex flex-row">
        <Text as="h1" className="mr-4 pl-4 sm:pl-16">
          {title}
          {sortOption ? ` - sorted by ${sortOption}` : ''}
        </Text>
        <div className="relative">
          {showMenu ? (
            <button onClick={() => setIsMenuOpen((prevState) => !prevState)}>
              <ArrowIcon direction="down" />
            </button>
          ) : null}
          {isMenuOpen ? (
            <ListSortMenu
              activeSortOption={sortOption ?? ''}
              onSortOptionClick={handleOnSortOptionClick}
            />
          ) : null}
        </div>
      </div>

      <div
        data-testid="repositories-list"
        ref={listRef}
        className={`${LIST_HEIGHT.listContainer[size]} no-scrollbar relative flex w-full snap-mandatory flex-row flex-nowrap items-center space-x-4 overflow-x-auto overflow-y-hidden py-4 pl-4 pr-4 sm:pl-16`}
      >
        {children}
      </div>
      <div
        className={`${LIST_HEIGHT.arrowContainer[size]} absolute bottom-0 right-0 z-20 mb-4 hidden w-60 items-center justify-end bg-gradient-to-r from-transparent to-base opacity-0 transition-opacity hover:opacity-100 sm:flex`}
      >
        <button onClick={() => handleScroll('right')} className="h-full pl-8 pr-2">
          <ArrowIcon direction="right" />
        </button>
      </div>
      {isListLeftScrolled ? (
        <div
          className={`${LIST_HEIGHT.arrowContainer[size]} absolute bottom-0 left-0 z-20 mb-4 hidden h-48 w-60 items-center justify-start bg-gradient-to-l from-transparent to-base opacity-0 transition-opacity hover:opacity-100 sm:flex`}
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
