import { render } from '@testing-library/react'
import Text from './Text'

describe('Text', () => {
  const tags = ['h1', 'h2', 'p', 'span']

  it('should render correctly', () => {
    const { asFragment, getByText } = render(<Text>Hello World</Text>)

    expect(getByText('Hello World')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  tags.forEach((tag) => {
    it(`should render with tag ${tag}`, () => {
      const { asFragment, getByText, container } = render(
        <Text as={tag as 'h1' | 'h2' | 'p' | 'span'}>Hello World</Text>,
      )

      expect(getByText('Hello World')).toBeInTheDocument()
      expect(container.querySelector(tag)).toBeInTheDocument()
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
