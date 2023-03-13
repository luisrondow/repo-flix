import { render } from '@testing-library/react'
import ArrowIcon from './ArrowIcon'

describe('ArrowIcon', () => {
  it('should render', () => {
    const { container } = render(<ArrowIcon direction="right" />)

    expect(container).toMatchSnapshot()
  })

  it('should render with direction right', () => {
    const { container } = render(<ArrowIcon direction="left" />)

    expect(container.querySelector('svg')).toHaveClass('rotate-180')
    expect(container).toMatchSnapshot()
  })

  it('should render with direction down', () => {
    const { container } = render(<ArrowIcon direction="down" />)

    expect(container.querySelector('svg')).toHaveClass('rotate-90')
    expect(container).toMatchSnapshot()
  })
})
