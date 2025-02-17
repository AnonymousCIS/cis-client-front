'use client'
import React, { useState, useCallback, useActionState } from 'react'
import { writeMessage } from '../services/actions'
import WriteForm from '../components/WriteForm'
import { useSearchParams } from 'next/navigation'

const WriteContainer = () => {
  const searchParams = useSearchParams()
  const params = { redirectUrl: searchParams.get('redirectUrl') }

  const [form, setForm] = useState({ receiverEmail: searchParams.get('email') })

  const actionState = useActionState(writeMessage, params)

  const onChange = useCallback((e) => {
    setForm((data) => ({ ...data, [e.target.name]: e.target.value }))
  }, [])
  const onEditorChange = useCallback(
    (content) => setForm((data) => ({ ...data, content })),
    [],
  )

  const onEditorImage = useCallback(
    () => setForm({ receiverEmail: searchParams.get('email') }),
    [searchParams],
  )

  const onClick = useCallback((field, value) => {
    setForm((data) => ({ ...data, [field]: value }))
  }, [])
  const Form = (
    <WriteForm
      form={form}
      onChange={onChange}
      onClick={onClick}
      onEditor={onEditorChange}
      onEditorImage={onEditorImage}
      actionState={actionState}
    />
  )

  const _Form =
    searchParams.get('popup') === 'true' ? (
      Form
    ) : (
      <div className="layout-width">{Form}</div>
    )
  return _Form
}

export default React.memo(WriteContainer)
