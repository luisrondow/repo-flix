import { render } from '@testing-library/react'
import TechsFilter from './TechsFilter'
import { TECHS } from '../../../../utils/constants'

describe('TechsFilter', () => {
  it('should render correctly', () => {
    const { container, getByText, getAllByTestId } = render(<TechsFilter />)

    expect(getByText('Toggle topics to show')).toBeInTheDocument()
    expect(getAllByTestId('chips-button')).toHaveLength(TECHS.length)

    TECHS.forEach((techName) => {
      expect(getByText(techName)).toBeInTheDocument()
    })

    expect(container).toMatchSnapshot()
  })
})
