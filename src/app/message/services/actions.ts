'use server'

import { redirect } from 'next/navigation'
import apiRequest from '@/app/global/libs/apiRequest'
import { toQueryString } from '@/app/global/libs/utils'

/**
 * 쪽지 조회
 * @param seq 
 * @returns 
 */
export const getMessage = async (seq) => {
  try {
    const res = await apiRequest(`/message/view/${seq}`)
    if (res.status === 200) {
      const result = await res.json()
      return result.success && result.data
    }
  } catch (err) {
    console.error(err)
  }
}

/**
 * 쪽지 작성
 * @param params 
 * @param formData 
 * @returns 
 */
export const writeMessage = async (params, formData: FormData) => {
  // const redirectUrl = params?.redirectUrl ?? '/message/list'

  const form: any = {}
  let errors: any = {}
  let hasErrors = false

  for (const [key, value] of formData.entries()) {
    if (key.includes('$ACTION')) continue

    const _value: string | boolean = value.toString()

    form[key] = _value
  }

  //   필수항목 검증 S

  const requiredFields = {
    receiverEmail: '받는 사람 이메일을 적으세요.',
    subject: '제목을 입력하세요.',
    content: '내용을 입력하세요.',
  }

  for (const [field, msg] of Object.entries(requiredFields)) {
    if (
      !form[field] ||
      (typeof form[field] === 'string' && !form[field].trim())
    ) {
      errors[field] = errors[field] ?? []
      errors[field].push(msg)
      hasErrors = true
    }
  }

  //   필수항목 검증 E

  //   server 처리 요청 S
  if (!hasErrors) {
    const res = await apiRequest('/message/write', 'POST', form)
    const result = await res.json()
    if (res.status !== 200 || !result.success) {
      errors = result.message
      hasErrors = true
    }
  }
  //   server 처리 요청 E

  if (hasErrors) return errors

  const url = `/message/list${form.popup === 'true' ? '?popup=true' : ''}`
  
  console.log('url', url)
  redirect(url)
}

export const deleteMessage = async(seq) => {
  const qs = toQueryString({seq: [seq]})

  try{
    const res = await apiRequest(`/message/deletes?${qs}`, 'PATCH')

    if(res.status === 200) {
      const result = await res.json()
    } else {
      return
    }
  } catch (err) {
    console.error(err)
  }
  redirect('/message/list')
}