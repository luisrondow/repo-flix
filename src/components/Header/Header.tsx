import { NavLink } from 'react-router-dom'
import Text from '../Text/Text'

const Header = (props: { currentPage: string }) => {
  const { currentPage } = props

  const handleLogout = () => {
    alert('Logout')
  }

  return (
    <header className="flex h-24 w-full items-center bg-base px-16">
      <div className="flex h-full w-6/12 items-center space-x-12">
        <NavLink to="/">
          <Text as="h1">LOGO</Text>
        </NavLink>
        <NavLink to="/">
          <Text as="h2" className={`${currentPage === 'home' && 'underline'} cursor-pointer`}>
            Discovery
          </Text>
        </NavLink>
      </div>
      <div className="flex h-full w-6/12 items-center justify-end space-x-12">
        <NavLink to="/profile">
          <Text as="h2" className={`${currentPage === 'profile' && 'underline'} cursor-pointer`}>
            Username
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
