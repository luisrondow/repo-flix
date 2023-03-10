import * as React from 'react'
import { SelectedTechsContext } from '../../contexts/selected-techs/selected-techs.context'
import { SelectedTechsValues } from '../../contexts/selected-techs/selected-techs.types'

export function useSelectedTechsContext(): SelectedTechsValues {
  const context = React.useContext(SelectedTechsContext)

  if (!context) {
    throw new Error('useSelectedTechs must be within its context')
  }

  return context
}
