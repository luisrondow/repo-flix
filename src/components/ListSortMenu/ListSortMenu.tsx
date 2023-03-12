import { SORT_OPTIONS } from '../../utils/constants'
import { ListSortMenuProps } from './ListSortMenu.types'

const ListSortMenu = ({ onSortOptionClick }: ListSortMenuProps) => {
  const handleSortOptionClick = (value: string) => {
    onSortOptionClick && onSortOptionClick(value)
  }

  return (
    <div className="absolute z-30 w-64">
      <li className="list-none bg-white">
        {SORT_OPTIONS.map(({ value, label }) => (
          <ul
            key={value}
            onClick={() => handleSortOptionClick(value)}
            className="cursor-pointer px-2 py-1 font-semibold hover:bg-gray-light"
          >
            Sort by {label}
          </ul>
        ))}
      </li>
    </div>
  )
}

export default ListSortMenu
