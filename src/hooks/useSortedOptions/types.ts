import { TECHS, SORT_OPTIONS } from '../../utils/constants'

export type SortedOptions = {
  tech: (typeof TECHS)[number]
  sort: (typeof SORT_OPTIONS)[number]['value']
}[]
