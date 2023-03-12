import * as React from 'react'
import { BookmarksContext } from '../../contexts/bookmarks/bookmarks.context'
import { BookmarksValues } from '../../contexts/bookmarks/bookmarks.types'

export function useBookmarksContext(): BookmarksValues {
  const context = React.useContext(BookmarksContext)

  if (!context) {
    throw new Error('useBookmarks must be within its context')
  }

  return context
}
