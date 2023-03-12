import { SORT_OPTIONS } from '../../utils/constants'

export type ListProps = {
  title: string
  size: 'medium' | 'large'
  children: React.ReactNode
  showMenu?: boolean
  sortOption?: string
  onMenuClick?: (value: (typeof SORT_OPTIONS)[number]['value']) => void
}
