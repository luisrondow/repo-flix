import { useBookmarksContext } from '../../../../hooks/useBookmarksContext'

import List from '../../../../components/List'
import Text from '../../../../components/Text'
import RepositoryCard from '../RepositoryCard'

const BookmarksList = () => {
  const { bookmarks } = useBookmarksContext()

  return (
    <List title="My bookmarks" size="medium">
      {bookmarks?.map((repository) => {
        const { id, url } = repository

        return (
          <RepositoryCard
            key={id}
            type="bookmark"
            repository={repository}
            onRepositoryClick={() => window.open(url, '_blank')}
          />
        )
      })}
      {bookmarks?.length === 0 && <Text as="h2">You don&apos;t have any bookmarks yet...</Text>}
    </List>
  )
}

export default BookmarksList
