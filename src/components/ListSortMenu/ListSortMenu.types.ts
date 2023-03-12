import { SORT_OPTIONS } from '../../utils/constants'

export type ListSortMenuProps = {
  activeSortOption: string
  onSortOptionClick?: (value: (typeof SORT_OPTIONS)[number]['value']) => void
}
