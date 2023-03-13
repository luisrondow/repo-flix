import { useEffect, useState } from 'react'

export default function useLocalStorage<T>(key: string, initialValue: T = {} as T) {
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

  const remove = () => {
    window.localStorage.removeItem(key)
  }

  const clear = () => {
    window.localStorage.clear()
  }

  return { state, setState, remove, clear }
}
