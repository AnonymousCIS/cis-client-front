'use server'
import apiRequest from '@/app/global/libs/apiRequest'

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
    console.error('err', err)
  }
}

export const updateBoard = async (params, formData: FormData) => {}
