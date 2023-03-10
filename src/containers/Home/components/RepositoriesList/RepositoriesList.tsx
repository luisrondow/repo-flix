import Text from '../../../../components/Text'
import RepositoryCard from '../../../../components/RepositoryCard'
import { RepositoriesListProps } from './RepositoriesList.types'

const RepositoriesList = (props: RepositoriesListProps) => {
  const { repositories, loading } = props

  if (loading) {
    return <div>Loading...</div>
  }

  const handleRepositoryClick = (repositoryUrl: string) => {
    window.open(repositoryUrl, '_blank')
  }

  return (
    <>
      <Text as="h1" className="pl-16">
        Top Vue
      </Text>
      <div className="card-container no-scrollbar relative flex h-72 w-full snap-mandatory flex-row flex-nowrap items-center space-x-4 overflow-x-auto overflow-y-hidden py-4 pl-16">
        {repositories.map((repository) => {
          const { id, name, url, image } = repository

          return (
            <RepositoryCard
              key={id}
              type="list"
              repository={{ id, name, image }}
              onRepositoryClick={() => handleRepositoryClick(url)}
            />
          )
        })}
      </div>
    </>
  )
}

export default RepositoriesList
