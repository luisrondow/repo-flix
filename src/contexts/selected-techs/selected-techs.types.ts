import { Actions, ContextType } from '../context.types'

export type SelectedTechsState = {
  selectedTechs: string[]
}

export type SelectedTechsProviderProps = {
  children: React.ReactNode
}

export type SelectedTechsActions = {
  addTech: (tech: string) => void
  removeTech: (tech: string) => void
}

export type SelectedTechsValues = ContextType<SelectedTechsState, SelectedTechsActions>

export enum SELECTED_TECHS_ACTIONS {
  ADD_TECH = 'ADD_TECH',
  REMOVE_TECH = 'REMOVE_TECH',
}

export type SelectedTechsAction = Actions<SELECTED_TECHS_ACTIONS, string>
