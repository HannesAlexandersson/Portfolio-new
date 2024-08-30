import { useEffect, useRef } from 'react'

const useClickAway = handler => {
  const ref = useRef()

  useEffect(() => {
    const handleClickOutside = ev => {
      if (ref.current && !ref.current.contains(ev.target)) {
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