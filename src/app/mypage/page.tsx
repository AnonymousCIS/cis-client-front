'use client'

import React from 'react'
import MyPageContainer from './containers/MyPageContainer'
import WithUserContainer from '../global/containers/WithUserContainer'

const Mypage = () => {
  // 로그인 상태가 필요한 경우에 WithUserContainer로 감싸기
  return <h1>마이페이지</h1>
}

export default React.memo(Mypage)
