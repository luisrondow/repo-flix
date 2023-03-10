import Header from './Header'
import { renderWithRouter } from '../../utils/renderWithRouter'

describe('Header', () => {
  it('should render correctly', () => {
    const { container } = renderWithRouter(<Header />)

    expect(container).toHaveTextContent('LOGO')
    expect(container).toHaveTextContent('Discovery')
    expect(container).toHaveTextContent('Username')
    expect(container).toHaveTextContent('Logout')

    expect(container).toMatchSnapshot()
  })

  it('should render correctly the nav links', () => {
    const { container, getByText } = renderWithRouter(<Header />)

    const logo = getByText('LOGO')
    const discovery = getByText('Discovery')
    const username = getByText('Username')

    expect(logo).toBeInTheDocument()
    expect(logo.closest('a')).toHaveAttribute('href', '/')

    expect(discovery).toBeInTheDocument()
    expect(discovery.closest('a')).toHaveAttribute('href', '/')

    expect(username).toBeInTheDocument()
    expect(username.closest('a')).toHaveAttribute('href', '/profile')

    expect(container).toMatchSnapshot()
  })

  it('should render correctly the logout button', () => {
    const { container, getByText } = renderWithRouter(<Header />)

    const logout = getByText('Logout')

    // todo: test the click event when auth is implemented
    expect(logout).toBeInTheDocument()
    expect(logout.closest('button')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
