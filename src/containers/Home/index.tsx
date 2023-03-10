import Header from '../../components/Header/Header'
import RepositoryCard from '../../components/RepositoryCard'

const Home = () => {
  const handleRepositoryClick = (repositoryUrl: string) => {
    window.open(repositoryUrl, '_blank')
  }

  const mockRepository = {
    id: '123',
    name: 'facebook/react',
    url: 'https://github.com/facebook/react',
    image: 'https://opengraph.githubassets.com/123abc/facebook/react',
  }

  return (
    <div className="h-screen w-screen bg-base-light">
      <Header />
      <div className="py-20 px-16">
        <RepositoryCard repository={mockRepository} onRepositoryClick={handleRepositoryClick} />
      </div>
    </div>
  )
}

export default Home
