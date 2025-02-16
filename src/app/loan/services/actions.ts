'use server'
import apiRequest from '@/app/global/libs/apiRequest'

export const getloanInfo = async () => {
  try {
    const res = await apiRequest('/loan/list')

    if (res.status === 200) {
      const result = await res.json()
      return result.success && result.data
    } else {
      console.error('Error fetching logs:', res.status)
    }
  } catch (err) {
    console.error('Error:', err)
  }
}
export const getLoanView = async (seq) => {
  try {
    const res = await apiRequest(`/loan/view/${seq}`)
    // const res = await apiRequest(
    //   'https://cis-email-service.koreait.xyz/admin/list',
    // )
    if (res.status === 200) {
      const result = await res.json()
      return result.success && result.data
    } else {
      console.error('Error fetching logs:', res.status)
    }
  } catch (err) {
    console.error('Error:', err)
  }
}
