'use client'
import React, { useState, useCallback, useActionState } from 'react'
import { useSearchParams } from 'next/navigation'
import PasswordForm from '../components/PasswordForm'
import { findProcess } from '../services/actions'

type Props = {
  redirectUrl?: string
}

const FindContainer = ({ redirectUrl }: Props) => {
  const searchParams = useSearchParams()
  const params = { redirectUrl: redirectUrl ?? searchParams.get('redirectUrl') }
  const actionState = useActionState(findProcess, params)
  const [form, setForm] = useState<{ username?: string; phone?: string }>({})

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])
  return (
    <PasswordForm
      actionState={actionState}
      onChange={onChange}
      form={form}
      mode={true}
    />
  )
}

export default React.memo(FindContainer)
