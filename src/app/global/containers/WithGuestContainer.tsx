'use client'
import useUser from '../hooks/useUser'
import { notFound } from 'next/navigation'

export default function WithGuestContainer(Container: React.ReactNode) {
  const { isLogin } = useUser()

  return isLogin ? notFound() : Container
}
