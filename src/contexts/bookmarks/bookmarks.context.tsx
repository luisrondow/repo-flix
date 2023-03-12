import { createContext, useReducer } from 'react'
import { BOOKMARK_ACTIONS, BookmarksProviderProps, BookmarksValues } from './bookmarks.types'
import BOOKMARKS_INITAL_VALUE, { bookmarksReducer } from './bookmarks.reducer'
import { Repository } from '../../utils/repository'

export const BookmarksContext = createContext<BookmarksValues>({})

export const BookmarksProvider = ({ children }: BookmarksProviderProps) => {
  const [state, dispatch] = useReducer(bookmarksReducer, BOOKMARKS_INITAL_VALUE)

  const addToBookmark = (repository: Repository) => {
    dispatch({ type: BOOKMARK_ACTIONS.ADD_TO_BOOKMARK, payload: repository })
  }

  const removeFromBookmark = (repository: Repository) => {
    dispatch({ type: BOOKMARK_ACTIONS.REMOVE_FROM_BOOKMARK, payload: repository })
  }

  const isInBookmark = (id: string) => {
    return state.bookmarks.some((repository) => repository.id === id)
  }

  const actions = {
    addToBookmark,
    removeFromBookmark,
    isInBookmark,
  }

  return (
    <BookmarksContext.Provider value={{ ...state, actions }}>{children}</BookmarksContext.Provider>
  )
}
