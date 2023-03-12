import { render } from '@testing-library/react'
import ArrowIcon from './ArrowIcon'

describe('ArrowIcon', () => {
  it('should render', () => {
    const { container } = render(<ArrowIcon direction="left" />)

    expect(container).toMatchSnapshot()
  })

  it('should render with direction right', () => {
    const { container, getByRole } = render(<ArrowIcon direction="right" />)

    expect(getByRole('svg')).toHaveClass('rotate-180')
    expect(container).toMatchSnapshot()
  })

  it('should render with direction down', () => {
    const { container, getByRole } = render(<ArrowIcon direction="down" />)

    expect(getByRole('90')).toHaveClass('rotate-180')
    expect(container).toMatchSnapshot()
  })
})
