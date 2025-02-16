'use client'
import { MainTitle } from '@/app/global/components/StyledTitle'
import React from 'react'
import loadable from '@loadable/component'
import { MainContentBox } from '@/app/global/components/ContentBox'

const ViewContainer = loadable(
  () => import('../../../containers/ViewContainer'),
)

const ViewPage = ({ params }) => {
  const { seq } = React.use<{ seq: number }>(params)
  return (
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle></MainTitle>
        <ViewContainer seq={seq} />
      </MainContentBox>
    </>
  )
}

export default ViewPage
