'use client'
import React, { useState, useCallback } from 'react'
import { LoanTransaction, LoanCreate } from '../services/actions'
import LoanForm from '../components/LoanForm'
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
  const [form, setForm] = useState<any>({})
  const [errors, setErrors] = useState<any>({})

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])

  // 내 대출추천목록들.
  const [item, setItem] = useState<any>()

  const onClick = useCallback(() => {
    ;(async () => {
      const res = await LoanTransaction(form)
      if (res.category) {
        setErrors(res)
      } else {
        const _res = JSON.parse(res)
        setErrors(null)
        setItem(_res?.data)
      }
    })()
  }, [form])

  const onCheck = useCallback((seq) => {
    setItem((prevItems) =>
      prevItems.map((item) =>
        item.seq === seq ? { ...item, checked: !item.checked } : item,
      ),
    )
  }, [])

  const onProcess = useCallback(() => {
    ;(async () => {
      const res = await LoanCreate(item)
      // 페이지 이동으로 하기.
      // 두가지 선택지. 내 추천목록 보기 / 해당 목록 보기.
    })()
  }, [item])

  return (
    <>
      <LoanTransactionForm
        form={form}
        onChange={onChange}
        onClick={onClick}
        errors={errors}
      />
      {item !== undefined ? (
        <LoanForm items={item} onClick={onCheck} onProcess={onProcess} />
      ) : (
        <></>
      )}
    </>
  )
}

export default React.memo(TransactionContainer)
