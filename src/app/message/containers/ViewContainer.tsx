'use client'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { deleteMessage, getMessage } from '../services/actions'
import ViewForm from '../components/ViewForm'

const ViewContainer = ({ seq }) => {
  const [data, setData] = useState([])

  const onDelete = useCallback(() => {
    deleteMessage(seq)
  }, [seq])

  useLayoutEffect(() => {
    ;(async () => {
      try {
        const _data = await getMessage(seq)
        setData(_data)
      } catch (err) {
        console.error(err)
        return
      }
    })()
  }, [seq])

  return (
    <div>
      <ViewForm data={data} onDelete={onDelete} />
      dadas
    </div>
  )
}

export default React.memo(ViewContainer)
