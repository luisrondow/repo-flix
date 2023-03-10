import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import App from './App'
import { renderWithRouter } from './utils/test'

it('renders hello message', () => {
  renderWithRouter(<App />)

  expect(screen.findByRole('button')).toBeInTheDocument()
})
