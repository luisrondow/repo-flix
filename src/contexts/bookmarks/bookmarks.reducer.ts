import { BOOKMARK_ACTIONS, BookmarksAction, BookmarksState } from './bookmarks.types'

const INITIAL_STATE: BookmarksState = {
  bookmarks: [],
}

export const bookmarksReducer = (
  state = INITIAL_STATE,
  action: BookmarksAction,
): BookmarksState => {
  switch (action.type) {
    case BOOKMARK_ACTIONS.ADD_TO_BOOKMARK:
      return {
        bookmarks: [...state.bookmarks, action.payload],
      }
    case BOOKMARK_ACTIONS.REMOVE_FROM_BOOKMARK:
      return {
        bookmarks: state.bookmarks.filter((repository) => repository.id !== action.payload.id),
      }
    default:
      return state
  }
}

export default INITIAL_STATE
