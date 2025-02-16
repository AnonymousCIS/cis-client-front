'use client'
import React, { useState, useCallback } from 'react'
import { LoanTransaction, CardCreate } from '../services/actions'
import LoanForm from '../components/LoanForm'
import LoanTransactionForm from '../components/LoanTransactionForm'

type Props = {
  seq?: number
  bankName?: boolean
}

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
  const [_form, _setForm] = useState<Props>({})
  const [errors, setErrors] = useState<any>({})

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])

  // 내 카드추천목록들.
  const [item, setItem] = useState()

  const onClick = useCallback(() => {
    ;(async () => {
      const res = await LoanTransaction(form)
      if (res.annualFee) {
        setErrors(res)
      } else if (res.cardType) {
        setErrors(res)
      } else {
        setErrors(null)
      }
      const _res = JSON.parse(res)
      setItem(_res?.data)
    })()
  }, [form])

  const onCheck = useCallback((seq, check) => {
    _setForm((_form) => ({
      ..._form,
      [seq]: { check },
    }))
  }, [])

  const onProcess = useCallback(() => {
    ;(async () => {
      const res = await CardCreate(_form)
    })()
  }, [_form])

  return (
    <>
      <LoanTransactionForm
        form={form}
        onChange={onChange}
        onClick={onClick}
        errors={errors}
      />
      {item !== undefined ? (
        <LoanForm
          items={item}
          form={_form}
          onClick={onCheck}
          onProcess={onProcess}
        />
      ) : (
        <></>
      )}
    </>
  )
}

export default React.memo(TransactionContainer)
