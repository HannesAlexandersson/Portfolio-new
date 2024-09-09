import { EventHandler, useEffect, useRef } from 'react'

const useClickAway = (handler: () => void) => {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (ev: MouseEvent) => {
      if (ref.current && !ref.current.contains(ev.target as Node)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handler])

  return ref
}

export default useClickAway