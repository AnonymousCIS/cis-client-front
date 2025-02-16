'use client'

import React, { useState,  useLayoutEffect } from 'react'
import { BulletList } from 'react-content-loader'
import { getCardView } from '../services/actions'
import { notFound } from 'next/navigation'
import ViewForm from '../components/ViewForm'

const Loading = () => <BulletList />

const ViewContainer = ({ seq }: { seq?: number | undefined } | undefined) => {


  const [form, setForm] = useState([])


  useLayoutEffect(() => {
    ;(async () => {
        try {
          const card = await getCardView(seq)
          console.log('card', card)
          if (!card) notFound()
          else {
            setForm(card)
          }
        } catch (err) {
          console.error(err)
          notFound()
        }
      })()
    }, [seq])
    return <ViewForm form={form} />
}
export default React.memo(ViewContainer)