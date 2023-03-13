import { ChipsButtonProps } from './ChipsButton.types'

const ChipsButton = (props: ChipsButtonProps) => {
  const { children, isSelected, onClick } = props

  return (
    <div
      data-testid="chips-button"
      onClick={onClick}
      className={`${
        isSelected ? 'bg-gray-500' : 'bg-white'
      } mb-4 flex cursor-pointer items-center justify-center rounded-full border border-black py-3 px-8 font-medium text-black sm:mb-0`}
    >
      <div className="max-w-full flex-initial text-lg font-bold leading-none">{children}</div>
    </div>
  )
}

export default ChipsButton
