import React from 'react'
import WithUserContainer from '@/app/global/containers/WithUserContainer'
import { MainTitle } from '@/app/global/components/StyledTitle'

const MypageContainer = () => {
  return WithUserContainer(
    //<h1>마이 페이지</h1>

    <>
      <MainTitle></MainTitle>
      <MypageContainer />
    </>,
  )
}

export default React.memo(MypageContainer)
