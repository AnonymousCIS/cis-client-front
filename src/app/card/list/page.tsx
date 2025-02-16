'use client'
import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'
import loadable from '@loadable/component'

const ListContainer = loadable(() => import('../containers/ListContainer'))

const ListPage = () => {
  return (
    <>
      <MainContentBox max={2000} min={650}>
        <MainTitle>카드 목록</MainTitle>
        <ListContainer />
      </MainContentBox>
    </>
  )
}

export default ListPage
