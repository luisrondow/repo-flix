import { Repository } from '../../../../utils/repository'

export type RepositoriesListProps = {
  title: string
  repositories: Repository[]
  loading: boolean
}
