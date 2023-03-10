import { createContext, useReducer } from 'react'
import {
  SELECTED_TECHS_ACTIONS,
  SelectedTechsValues,
  SelectedTechsProviderProps,
} from './selected-techs.types'

import SELECTED_TECHS_INITAL_VALUE, { selectedTechsReducer } from './selected-techs.reducer'

export const SelectedTechsContext = createContext<SelectedTechsValues>({})

export const SelectedTechsProvider = ({ children }: SelectedTechsProviderProps) => {
  const [state, dispatch] = useReducer(selectedTechsReducer, SELECTED_TECHS_INITAL_VALUE)

  const addTech = (tech: string) => {
    dispatch({ type: SELECTED_TECHS_ACTIONS.ADD_TECH, payload: tech })
  }

  const removeTech = (tech: string) => {
    dispatch({ type: SELECTED_TECHS_ACTIONS.REMOVE_TECH, payload: tech })
  }

  const actions = {
    addTech,
    removeTech,
  }

  return (
    <SelectedTechsContext.Provider value={{ ...state, actions }}>
      {children}
    </SelectedTechsContext.Provider>
  )
}
