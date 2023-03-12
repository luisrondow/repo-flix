import { TECHS } from '../../../../utils/constants'

export type RepositoriesListProps = {
  title: string
  techName: (typeof TECHS)[number]
}
