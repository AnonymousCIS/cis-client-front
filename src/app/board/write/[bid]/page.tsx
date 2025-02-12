import React from 'react'
import BoardFormController from '../../controllers/BoardFormController'

type ParamType = {
  bid?: string
  seq?: number
}

// 경로변수 [...props] = 현재 경로와 하위경로 전체

const WritePage = ({ params }) => {
  const { bid } = React.use<ParamType>(params)

  return (
    <>
      <BoardFormController bid={bid} />
    </>
  )
}

export default React.memo(WritePage)
