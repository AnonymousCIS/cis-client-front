import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'
import BoardViewController from '../../controllers/BoardViewController'

const ViewPage = async ({ seq }) => {
  const { seq } = await params
  return <BoardViewController />
}

export default ViewPage
