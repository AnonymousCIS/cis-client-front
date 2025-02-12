'use client'
import { useContext, useEffect } from 'react'
import CommonContext from '../contexts/CommonContext'

export default function useMainTitle(title) {
  const {
    actions: { setTitle },
  } = useContext(CommonContext)
  useEffect(() => {
    if (title) {
      setTitle(title)
    }
  })

  return [title, setTitle]
}
