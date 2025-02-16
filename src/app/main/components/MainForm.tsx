'use client'

import React from 'react'
import styled from 'styled-components'

import colors from '@/app/global/styles/colors'
import sizes from '@/app/global/styles/sizes'

const { info } = colors
const { medium, big } = sizes

const StyledContent = styled.div`
  background: ${info};

  .layout-width {
    // display: flex;
  }
`

const MainForm = () => {
  return (
    <>
      <StyledContent>
        <div className="layout-width">
          <h1>
            ✨ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡlayout-widthㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ✨
          </h1>
          <h1>globals.css의 .layout-width 꼭 참고 (메인 컨텐츠 영역)</h1>
          <h1>모든 Container은 가장 상위 태그에 div태그로 className="layout-width" 붙일 것</h1>
          <h1>예시 - Card/ListForm</h1>
        </div>
      </StyledContent>
    </>
  )
}

export default React.memo(MainForm)
