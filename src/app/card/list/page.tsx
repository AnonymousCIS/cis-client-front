'use client'

import React from 'react'
import { MainTitle } from '@/app/global/components/StyledTitle'
import loadable from '@loadable/component'
import WithUserContainer from '@/app/global/containers/WithUserContainer'

const ListContainer = loadable(() => import('../containers/ListContainer'))

const ListPage = () => {
  return WithUserContainer(
    <>
      <MainTitle>카드 목록</MainTitle>
      <ListContainer />
    </>,
  )
}

export default React.memo(ListPage)
