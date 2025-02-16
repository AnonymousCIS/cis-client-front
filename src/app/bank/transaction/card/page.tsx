'use client'
import React from 'react'
import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'
import WithUserContainer from '@/app/global/containers/WithUserContainer'
import loadable from '@loadable/component'
const TransactionContainer = loadable(
  () => import('../../containers/CardTransactionContainer'),
)

const CardPage = () => {
  return WithUserContainer(
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle>카드 추천</MainTitle>
        <TransactionContainer />
      </MainContentBox>
    </>,
  )
}

export default CardPage
