import { useEffect, useState } from 'react'

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    if (storedValue) {
      return JSON.parse(storedValue)
    }
    return initialValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return { state, setState }
}
