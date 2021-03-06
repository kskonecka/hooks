import { useState, useEffect } from 'react'
import json2mq, { QueryObject } from 'json2mq'

export default function useMedia(
  query: string | QueryObject,
  defaultMatches = true,
) {
  const [matches, setMatches] = useState(defaultMatches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      typeof query === 'string' ? query : json2mq(query),
    )

    setMatches(mediaQuery.matches)

    const listener = () => setMatches(mediaQuery.matches)
    mediaQuery.addListener(listener)

    return () => {
      mediaQuery.removeListener(listener)
    }
  }, [query])

  return matches
}
