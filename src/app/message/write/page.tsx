'use client'

import React from 'react'
import loadable from '@loadable/component'
import { MainTitle } from '@/app/global/components/StyledTitle'
import WithUserContainer from '@/app/global/containers/WithUserContainer'
import { useSearchParams } from 'next/navigation'

const WriteContainer = loadable(() => import('../containers/WriteContainer'))

const WritePage = () => {
  const searchParams = useSearchParams()
  const isPopup = searchParams.get('popup') === 'true'
  return WithUserContainer(
    <>
      {!isPopup && <MainTitle>쪽지 작성</MainTitle>}
      <WriteContainer />
    </>,
  )
}

export default WritePage
