export type ListProps = {
  title: string
  size: 'medium' | 'large'
  children: React.ReactNode
  showMenu?: boolean
  onMenuClick?: (prevValue: string) => void
}
