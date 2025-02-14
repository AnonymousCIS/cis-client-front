'use server'

import { redirect } from 'next/navigation'
import apiRequest from '@/app/global/libs/apiRequest'
import type { SearchType } from '../types/boardTypes'
import { toQueryString } from '@/app/global/libs/utils'

/**
 * 게시판 설정 조회
 *
 * @param bid
 */
export const getBoard = async (bid) => {
  try {
    const res = await apiRequest(`/board/info/${bid}`)

    if (res.status === 200) {
      const result = await res.json()
      return result.success && result.data
    }
  } catch (err) {
    console.error(err)
  }
}
/**
 * 게시글 작성 & 수정
 *
 * @param params
 * @param formData
 */
export const updateBoard = async (params, formData: FormData) => {
  const form: any = {}
  const errors: any = {}
  let hasErrors = false

  for (const [key, value] of formData.entries()) {
    const _value = ['true', 'false'].includes(value.toString())
      ? Boolean(value.toString())
      : value.toString()

    form[key] = _value
  }
  const { locationAfterWriting } = await getBoard(form.bid)

  let redirectUrl = `/board/list/${form.bid}`
  /* 필수 항목 검증 S */

  const requiredFields = {
    poster: '작성자를 입력하세요',
    subject: '제목을 입력하세요',
    content: '내용을 입력하세요',
    gid: '잘못된 접근입니다',
    bid: '잘못된 접근입니다',
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

  /* 필수 항목 검증 E */

  /* Server 처리 요청 S */

  if (!hasErrors) {
    form.status = 'ALL'
    const res = await apiRequest('/board/save', 'POST', form)
    const result = await res.json()
    if (res.status !== 200 || !result.success) {
      // 게시글 등록 & 수정 실패
      return result.message
    } else {
      // 게시글 등록 & 수정 성공
      const { seq } = result.data
      redirectUrl =
        locationAfterWriting === 'view' ? `/board/view/${seq}` : redirectUrl
    }
  }

  /* Server 처리 요청 E */

  if (hasErrors) return errors

  redirect(redirectUrl)
}

/**
 * 게시글 단일 조회
 *
 * @param seq
 */
export const get = async (seq) => {
  let apiUrl = process.env.API_URL + `/board/view/${seq}`

  const res = await apiRequest(apiUrl)

  const result = await res.json()

  if (res.status === 200 && result.success) {
    const data = result.data

    /* File 데이터 조회 및 처리 S */
    const { gid } = data

    apiUrl = process.env.API_URL + `/file/list/${gid}`

    const _res = await apiRequest(apiUrl)

    const _result = await _res.json()

    if (_res.status === 200 && _result.success) {
      const files = _result.data

      data.editorFiles = []
      data.attachFiles = []

      for (const file of files) {
        if (file.location === 'attach') data.attachFiles.push(file)
        else data.editorFiles.push(file)
      }
    }
    /* File 데이터 조회 및 처리 E */

    return data
  }
}

/**
 * 게시글 목록 조회
 *
 * @param search
 * @returns
 */
export const getList = async (search: SearchType) => {
  const qs = toQueryString(search)

  const apiUrl =
    process.env.API_URL + `/board/list${qs && qs.trim() ? '?' + qs : ''}`

  const res = await apiRequest(apiUrl)

  const result = await res.json()

  if (res.status === 200 && result.success) return result.data
}
