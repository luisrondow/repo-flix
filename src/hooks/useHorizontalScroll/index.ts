import { useRef, useState } from 'react'

export default function useHorizontalScroll() {
  const listRef = useRef<HTMLDivElement>(null)
  const [isListLeftScrolled, setIsListLeftScrolled] = useState(false)

  const handleScroll = (direction: 'right' | 'left') => {
    const { current } = listRef

    const scrollOffset = direction === 'right' ? 448 : -448

    if (current) {
      current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      })

      if (!isListLeftScrolled && current.scrollLeft + scrollOffset > 0) setIsListLeftScrolled(true)
      else if (isListLeftScrolled && current.scrollLeft + scrollOffset <= 0)
        setIsListLeftScrolled(false)
    }
  }

  return { listRef, isListLeftScrolled, handleScroll }
}
