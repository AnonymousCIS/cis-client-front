'use server'
import apiRequest from '@/app/global/libs/apiRequest'

/*
export const getcardInfo = async () => {
  try {
    const res = await apiRequest('/card/list')

    if (res.status === 200) {
      const result = await res.json()
      return result.success && result.data
    } 
  } catch (err) {
    console.error(err)
  }
}
*/

export const getCard = async (seq) => {
  try {
    const res = await apiRequest(`/card/view/${seq}`)

    if (res.status === 200) {
      const result = await res.json()
      return result.success && result.data
    }
  } catch (err) {
    console.error('Error:', err)
  }
}
