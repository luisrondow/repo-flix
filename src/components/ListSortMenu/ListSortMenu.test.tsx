import { render } from '@testing-library/react'
import ListSortMenu from './ListSortMenu'
import { SORT_OPTIONS } from '../../utils/constants'

describe('ListSortMenu', () => {
  const mockOnSortOptionClick = jest.fn()

  it('should render correctly', () => {
    const { container, getByText } = render(
      <ListSortMenu
        activeSortOption={SORT_OPTIONS[0].value}
        onSortOptionClick={mockOnSortOptionClick}
      />,
    )

    expect(getByText(`Sort by ${SORT_OPTIONS[0].label}`)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should fire onSortOptionClick correctly', () => {
    const { getByText } = render(
      <ListSortMenu
        activeSortOption={SORT_OPTIONS[0].value}
        onSortOptionClick={mockOnSortOptionClick}
      />,
    )

    getByText(`Sort by ${SORT_OPTIONS[1].label}`).click()

    expect(mockOnSortOptionClick).toHaveBeenCalledTimes(1)
    expect(mockOnSortOptionClick).toHaveBeenCalledWith(SORT_OPTIONS[1].value)
  })
})
