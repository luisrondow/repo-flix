import { screen } from '@testing-library/react'
import Header from './Header'
import { renderWithRouter } from '../../utils/test'

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
    const { container } = renderWithRouter(<Header />)

    const logo = screen.getByText('LOGO')
    const discovery = screen.getByText('Discovery')
    const username = screen.getByText('Username')

    expect(logo).toBeInTheDocument()
    expect(logo.closest('a')).toHaveAttribute('href', '/')

    expect(discovery).toBeInTheDocument()
    expect(discovery.closest('a')).toHaveAttribute('href', '/')

    expect(username).toBeInTheDocument()
    expect(username.closest('a')).toHaveAttribute('href', '/profile')

    expect(container).toMatchSnapshot()
  })

  it('should render correctly the logout button', () => {
    const { container } = renderWithRouter(<Header />)

    const logout = screen.getByText('Logout')

    // todo: test the click event when auth is implemented
    expect(logout).toBeInTheDocument()
    expect(logout.closest('button')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
