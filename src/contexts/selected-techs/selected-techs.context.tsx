import { createContext, useReducer } from 'react'
import {
  SELECTED_TECHS_ACTIONS,
  SelectedTechsValues,
  SelectedTechsProviderProps,
} from './selected-techs.types'

import SELECTED_TECHS_INITAL_VALUE, { selectedTechsReducer } from './selected-techs.reducer'
import useLocalStorage from '../../hooks/useLocalStorage'
import { SELECTED_TECHS_KEY } from '../../utils/constants'

export const SelectedTechsContext = createContext<SelectedTechsValues>({})

export const SelectedTechsProvider = ({ children }: SelectedTechsProviderProps) => {
  const { state: selectedTechs, setState } = useLocalStorage<string[]>(
    SELECTED_TECHS_KEY,
    SELECTED_TECHS_INITAL_VALUE.selectedTechs,
  )
  const [state, dispatch] = useReducer(selectedTechsReducer, { selectedTechs })

  const addTech = (tech: string) => {
    setState([...state.selectedTechs, tech])
    dispatch({ type: SELECTED_TECHS_ACTIONS.ADD_TECH, payload: tech })
  }

  const removeTech = (tech: string) => {
    setState(state.selectedTechs.filter((item) => item !== tech))
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
