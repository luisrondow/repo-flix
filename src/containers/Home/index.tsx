import Header from '../../components/Header/Header'
import RepositoriesList from './components/RepositoriesList'

import mock from '../../mock.json'
import { Repository } from '../../utils/repository'

const Home = () => {
  const repositories = mock.data.map((repository) => {
    const { id, full_name, html_url } = repository

    const image = `https://opengraph.githubassets.com/123abc/${full_name}`

    return {
      id: id.toString(),
      name: full_name,
      url: html_url,
      image,
    }
  })

  return (
    <div className="h-screen w-screen bg-base-light">
      <Header />
      <div className="py-12">
        <RepositoriesList loading={false} repositories={repositories as Repository[]} />
      </div>
    </div>
  )
}

export default Home
