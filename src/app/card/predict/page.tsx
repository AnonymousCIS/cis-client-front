import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'
import PredictContainer from '../containers/PredictContainer'

const PredictPage = () => {
  return (
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle></MainTitle>
        <PredictContainer />
      </MainContentBox>
    </>
  )
}

export default PredictPage
