'use client'
import React from 'react'
import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'
import WithUserContainer from '@/app/global/containers/WithUserContainer'
import loadable from '@loadable/component'
const LoanTransactionContainer = loadable(
  () => import('../../containers/LoanTransactionContainer'),
)

const CardPage = () => {
  return WithUserContainer(
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle>대출 추천</MainTitle>
        <LoanTransactionContainer />
      </MainContentBox>
    </>,
  )
}

export default CardPage
