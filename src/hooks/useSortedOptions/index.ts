import { useCallback } from 'react'
import { SORTED_OPTIONS_KEY, SORT_OPTIONS, TECHS } from '../../utils/constants'
import useLocalStorage from '../useLocalStorage'
import { SortedOptions } from './types'

export default function useSortedOptions() {
  const { state: sortedOptions, setState: setSortedOptions } = useLocalStorage<SortedOptions>(
    SORTED_OPTIONS_KEY,
    TECHS.map((tech) => ({ tech, sort: SORT_OPTIONS[0].value })),
  )

  const handleChangeSortOption = useCallback(
    (
      tech: (typeof sortedOptions)[number]['tech'],
      sortOption: (typeof sortedOptions)[number]['sort'],
    ) => {
      setSortedOptions((prevSortedOptions) => {
        const newSortedOptions = prevSortedOptions.map((sortedOption) => {
          if (sortedOption.tech === tech) {
            return { tech, sort: sortOption }
          }

          return sortedOption
        })

        return newSortedOptions
      })
    },
    [setSortedOptions],
  )

  return { sortedOptions, handleChangeSortOption }
}
