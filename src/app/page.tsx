// const MainPage = () => {
//   return (
//     <>
//       <h1>메인 페이지</h1>
      
//     </>
//   )
// }

// export default MainPage

'use client'

import React, { useState, useCallback } from 'react'
import LayerPopup from '@/app/global/components/LayerPopup'

const MainPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const onClose = useCallback(() => setIsOpen(false), [])
  const onOpen = useCallback(() => setIsOpen(true), [])

  return (
    <>
      <button type="button" onClick={onOpen}>
        열기
      </button>
      <LayerPopup
        onClose={onClose}
        isOpen={isOpen}
        title="팝업 제목.."
        width={750}
        height={650}
      >
        <h2>팝업 테스트!</h2>
      </LayerPopup>
    </>
  )
}

export default React.memo(MainPage)
