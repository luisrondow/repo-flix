import { TECHS } from '../../utils/constants'
import {
  SelectedTechsState,
  SelectedTechsAction,
  SELECTED_TECHS_ACTIONS,
} from './selected-techs.types'

const INITIAL_STATE: SelectedTechsState = {
  selectedTechs: [...TECHS.slice(0, 2)] as string[],
}

export const selectedTechsReducer = (
  state = INITIAL_STATE,
  action: SelectedTechsAction,
): SelectedTechsState => {
  switch (action.type) {
    case SELECTED_TECHS_ACTIONS.ADD_TECH: {
      if (state.selectedTechs.includes(action.payload)) return state

      return {
        selectedTechs: [...state.selectedTechs, action.payload],
      }
    }
    case SELECTED_TECHS_ACTIONS.REMOVE_TECH:
      return {
        selectedTechs: state.selectedTechs.filter((tech) => tech !== action.payload),
      }
    default:
      return state
  }
}

export default INITIAL_STATE
