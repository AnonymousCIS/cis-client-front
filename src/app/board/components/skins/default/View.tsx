import React from 'react'
import { MainContentBox } from '@/app/global/components/ContentBox'
import { MainTitle } from '@/app/global/components/StyledTitle'
import styled from 'styled-components'
import { CommonType } from '@/app/global/types/StyledType'
// import colors from '@/app/global/styles/colors'
// import sizes from '@/app/global/styles/sizes'

const StyledView = styled.div<CommonType>``

const View = ({ data }) => {
  // 추후 필요한 것 추가
  const { subject, content } = data

  return (
    <MainContentBox min={1200}>
      <MainTitle>{subject}</MainTitle>
      <StyledView>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </StyledView>
    </MainContentBox>
  )
}
export default React.memo(View)
