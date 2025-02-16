import { NextRequest, NextResponse } from 'next/server'
import apiRequest from '@/app/global/libs/apiRequest'

export async function GET(request: NextRequest) {
  const qs = request.nextUrl.searchParams.toString()

  const apiUrl = process.env.API_URL + `/card/list${qs.trim() ? '?' + qs : ''}`

  const res = await apiRequest(apiUrl)

  if (res.status === 200) {
    const result = await res.json()
    return NextResponse.json(result)
  }
  return NextResponse.json({ success: false })
}
