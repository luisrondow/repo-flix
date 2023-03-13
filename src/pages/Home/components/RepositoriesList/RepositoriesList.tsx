import { RepositoriesListProps } from './RepositoriesList.types'
import useRepositories from '../../../../hooks/useRepositories'

import List from '../../../../components/List/List'
import RepositoryCard from '../RepositoryCard'
import useSortedOptions from '../../../../hooks/useSortedOptions'
import ListLoading from '../ListLoading'

const RepositoriesList = (props: RepositoriesListProps) => {
  const { title, techName } = props

  const { sortedOptions, handleChangeSortOption } = useSortedOptions()

  const sortOption = sortedOptions.find((option) => option.tech === techName)?.sort ?? 'stars'

  const { repositories, isLoading, isError, error } = useRepositories(techName, sortOption)

  if (isLoading) return <ListLoading />
  if (isError) {
    return <pre>{JSON.stringify(error)}</pre>
  }

  return (
    <List
      showMenu
      title={title}
      size="large"
      sortOption={sortOption}
      onMenuClick={(value) => handleChangeSortOption(techName, value)}
    >
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
