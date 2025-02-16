'use server'
import { redirect } from 'next/navigation'
import apiRequest from '@/app/global/libs/apiRequest'

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

export const CardTransaction = async (params, formData: FormData) => {
  const form: any = {}
  let errors: any = {}
  let hasErrors = false

  for (const [key, value] of formData.entries()) {
    if (key.includes('$ACTION')) continue
    form[key] = value
  }

  // 검증 S

  if (!form.annualFee) {
    errors.annualFee = errors.annualFee ?? []
    errors.annualFee.push('연회비를 입력하세요.')
    hasErrors = true
  }

  if (form.annualFee < 1000 || form.annualFee > 30000) {
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
  console.log('form', form)
  console.log('errors', errors)

  // 검증 E

  // 서버 요청 S

  if (!hasErrors) {
    try {
      const res = await apiRequest('/bank/transaction/card', 'POST', form)

      console.log('res', res)

      if (res.status !== 201) {
        // 검증 실패시
        const result = await res.json()
        errors = result.message
        console.log('result', result)
      }
    } catch (err) {
      console.error(err)
    }
  }
  // 서버 요청 E
}

export const LoanTransaction = async (params, formData: FormData) => {
  const form: any = {}
  let errors: any = {}
  let hasErrors = false

  for (const [key, value] of formData.entries()) {
    if (key.includes('$ACTION')) continue
    form[key] = value
  }

  // 검증 S

  if (!form.category) {
    errors.category = errors.category ?? []
    errors.category.push('카드타입을 입력하세요.')
    hasErrors = true
  }
  console.log('form', form)
  console.log('errors', errors)

  // 검증 E

  // 서버 요청 S

  if (!hasErrors) {
    try {
      const res = await apiRequest('/bank/transaction/loan', 'POST', form)

      console.log('res', res)

      if (res.status !== 201) {
        // 검증 실패시
        const result = await res.json()
        errors = result.message
        console.log('result', result)
      }
    } catch (err) {
      console.error(err)
    }
  }
  // 서버 요청 E
}
