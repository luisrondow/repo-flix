import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useSelectedTechsContext } from '../../hooks/useSelectedTechsContext'
import { TECHS, USER_TOKEN } from '../../utils/constants'
import { User } from '../../utils/user'
import BookmarksList from './components/BookmarksList/BookmarksList'

import RepositoriesList from './components/RepositoriesList'
import TechsFilter from './components/TechsFilter'
import { useNavigate } from 'react-router-dom'

type SelectedTechs = {
  selectedTechs: Array<(typeof TECHS)[number]>
}

const Home = () => {
  const navigate = useNavigate()
  const { selectedTechs } = useSelectedTechsContext() as SelectedTechs
  const { state } = useLocalStorage<User>(USER_TOKEN, {
    uid: '',
    email: '',
    accessToken: '',
    username: '',
  })

  useEffect(() => {
    if (!state.accessToken) {
      navigate('/login')
    }
  }, [navigate, state.accessToken])

  return (
    <div className="h-full min-h-screen w-screen bg-base-light">
      <Header currentPage="home" username={state.username} />
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
