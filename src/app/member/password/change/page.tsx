import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'

const ChangePage = () => {
  return (
    <>
      <MainContentBox max={450} min={350}>
        <MainTitle>비밀번호 변경</MainTitle>
        <FindContainer />
      </MainContentBox>
    </>
  )
}

export default ChangePage
