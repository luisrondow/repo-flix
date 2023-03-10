import { act, render } from '@testing-library/react'
import RepositoriesList from '../RepositoriesList'

const repositories = [
  {
    id: '10270250',
    name: 'facebook/react',
    url: 'https://github.com/facebook/react',
    image: 'https://opengraph.githubassets.com/123abc/facebook/react',
  },
  {
    id: '126577260',
    name: 'trekhleb/javascript-algorithms',
    url: 'https://github.com/trekhleb/javascript-algorithms',
    image: 'https://opengraph.githubassets.com/123abc/trekhleb/javascript-algorithms',
  },
  {
    id: '2126244',
    name: 'twbs/bootstrap',
    url: 'https://github.com/twbs/bootstrap',
    image: 'https://opengraph.githubassets.com/123abc/twbs/bootstrap',
  },
  {
    id: '6498492',
    name: 'airbnb/javascript',
    url: 'https://github.com/airbnb/javascript',
    image: 'https://opengraph.githubassets.com/123abc/airbnb/javascript',
  },
  {
    id: '29028775',
    name: 'facebook/react-native',
    url: 'https://github.com/facebook/react-native',
    image: 'https://opengraph.githubassets.com/123abc/facebook/react-native',
  },
]

describe('RepositoriesList', () => {
  it('should render the correctly', () => {
    const { container, getByTestId, getByText, getAllByRole } = render(
      <RepositoriesList title="Mock title" repositories={repositories} loading={false} />,
    )

    const ids = repositories.map((repository) => repository.id)

    expect(getByTestId('repositories-list-container')).toBeInTheDocument()
    expect(getByTestId('repositories-list')).toBeInTheDocument()
    expect(getByText('Mock title')).toBeInTheDocument()
    expect(getAllByRole('button')).toHaveLength(1)

    ids.forEach((id) => {
      expect(getByTestId(`repository-card-${id}`)).toBeInTheDocument()
    })

    expect(container).toMatchSnapshot()
  })

  it('should render the loading state correctly', () => {
    const { container, getByText } = render(
      <RepositoriesList title="Mock title" repositories={[]} loading />,
    )

    expect(getByText('Loading...')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should scroll the list correctly', () => {
    const { getByTestId, getAllByRole } = render(
      <RepositoriesList title="Mock title" repositories={repositories} loading={false} />,
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
