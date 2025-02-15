'use client'
import React, { useState, useActionState, useCallback } from 'react'
import { CardTransaction, LoanTransaction } from '../services/actions'
import CardTransactionForm from '../components/CardTransactionForm'
import LoanTransactionForm from '../components/LoanTransactionForm'
import { notFound } from 'next/navigation'

const TransactionContainer = ({ title }) => {
  // 1. 자신의 계좌를 통틀어서 해야함
  // 2. 받아야 할건 연회비, 카드종류.
  // 3. 선택하고 난 후에 페이지 이동은 하지말자. 바로 밑에 카드를 넣자.
  // 4. 다시 합쳐보자..

  /**
   * 이렇게만 있으면 될듯...?
   * 이부분들이 계좌 연동.
   */
  const [form, setForm] = useState({})
  console.log('title', title)

  let actionState = null
  if (title === 'card') actionState = useActionState(CardTransaction, undefined)
  // 여기에 Card action 넣어주면 될듯
  else actionState = useActionState(LoanTransaction, undefined)

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])

  // 내 카드추천목록들.
  const [item, setItem] = useState({})

  return (
    <>
      {title === 'card' ? (
        <CardTransactionForm
          form={form}
          actionState={actionState}
          onChange={onChange}
          title={title}
        />
      ) : title === 'loan' ? (
        <LoanTransactionForm
          form={form}
          actionState={actionState}
          onChange={onChange}
        />
      ) : (
        notFound()
      )}
    </>
  )
}

export default React.memo(TransactionContainer)
