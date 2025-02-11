import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'

const ListPage = () => {
  return (
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle>거래내역목록조회</MainTitle>
      </MainContentBox>
    </>
  )
}

export default ListPage
