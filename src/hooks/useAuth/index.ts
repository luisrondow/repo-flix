import { useNavigate } from 'react-router-dom'
import { USER_TOKEN } from '../../utils/constants'
import { User } from '../../utils/user'
import useFirebase from '../useFirebase'
import useLocalStorage from '../useLocalStorage'

export default function useAuth() {
  const navigate = useNavigate()
  const { clear } = useLocalStorage<User>(USER_TOKEN)
  const { logout: firebaseLogout } = useFirebase()

  const logout = () => {
    firebaseLogout()
    clear()
    navigate('/login')
  }

  return {
    logout,
  }
}
