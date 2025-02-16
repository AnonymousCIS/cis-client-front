'use client'
import React, { useState, useActionState, useCallback } from 'react'
import { LoanTransaction } from '../services/actions'
import LoanTransactionForm from '../components/LoanTransactionForm'

const TransactionContainer = () => {
  // 1. 자신의 계좌를 통틀어서 해야함
  // 2. 받아야 할건 연회비, 카드종류.
  // 3. 선택하고 난 후에 페이지 이동은 하지말자. 바로 밑에 카드를 넣자.
  // 4. 합치지말자

  /**
   * 이렇게만 있으면 될듯...?
   * 이부분들이 계좌 연동.
   */
  const [form, setForm] = useState({})

  const actionState = useActionState(LoanTransaction, undefined)
  // if (title === 'card') actionState
  // // 여기에 Card action 넣어주면 될듯
  // else actionState = useActionState(LoanTransaction, undefined)

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])

  // 내 카드추천목록들.
  const [item, setItem] = useState({})

  return (
    <>
      <LoanTransactionForm
        form={form}
        actionState={actionState}
        onChange={onChange}
      />
    </>
  )
}

export default React.memo(TransactionContainer)
