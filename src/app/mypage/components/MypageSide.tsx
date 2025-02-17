'use client'
import React from 'react'
import styled from 'styled-components'
import type { CommonType } from '@/app/global/types/StyledType'
import colors from '@/app/global/styles/colors'
import sizes from '@/app/global/styles/sizes'

const { big, medium } = sizes
const { primary, info, white, dark } = colors

const StyledAside = styled.aside<CommonType>`
  display: flex;
  flex-direction: column;

  min-height: 800px;
  background: ${white};

  a {
    color: ${dark};
    font-size: ${medium};
    display: block;
    height: 55px;
    line-height: 53px;
    text-align: center;
  }

  a.on {
    background: ${info};
    color: ${dark};
  }

  a + a {
    border-top: 2px solid ${info};
  }
`

const MypageSide = () => {
  return (
    <StyledAside>
      <a href="#">회원정보 수정</a>
      <a href="#">찜한 목록</a>
      <a href="#">My Bank 조회</a>
      <a href="#">추천 Card 조회</a>
      <a href="#">추천 Loan 조회</a>
      <a href="#">메세지 쓰기</a>
      <a href="#">메세지 보관함</a>
    </StyledAside>
  )
}

export default React.memo(MypageSide)
