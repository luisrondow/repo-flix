import { RepositoriesListProps } from './RepositoriesList.types'
import useRepositories from '../../../../hooks/useRepositories'

import List from '../../../../components/List/List'
import RepositoryCard from '../RepositoryCard'

const RepositoriesList = (props: RepositoriesListProps) => {
  const { title, techName } = props

  const { repositories, isLoading, isError, error } = useRepositories(techName, 'stars')

  if (isLoading) return <div>Loading...</div>
  if (isError) {
    return <pre>{JSON.stringify(error)}</pre>
  }

  return (
    <List title={title} size="large">
      {repositories?.map((repository) => {
        const { id, url } = repository

        return (
          <RepositoryCard
            key={id}
            type="list"
            repository={repository}
            onRepositoryClick={() => window.open(url, '_blank')}
          />
        )
      })}
    </List>
  )
}

export default RepositoriesList
