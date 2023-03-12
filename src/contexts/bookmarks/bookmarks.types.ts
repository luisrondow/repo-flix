import { Repository } from '../../utils/repository'
import { Actions, ContextType } from '../context.types'

export type BookmarksState = {
  bookmarks: Repository[]
}

export type BookmarksProviderProps = {
  children: React.ReactNode
}

export type BookmarksActions = {
  addToBookmark: (repository: Repository) => void
  removeFromBookmark: (repository: Repository) => void
  isInBookmark: (id: string) => boolean
}

export type BookmarksValues = ContextType<BookmarksState, BookmarksActions>

export enum BOOKMARK_ACTIONS {
  ADD_TO_BOOKMARK = 'ADD_TO_BOOKMARK',
  REMOVE_FROM_BOOKMARK = 'REMOVE_FROM_BOOKMARK',
  IS_IN_BOOKMARK = 'IS_IN_BOOKMARK',
}

export type BookmarksAction = Actions<BOOKMARK_ACTIONS, Repository>
