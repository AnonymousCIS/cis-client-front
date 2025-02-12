import React from 'react'
import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'
import BoardFormController from '../../controllers/BoardFormController'

type ParamType = {
  bid?: string
  seq?: number
}

const WritePage = ({ params }) => {
  const { bid, seq } = React.use<ParamType>(params)
  return (
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle></MainTitle>
        <BoardFormController bid={bid} seq={seq} />
      </MainContentBox>
    </>
  )
}

export default React.memo(WritePage)
