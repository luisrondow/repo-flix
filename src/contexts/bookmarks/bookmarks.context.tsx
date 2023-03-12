import { createContext, useReducer } from 'react'
import { BOOKMARK_ACTIONS, BookmarksProviderProps, BookmarksValues } from './bookmarks.types'
import BOOKMARKS_INITAL_VALUE, { bookmarksReducer } from './bookmarks.reducer'
import { Repository } from '../../utils/repository'
import useLocalStorage from '../../hooks/useLocalStorage'
import { BOOKMARKS_KEY } from '../../utils/constants'

export const BookmarksContext = createContext<BookmarksValues>({})

export const BookmarksProvider = ({ children }: BookmarksProviderProps) => {
  const { state: bookmarks, setState } = useLocalStorage<Repository[]>(
    BOOKMARKS_KEY,
    BOOKMARKS_INITAL_VALUE.bookmarks,
  )

  const [state, dispatch] = useReducer(bookmarksReducer, { bookmarks })

  const addToBookmark = (repository: Repository) => {
    setState([...state.bookmarks, repository])
    dispatch({ type: BOOKMARK_ACTIONS.ADD_TO_BOOKMARK, payload: repository })
  }

  const removeFromBookmark = (repository: Repository) => {
    setState(state.bookmarks.filter((item) => item.id !== repository.id))
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
