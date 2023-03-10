import { useState } from 'react'

import { RepositoryCardProps } from './RepositoryCard.types'
import StarIcon from '../StarIcon'

const RepositoryCard = (props: RepositoryCardProps) => {
  const {
    repository: { id, name, image, url },
    onRepositoryClick,
    isBookmarked,
  } = props

  const [isBookmarkedState, setIsBookmarkedState] = useState(isBookmarked)
  const [isCardHovered, setIsCardHovered] = useState(false)

  return (
    <div
      data-testid={`repository-card-${id}`}
      className="relative h-48 w-96 cursor-pointer transition-transform hover:scale-125"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <img
        src={image}
        alt={name}
        className="h-full w-full"
        onClick={() => onRepositoryClick(url)}
      />
      {isCardHovered ? (
        <button
          data-testid="bookmark-button"
          className="absolute top-1 right-1"
          onClick={() => setIsBookmarkedState((prevState) => !prevState)}
        >
          <StarIcon isFilled={isBookmarkedState} />
        </button>
      ) : null}
    </div>
  )
}

export default RepositoryCard
