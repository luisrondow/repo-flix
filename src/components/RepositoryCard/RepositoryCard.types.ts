export type Repository = {
  id: string
  name: string
  url: string
  image: string
}

export type RepositoryCardProps = {
  size?: 'small' | 'large'
  repository: Repository
  isBookmarked?: boolean
  onRepositoryClick: (url: string) => void
}
