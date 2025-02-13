'use server'

import { redirect } from 'next/navigation'
import apiRequest from '@/app/global/libs/apiRequest'


export const WriteMessage = async (params, formData: FormData) => {
  const form: any = {}
  const errors: any = {}
  let hasErrors = false

  for (const [key, value] of formData.entries()) {
    const _value = ['true', 'false'].includes(value.toString())
      ? Boolean(value.toString())
      : value.toString()

    form[key] = _value
  }

  let redirectUrl = `/message/service`

//   필수항목 검증 S

  const requiredFields = {
    receiverEmail: '받는 사람 이메일을 적으세요.',
    subject: '제목을 입력하세요.',
    content: '내용을 입력하세요.'
  }

  for (const [field, msg] of Object.entries(requiredFields)) {
    if (
        !form[field] || (typeof form[field] === 'string' && !form[field].trim())
    ) {
        errors[field] = errors[field] ?? []
        errors[field].push(msg)
        hasErrors = true
    }
  }

//   필수항목 검증 E

//   server 처리 요청 S
  if (!hasErrors){
    const res = await apiRequest('message/write', 'POST', form)
    const result = await res.json()
    if (res.status !==200 || result.success) {
        return result.message
    } else {
        const [seq] = result.data
        redirectUrl = `/message/list`
    }
  }
//   server 처리 요청 E

  if (hasErrors) return errors

  redirect(redirectUrl)
}
