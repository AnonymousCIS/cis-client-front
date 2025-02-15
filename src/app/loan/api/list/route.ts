'use server'
import { NextRequest, NextResponse } from 'next/server'
import apiRequest from '@/app/global/libs/apiRequest'

export async function GET(request: NextRequest) {
  const qs = request.nextUrl.searchParams.toString()

  // 항상 쿼리 문자열을 처리
  const apiUrl = `${process.env.API_URL}/loan/list${qs ? '?' + qs : ''}`

  try {
    const res = await apiRequest(apiUrl)

    if (res.status === 200) {
      const result = await res.json()
      return NextResponse.json(result)
    } 
    else {
      // API 호출 실패시 처리
      return NextResponse.json({ success: false, message: 'API 호출 실패' })
    }
  } catch (error) {
    // 예외 처리
    console.error('API 요청 중 오류 발생:', error)
    return NextResponse.json({ success: false, message: '서버 오류' })
  }
}