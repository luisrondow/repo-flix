import ChipsButton from '../../../../components/ChipsButton'
import Text from '../../../../components/Text'
import { useSelectedTechsContext } from '../../../../hooks/useSelectedTechsContext'
import { TECHS } from '../../../../utils/constants'

const TechsFilter = () => {
  const { selectedTechs, actions } = useSelectedTechsContext()

  const handleTechClick = (techName: string) => {
    if (selectedTechs?.includes(techName)) {
      actions?.removeTech(techName)
    } else {
      actions?.addTech(techName)
    }
  }

  return (
    <div className="flex w-full flex-col px-16">
      <Text as="h2" className="mb-2">
        Toggle topics to show
      </Text>
      <div className="flex w-full flex-row space-x-4">
        {TECHS.map((techName) => (
          <ChipsButton
            key={techName}
            isSelected={selectedTechs?.includes(techName)}
            onClick={() => handleTechClick(techName)}
          >
            {techName}
          </ChipsButton>
        ))}
      </div>
    </div>
  )
}

export default TechsFilter
