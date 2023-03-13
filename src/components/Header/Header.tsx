import { NavLink } from 'react-router-dom'
import Text from '../Text/Text'
import useAuth from '../../hooks/useAuth'

const Header = (props: { currentPage: string; username: string }) => {
  const { currentPage, username } = props

  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="flex h-24 w-full items-center bg-base px-4 sm:px-16">
      <div className="flex h-full w-6/12 items-center sm:space-x-12">
        <NavLink to="/">
          <Text as="h1">LOGO</Text>
        </NavLink>
        <NavLink to="/">
          <Text
            as="h2"
            className={`${currentPage === 'home' && 'underline'} ml-4 cursor-pointer sm:ml-0`}
          >
            Discovery
          </Text>
        </NavLink>
      </div>
      <div className="flex h-full w-6/12 items-center justify-end space-x-4 sm:space-x-12">
        <NavLink to="/profile">
          <Text as="h2" className={`${currentPage === 'profile' && 'underline'} cursor-pointer`}>
            {username}
          </Text>
        </NavLink>
        <button onClick={handleLogout}>
          <Text as="h2" className="cursor-pointer">
            Logout
          </Text>
        </button>
      </div>
    </header>
  )
}

export default Header
