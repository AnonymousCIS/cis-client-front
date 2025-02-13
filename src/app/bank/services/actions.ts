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
    confirmPassword: '비밀번호를 확인하세요',
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
      const res = await apiRequest('/bank/create')
      if (res.status !== 200) {
        const result = await res.json()
        errors = result.message
      }
    } catch (err) {
      console.log(err)
    }
  }

  if (hasErrors) return errors

  // 계좌 계설 후 이동
  redirect('/')
}
