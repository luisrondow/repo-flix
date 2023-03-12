import Header from '../../components/Header/Header'
import { useSelectedTechsContext } from '../../hooks/useSelectedTechsContext'
import { TECHS } from '../../utils/constants'
import BookmarksList from './components/BookmarksList/BookmarksList'

import RepositoriesList from './components/RepositoriesList'
import TechsFilter from './components/TechsFilter'

type SelectedTechs = {
  selectedTechs: Array<(typeof TECHS)[number]>
}

const Home = () => {
  const { selectedTechs } = useSelectedTechsContext() as SelectedTechs

  return (
    <div className="h-full min-h-screen w-screen bg-base-light">
      <Header />
      <BookmarksList />
      <TechsFilter />
      <div className="pb-12">
        {selectedTechs?.map((techName) => (
          <RepositoriesList key={techName} title={`Top ${techName}`} techName={techName} />
        ))}
      </div>
    </div>
  )
}

export default Home
