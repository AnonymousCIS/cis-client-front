'use client'

import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import type { CommonType } from '../types/StyledType'
import FileItems from './FileItems'
import { deleteFile } from '../services/actions'

type Props = {
  gid: string
  location?: string
  single?: boolean
  imageOnly?: boolean
  title?: string
  callback: (files: any[]) => void
}

const Wrapper = styled.div<CommonType>``

const FileUpload = ({
  gid,
  location,
  single,
  imageOnly,
  title,
  callback,
}: Props) => {
  const [files, setFiles] = useState<any>([])

  return (
    <>
      <Wrapper>
        {title && <div className="tit">{title}</div>}
        {files && files.length > 0}
      </Wrapper>
    </>
  )
}

export default React.memo(FileUpload)
