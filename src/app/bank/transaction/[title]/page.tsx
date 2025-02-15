'use client'
import React from 'react'
import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'
import WithUserContainer from '@/app/global/containers/WithUserContainer'
import loadable from '@loadable/component'
const TransactionContainer = loadable(
  () => import('../../containers/TransactionContainer'),
)

const CardPage = ({ params }) => {
  const { title } = React.use<{ title: any }>(params)
  const name = title === 'card' ? '카드추천' : '대출추천'
  return WithUserContainer(
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle>{name}</MainTitle>
        <TransactionContainer title={title} />
      </MainContentBox>
    </>,
  )
}

export default CardPage
