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
    setForm((data) => ({ ...data, [e.target.name]: e.target.value }))
  }, [])
  const onEditorChange = useCallback(
    (content) => setForm((data) => ({ ...data, content })),
    [],
  )

  const onEditorImage = useCallback(() => setForm(true), [])

  const onClick = useCallback((field, value) => {
    setForm((data) => ({ ...data, [field]: value }))
  }, [])
  return (
    <WriteForm
      form={form}
      onChange={onChange}
      onClick={onClick}
      onEditor={onEditorChange}
      onEditorImage={onEditorImage}
      actionState={actionState}
    />
  )
}

export default React.memo(WriteContainer)
