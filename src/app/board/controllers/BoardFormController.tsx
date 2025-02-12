'use client'
import React, { useState, useLayoutEffect } from 'react'
import useSkin from '../hooks/useSkin'

type Props = {
  bid?: string
  seq?: number
}

const BoardFormController = ({ bid, seq }: Props) => {
  const [board, setBoard] = useState({})
  const [data, setData] = useState({ mode: seq ? 'edit' : 'write' })
  const Form = useSkin('default', 'form')

  return <Form />
}

export default React.memo(BoardFormController)
