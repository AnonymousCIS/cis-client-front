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

  const onEditor = useCallback(() => setForm(true), [])

  const onEditorImage = useCallback(() => setForm(true), [])

  const onChange = useCallback((e) => {
    setForm((data) => ({ ...data, [e.target.name]: e.target.value }))
  }, [])

  const onClick = useCallback((field, value) => {
    setForm((data) => ({ ...data, [field]: value }))
  }, [])
  console.log('data', form)
  return (
    <WriteForm
      form={form}
      onChange={onChange}
      onClick={onClick}
      onEditor={onEditor}
      onEditorImage={onEditorImage}
      actionState={actionState}
    />
  )
}

export default React.memo(WriteContainer)
