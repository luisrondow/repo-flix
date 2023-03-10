import Header from '../../components/Header/Header'
import { useSelectedTechsContext } from '../../hooks/useSelectedTechsContext'

import RepositoriesList from './components/RepositoriesList'
import TechsFilter from './components/TechsFilter'

const Home = () => {
  const { selectedTechs } = useSelectedTechsContext()

  return (
    <div className="h-full min-h-screen w-screen bg-base-light">
      <Header />
      <TechsFilter />
      <div className="py-12">
        {selectedTechs?.map((techName) => (
          <RepositoriesList key={techName} title={`Top ${techName}`} techName={techName} />
        ))}
      </div>
    </div>
  )
}

export default Home
