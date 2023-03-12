import { act, render } from '@testing-library/react'
import List from '../List'

// const repositories = [
//   {
//     id: '10270250',
//     name: 'facebook/react',
//     url: 'https://github.com/facebook/react',
//     image: 'https://opengraph.githubassets.com/123abc/facebook/react',
//   },
//   {
//     id: '126577260',
//     name: 'trekhleb/javascript-algorithms',
//     url: 'https://github.com/trekhleb/javascript-algorithms',
//     image: 'https://opengraph.githubassets.com/123abc/trekhleb/javascript-algorithms',
//   },
//   {
//     id: '2126244',
//     name: 'twbs/bootstrap',
//     url: 'https://github.com/twbs/bootstrap',
//     image: 'https://opengraph.githubassets.com/123abc/twbs/bootstrap',
//   },
//   {
//     id: '6498492',
//     name: 'airbnb/javascript',
//     url: 'https://github.com/airbnb/javascript',
//     image: 'https://opengraph.githubassets.com/123abc/airbnb/javascript',
//   },
//   {
//     id: '29028775',
//     name: 'facebook/react-native',
//     url: 'https://github.com/facebook/react-native',
//     image: 'https://opengraph.githubassets.com/123abc/facebook/react-native',
//   },
// ]

// jest.mock('../../../../../hooks/useRepositories', () => {
//   return {
//     __esModule: true,
//     default: () => ({
//       repositories,
//       isLoading: false,
//       isError: false,
//       error: null,
//     }),
//   }
// })

describe('List', () => {
  it('should render the correctly', () => {
    const { container, getByTestId, getByText, getAllByRole } = render(
      <List size="medium" title="Mock title">
        <div>Mock children</div>
        <div>Mock children</div>
        <div>Mock children</div>
      </List>,
    )

    expect(getByTestId('repositories-list-container')).toBeInTheDocument()
    expect(getByTestId('repositories-list')).toBeInTheDocument()
    expect(getByText('Mock title')).toBeInTheDocument()
    expect(getAllByRole('button')).toHaveLength(1)

    expect(container).toMatchSnapshot()
  })

  it('should scroll the list correctly', () => {
    const { getByTestId, getAllByRole } = render(
      <List size="medium" title="Mock title">
        <div>Mock children</div>
        <div>Mock children</div>
        <div>Mock children</div>
      </List>,
    )

    window.HTMLElement.prototype.scrollBy = jest.fn()

    const list = getByTestId('repositories-list')
    let buttons = getAllByRole('button')

    act(() => buttons[0].click())

    expect(list.scrollBy).toHaveBeenCalledWith({
      left: 448,
      behavior: 'smooth',
    })
    expect(getAllByRole('button')).toHaveLength(2)

    buttons = getAllByRole('button')

    act(() => buttons[1].click())

    expect(list.scrollBy).toHaveBeenCalledWith({
      left: -448,
      behavior: 'smooth',
    })
    expect(getAllByRole('button')).toHaveLength(1)
  })
})
