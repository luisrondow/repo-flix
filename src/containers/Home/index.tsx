import Header from '../../components/Header/Header'
import RepositoriesList from './components/RepositoriesList'

const TECHS = ['Javascript', 'Typescript']

const Home = () => {
  return (
    <div className="h-full min-h-screen w-screen bg-base-light">
      <Header />
      <div className="py-12">
        {TECHS.map((techName) => (
          <RepositoriesList key={techName} title={`Top ${techName}`} techName={techName} />
        ))}
      </div>
    </div>
  )
}

export default Home
