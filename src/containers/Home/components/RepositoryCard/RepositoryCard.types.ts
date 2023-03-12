export type RepositoryCardProps = {
  type: 'bookmark' | 'list'
  repository: {
    id: string
    name: string
    image: string
    url: string
  }
  onRepositoryClick: () => void
}
