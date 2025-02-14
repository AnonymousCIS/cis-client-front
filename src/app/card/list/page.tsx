import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'
import ListContainer from '../containers/ListContainer'

const ListPage = () => {
  return (
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle>카드 목록</MainTitle>
        <ListContainer />
      </MainContentBox>
    </>
  )
}

export default ListPage
