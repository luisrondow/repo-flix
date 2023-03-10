import { act, render } from '@testing-library/react'
import ChipsButton from './ChipsButton'

describe('ChipsButton', () => {
  const onClick = jest.fn()

  it('should render successfully', () => {
    const { container, getByText } = render(<ChipsButton onClick={onClick}>Test</ChipsButton>)

    const button = getByText('Test')

    expect(button).toBeInTheDocument()

    act(() => button.click())

    expect(onClick).toHaveBeenCalled()
    expect(container).toMatchSnapshot()
  })

  it('should render selected', () => {
    const { container, getByTestId } = render(
      <ChipsButton isSelected onClick={onClick}>
        Test
      </ChipsButton>,
    )

    expect(getByTestId('chips-button')).toHaveClass('bg-gray-500')
    expect(container).toMatchSnapshot()
  })
})
