import { act, render, waitFor, fireEvent } from '@testing-library/react'

import RepositoryCard from './RepositoryCard'

describe('RepositoryCard', () => {
  const props = {
    repository: {
      id: 'id',
      name: 'mock',
      image: 'image://mock',
      url: 'url://mock',
    },
    isBookmarked: false,
    onRepositoryClick: jest.fn(),
  }

  it('should render correctly', () => {
    const { container, getByRole } = render(<RepositoryCard {...props} />)

    expect(getByRole('img')).toHaveAttribute('src', props.repository.image)
    expect(container).toMatchSnapshot()
  })

  it('should call correctly the onRepositoryClick', () => {
    const { getByRole } = render(<RepositoryCard {...props} />)
    const card = getByRole('img')

    card.click()

    expect(props.onRepositoryClick).toHaveBeenCalledWith(props.repository.url)
  })

  it('should render correctly the bookmark button', async () => {
    const { container, queryByTestId, getByTestId } = render(<RepositoryCard {...props} />)

    expect(queryByTestId('bookmark-button')).not.toBeInTheDocument()

    fireEvent.mouseEnter(getByTestId(`repository-card-${props.repository.id}`))

    await waitFor(() => getByTestId('bookmark-button'))

    expect(getByTestId('bookmark-button').closest('button')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should render correctly the bookmark button when isBookmarked is true', async () => {
    const { container, getByTestId } = render(<RepositoryCard {...props} isBookmarked />)

    fireEvent.mouseEnter(getByTestId(`repository-card-${props.repository.id}`))

    await waitFor(() => getByTestId('bookmark-button'))

    expect(getByTestId('bookmark-button').childNodes.item(0)).toHaveClass('fill-yellow')

    expect(container).toMatchSnapshot()
  })

  it('should render correctly the bookmark button when isBookmarked is true and the user clicks on it', async () => {
    const { container, getByTestId } = render(<RepositoryCard {...props} isBookmarked />)

    fireEvent.mouseEnter(getByTestId(`repository-card-${props.repository.id}`))

    await waitFor(() => getByTestId('bookmark-button'))

    const bookmark = getByTestId('bookmark-button')

    expect(bookmark.childNodes.item(0)).toHaveClass('fill-yellow')

    act(() => bookmark.click())

    await waitFor(() => {
      expect(bookmark.childNodes.item(0)).not.toHaveClass('fill-yellow')
    })

    expect(container).toMatchSnapshot()
  })
})
