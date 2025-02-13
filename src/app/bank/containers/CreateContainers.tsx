'use client'
import React, { useState, useCallback, useActionState } from 'react'
import CreateForm from '../components/CreateForm'
import { createProcess } from '../services/actions'

const CreateContainer = () => {
  const [form, setForm] = useState({})
  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])
  const actionState = useActionState(createProcess, undefined)
  return (
    <CreateForm form={form} onChange={onChange} actionState={actionState} />
  )
}

export default React.memo(CreateContainer)
