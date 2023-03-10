export type Repository = {
  id: string
  name: string
  url: string
  image: string
}

export type RepositoryCardProps = {
  type: 'bookmark' | 'list'
  repository: Repository
  isBookmarked?: boolean
  onRepositoryClick: (url: string) => void
}
