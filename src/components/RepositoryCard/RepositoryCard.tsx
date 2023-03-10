import { useState } from 'react'

import { RepositoryCardProps } from './RepositoryCard.types'
import StarIcon from '../StarIcon'

const RepositoryCard = (props: RepositoryCardProps) => {
  const {
    repository: { id, name, image },
    onRepositoryClick,
    isBookmarked,
    type,
  } = props

  const isListCard = type === 'list'

  const [isBookmarkedState, setIsBookmarkedState] = useState(isBookmarked)
  const [isCardHovered, setIsCardHovered] = useState(false)

  return (
    <div
      data-testid={`repository-card-${id}`}
      className={`card relative ${
        isListCard ? 'h-56 w-112' : 'h-36 w-72'
      } flex-shrink-0 flex-grow basis-112 cursor-pointer snap-center scroll-mx-96 transition-transform hover:z-10 hover:scale-115 hover:shadow-xl`}
      onMouseEnter={() => isListCard && setIsCardHovered(true)}
      onMouseLeave={() => isListCard && setIsCardHovered(false)}
    >
      <img src={image} alt={name} className="h-full w-full" onClick={onRepositoryClick} />
      {isCardHovered || !isListCard ? (
        <button
          data-testid="bookmark-button"
          className="absolute top-1 right-1"
          onClick={() => setIsBookmarkedState((prevState) => !prevState)}
        >
          <StarIcon
            className={`${isListCard ? 'h-8 w-8' : 'h-6 w-6'}`}
            isFilled={isBookmarkedState}
          />
        </button>
      ) : null}
    </div>
  )
}

export default RepositoryCard
