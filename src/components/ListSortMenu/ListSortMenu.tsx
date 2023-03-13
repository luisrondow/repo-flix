import { SORT_OPTIONS } from '../../utils/constants'
import { ListSortMenuProps } from './ListSortMenu.types'

const ListSortMenu = ({ activeSortOption, onSortOptionClick }: ListSortMenuProps) => {
  const handleSortOptionClick = (value: (typeof SORT_OPTIONS)[number]['value']) => {
    if (value === activeSortOption) return

    onSortOptionClick && onSortOptionClick(value)
  }

  return (
    <div className="absolute right-0 z-30 mr-2 w-64 sm:left-0">
      <li className="list-none bg-white">
        {SORT_OPTIONS.map(({ value, label }) => (
          <ul
            key={value}
            onClick={() => handleSortOptionClick(value)}
            className={`${
              activeSortOption === value && 'underline'
            } cursor-pointer px-2 py-1 font-semibold hover:bg-gray-light`}
          >
            Sort by {label}
          </ul>
        ))}
      </li>
    </div>
  )
}

export default ListSortMenu
