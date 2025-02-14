'use client'

import React, { useLayoutEffect, useState } from 'react'
import useSkin from '../hooks/useSkin'
import { setDate } from 'date-fns'

const BoardViewController = ({ seq }) => {
  const [board, setBoard] = useState<any>()
  const [data, setData] = useState<any>()

  useLayoutEffect(() => {
    ;(async () => {
      const _data = await get(seq)
      if (!_data || !_data.config) {
        return
      }

      setData(_data)
      setBoard(_data.config)
    })()
  }, [seq])

  const View = useSkin(board?.skin, 'form')

  return View && <View data={data} />
}

export default React.memo(BoardViewController)
