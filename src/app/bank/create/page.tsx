'use client'
import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'
import lodable from '@loadable/component'

const CreateContainer = lodable(() => import('../containers/CreateContainers'))

const CreatePage = () => {
  return (
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle>계좌 생성</MainTitle>
        <CreateContainer />
      </MainContentBox>
    </>
  )
}

export default CreatePage
