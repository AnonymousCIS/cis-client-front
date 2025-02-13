'use client'
import React, { useState, useCallback, useActionState } from 'react'
import { writeMessage } from '../services/actions'
import WriteForm from '../components/WriteForm'
import { useSearchParams } from 'next/navigation'

const WriteContainer = () => {
  const [form, setForm] = useState({})

  const searchParams = useSearchParams()
  const params = { redirectUrl: searchParams.get('redirectUrl') }
  const actionState = useActionState(writeMessage, params)

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])

  const onClick = useCallback((field, value) => {
    setForm((form) => ({ ...form, [field]: value }))
  }, [])

  return (
    <WriteForm
      form={form}
      onChange={onChange}
      onClick={onClick}
      actionState={actionState}
    />
  )
}

export default React.memo(WriteContainer)
