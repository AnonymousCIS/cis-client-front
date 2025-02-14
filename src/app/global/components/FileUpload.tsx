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

  const onDeleteFile = useCallback((seq) => {
    if (!window.confirm('정말 삭제하겠습니까?')) {
      return
    }

    ;(async () => {
      const deleted = await deleteFile(seq)
      if (deleted) {
        // 삭제 성공
        setFiles((files) => files.filter((file) => file.seq !== seq))
      }
    })()
  }, [])

  const onProcessUpload = useCallback(() => {}, [])

  return (
    <Wrapper>
      {title && <div className="tit">{title}</div>}
      {files && files.length > 0 && (
        <FileItems files={files} onDeleteFile={onDeleteFile} />
      )}
    </Wrapper>
  )
}

export default React.memo(FileUpload)
