'use client'

import React from 'react'
import loadable from '@loadable/component'
import { MainTitle } from '@/app/global/components/StyledTitle'
import WithUserContainer from '@/app/global/containers/WithUserContainer'
import { MainContentBox } from '@/app/global/components/ContentBox'

const WriteContainer = loadable(() => import('../containers/WriteContainer'))

const WritePage = () => {
  return WithUserContainer(
    <>
      <MainTitle>쪽지 작성</MainTitle>
      <WriteContainer />
    </>,
  )
}

export default WritePage
