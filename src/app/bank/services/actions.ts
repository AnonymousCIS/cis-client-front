'use server'
import { redirect } from 'next/navigation'
import apiRequest from '@/app/global/libs/apiRequest'
import { GiConsoleController } from 'react-icons/gi'

export const createProcess = async (params, formData: FormData) => {
  const form: any = {}
  let errors: any = {}
  let hasErrors = false

  /* 폼에 다 옮겨주기기 */
  for (const [key, value] of formData.entries()) {
    form[key] = value
  }
  const requiredFields = {
    name: '이름을 입력하세요.',
    password: '비밀번호를 입력하세요',
    bankName: '은행이름을 입력하세요.',
    accountNumber: '계좌번호를 입력하세요.',
  }

  // 항목 누락 확인.
  for (const [field, msg] of Object.entries(requiredFields)) {
    if (
      !form[field] ||
      (typeof form[field] === 'string' && !form[field].trim())
    ) {
      // 필수 항목 누락
      errors[field] = errors[field] ?? []
      errors[field].push(msg)
      hasErrors = true
    }
  }

  if (!hasErrors) {
    try {
      const res = await apiRequest('/bank/create', 'POST', form)
      if (res.status !== 200) {
        const result = await res.json()
        errors = result.message
      }
    } catch (err) {
      console.error(err)
    }
  }

  if (hasErrors) return errors

  // 계좌 계설 후 이동
  redirect('/')
}

export const CardTransaction = async (form: any) => {
  let errors: any = {}
  let hasErrors = false

  // for (const [key, value] of formData.entries()) {
  //   if (key.includes('$ACTION')) continue
  //   form[key] = value
  // }

  // 검증 S

  if (!form.annualFee) {
    errors.annualFee = errors.annualFee ?? []
    errors.annualFee.push('연회비를 입력하세요.')
    hasErrors = true
  } else if (form.annualFee < 1000 || form.annualFee > 30000) {
    errors.annualFee = errors.annualFee ?? []
    errors.annualFee.push(
      `연회비는 1000 ~ 30000원 사이를 입력해주세요. 현재 입력한 연회비: ${form.annualFee}`,
    )
    hasErrors = true
  }

  if (!form.cardType) {
    errors.cardType = errors.cardType ?? []
    errors.cardType.push('카드타입을 입력하세요.')
    hasErrors = true
  }
  // console.log('form', form)
  // console.log('errors', errors)

  // // 검증 E

  // // 서버 요청 S

  if (!hasErrors) {
    try {
      const res = await apiRequest('/bank/transaction/card', 'POST', form)
      const result = await res.json()
      console.log('res', res)
      console.log('result', result)

      if (res.status !== 200) {
        // 검증 실패시
        console.log('result', result)
        errors = result.message
        return errors
      }
      return result.data
    } catch (err) {
      console.error(err)
    }
  }

  return errors
  // 서버 요청 E
}

export const LoanTransaction = async (form: any) => {
  let errors: any = {}
  let hasErrors = false

  // for (const [key, value] of formData.entries()) {
  //   if (key.includes('$ACTION')) continue
  //   form[key] = value
  // }

  // 검증 S

  if (!form.category) {
    errors.category = errors.category ?? []
    errors.category.push('대출타입을 입력하세요.')
    hasErrors = true
  }

  // console.log('form', form)
  // console.log('errors', errors)

  // // 검증 E

  // // 서버 요청 S

  if (!hasErrors) {
    try {
      const res = await apiRequest('/bank/transaction/loan', 'POST', form)
      const result = await res.json()
      console.log('res', res)

      if (res.status !== 200) {
        // 검증 실패시
        errors = result.message
        console.log('result', result)
        return errors
      }
      return result.data
    } catch (err) {
      console.error(err)
    }
  }

  return errors
  // 서버 요청 E
}

export const LoanCreate = async (form) => {
  const items = form.filter((item) => item?.checked)
  console.log('items', items)
  const _form: any = []

  // 내가 필요한건 seq만. List형태로.
  for (const key of items) {
    for (const [k, v] of Object.entries(key)) {
      if (k.includes('seq')) {
        console.log('유입')
        _form.push(v)
      }
    }
  }
  console.log('_form', _form)

  if (_form && _form.length > 0) {
    const res = await apiRequest('/loan/user/create', 'POST', _form)
    console.log('res', res)
    const result = await res.json()
    console.log('result', result)
    if (res.status !== 200) {
      // 검증 실패시
      console.log('검증 실패')
    }
    return result.data
  }
}

export const CardCreate = async (form) => {
  const items = form.filter((item) => item?.checked)
  console.log('items', items)
  const _form: any = []

  // 내가 필요한건 seq만. List형태로.
  for (const key of items) {
    for (const [k, v] of Object.entries(key)) {
      if (k.includes('seq')) {
        console.log('유입')
        _form.push(v)
      }
    }
  }
  console.log('_form', _form)

  if (_form && _form.length > 0) {
    const res = await apiRequest('/card/user/create', 'POST', _form)
    console.log('res', res)
    const result = await res.json()
    console.log('result', result)
    if (res.status !== 200) {
      // 검증 실패시
      console.log('검증 실패')
    }
    return result.data
  }
}
