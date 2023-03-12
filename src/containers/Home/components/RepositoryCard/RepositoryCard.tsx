import { useState } from 'react'

import { RepositoryCardProps } from './RepositoryCard.types'
import StarIcon from '../../../../components/Icons/StarIcon'
import { useBookmarksContext } from '../../../../hooks/useBookmarksContext'

const RepositoryCard = (props: RepositoryCardProps) => {
  const { repository, onRepositoryClick, type } = props

  const { id, name, image } = repository

  const isListCard = type === 'list'

  const { actions } = useBookmarksContext()

  const [isBookmarkedState, setIsBookmarkedState] = useState(
    () => actions?.isInBookmark(id) || !isListCard,
  )
  const [isCardHovered, setIsCardHovered] = useState(false)

  const handleBookmarkClick = () => {
    setIsBookmarkedState((prevState) => !prevState)

    if (isBookmarkedState) {
      actions?.removeFromBookmark(repository)
    }

    if (!isBookmarkedState) {
      actions?.addToBookmark(repository)
    }
  }

  return (
    <div
      data-testid={`repository-card-${id}`}
      className={`relative ${
        isListCard ? 'h-56 w-112 basis-112' : 'h-36 w-72 max-w-72 basis-72'
      } flex-shrink-0 flex-grow cursor-pointer snap-center scroll-mx-96 transition-transform hover:z-10 hover:scale-115 hover:shadow-md`}
      onMouseEnter={() => isListCard && setIsCardHovered(true)}
      onMouseLeave={() => isListCard && setIsCardHovered(false)}
    >
      <img src={image} alt={name} className="h-full w-full" onClick={onRepositoryClick} />
      {isCardHovered || !isListCard ? (
        <button
          data-testid="bookmark-button"
          className="absolute top-1 right-1"
          onClick={handleBookmarkClick}
        >
          <StarIcon
            className={`${isListCard ? 'h-8 w-8' : 'h-6 w-6'}`}
            isFilled={(actions ? actions?.isInBookmark(id) : isBookmarkedState) || !isListCard}
          />
        </button>
      ) : null}
    </div>
  )
}

export default RepositoryCard
