'use server'
import apiRequest from '@/app/global/libs/apiRequest'

export const getcardInfo = async () => {
  try {
    const res = await apiRequest('/card/list')

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
