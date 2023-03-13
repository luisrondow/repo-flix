import { render } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('should render correctly', () => {
    const { container, getByLabelText } = render(
      <Input label="Mock label" placeholder="Mock placeholder" type="text" error="" />,
    )

    expect(getByLabelText('Mock label')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly when error is not empty', () => {
    const { container, getByText } = render(
      <Input label="Mock label" placeholder="Mock placeholder" type="text" error="Mock error" />,
    )

    expect(getByText('Mock error')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly when type is password', () => {
    const { container, getByLabelText } = render(
      <Input label="Mock label" placeholder="Mock placeholder" type="password" error="" />,
    )

    expect(getByLabelText('Mock label')).toHaveAttribute('type', 'password')
    expect(container).toMatchSnapshot()
  })
})
