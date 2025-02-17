import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'
import ViewContainer from '../../containers/ViewContainer'
import React from 'react'

const ViewPage = ({params}) => {
  const { seq } = React.use<{ seq: number }>(params)
  return (
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle>쪽지 조회</MainTitle>
        <ViewContainer seq={seq} />
      </MainContentBox>
    </>
  )
}

export default ViewPage
