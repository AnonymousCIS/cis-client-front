'use client'

import React, { useState, useCallback, useLayoutEffect } from 'react'
import { BulletList } from 'react-content-loader'
import { getLoanView } from '../services/actions'
import { notFound } from 'next/navigation'
import ViewForm from '../components/ViewForm'

const Loading = () => <BulletList />

const ViewContainer = ({ seq }: { seq?: number | undefined } | undefined) => {


  const [form, setForm] = useState([])


  useLayoutEffect(() => {
    ;(async () => {
        try {
          const loan = await getLoanView(seq)
          console.log('loan', loan)
          if (!loan) notFound()
          else {
            setForm(loan)
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