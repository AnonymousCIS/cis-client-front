'use server'

import apiRequest from '../libs/apiRequest'

/**
 * 파일 삭제
 *
 * @param seq
 * @returns
 */
export const deleteFile = async (seq) => {
  const apiUrl = process.env.API_URL + `/file/delete/${seq}`

  const res = await apiRequest(apiUrl, 'DELETE')

  const result = await res.json()

  if (res.status === 200 && result.success) {
    // 삭제된 파일 정보 목록
    return result.data
  }
}
