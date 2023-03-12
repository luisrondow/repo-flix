import { act, render, waitFor, fireEvent } from '@testing-library/react'

import RepositoryCard from './RepositoryCard'
import { RepositoryCardProps } from './RepositoryCard.types'

// jest.mock('../../../../hooks/useBookmarksContext', () => {
//   return {
//     __esModule: true,
//     default: () => ({
//       bookmarks: [],
//       actions: {
//         addBookmark: jest.fn(),
//         removeBookmark: jest.fn(),
//       },
//     }),
//   }
// })

describe('RepositoryCard', () => {
  const props: RepositoryCardProps = {
    repository: {
      id: 'id',
      name: 'mock',
      image: 'image://mock',
      url: 'url://mock',
    },
    type: 'list',
    onRepositoryClick: jest.fn(),
  }

  it('should render correctly', () => {
    const { container, getByRole } = render(<RepositoryCard {...props} />)

    expect(getByRole('img')).toHaveAttribute('src', props.repository.image)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly when type is bookmark', () => {
    const { container, getByTestId } = render(<RepositoryCard {...props} type="bookmark" />)

    expect(getByTestId('bookmark-button')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should call correctly the onRepositoryClick', () => {
    const { getByRole } = render(<RepositoryCard {...props} />)
    const card = getByRole('img')

    card.click()

    expect(props.onRepositoryClick).toHaveBeenCalled()
  })

  it('should render correctly the bookmark button', async () => {
    const { container, queryByTestId, getByTestId } = render(<RepositoryCard {...props} />)

    expect(queryByTestId('bookmark-button')).not.toBeInTheDocument()

    fireEvent.mouseEnter(getByTestId(`repository-card-${props.repository.id}`))

    await waitFor(() => getByTestId('bookmark-button'))

    expect(getByTestId('bookmark-button').closest('button')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should fire correctly the bookmark button click', async () => {
    const { container, getByTestId } = render(<RepositoryCard {...props} />)

    fireEvent.mouseEnter(getByTestId(`repository-card-${props.repository.id}`))

    await waitFor(() => getByTestId('bookmark-button'))

    const bookmark = getByTestId('bookmark-button')

    expect(bookmark.childNodes.item(0)).not.toHaveClass('fill-yellow')

    act(() => fireEvent.click(bookmark))

    await waitFor(() => {
      expect(bookmark.childNodes.item(0)).toHaveClass('fill-yellow')
    })

    expect(container).toMatchSnapshot()
  })
})
