import { MainContentBox } from '@/app/global/components/ContentBox'
import { MainTitle } from '@/app/global/components/StyledTitle'
import EditContainer from '../containers/EditContainer'

const LoginPage = () => {
  return (
    <MainContentBox max={750} min={650}>
      <MainTitle>회원정보 수정</MainTitle>
      <EditContainer />
    </MainContentBox>
  )
}

export default LoginPage
