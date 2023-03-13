export const TECHS = ['Typescript', 'Javascript', 'Vue', 'Go', 'CSS', 'Node'] as const

export const SORT_OPTIONS = [
  { value: 'stars', label: 'stars' },
  { value: 'forks', label: 'forks' },
  { value: 'updated', label: 'updated' },
  { value: 'help-wanted-issues', label: 'help wanted issues' },
] as const

export const FORM_ERRORS = [
  { value: 'required', label: 'This field is required' },
  { value: 'pattern', label: 'Invalid format' },
]

export const BOOKMARKS_KEY = 'repoflix:bookmarks' as const
export const SELECTED_TECHS_KEY = 'repoflix:selected-techs' as const
export const SORTED_OPTIONS_KEY = 'repoflix:sorted-options' as const
export const USER_TOKEN = 'repoflix:user-token' as const
