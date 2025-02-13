import React from 'react'
import styled from 'styled-components'
import type { CommonType } from '../types/StyledType'

const Wrapper = styled.div<CommonType>`
  padding: 20px;
`

type ChildProps = {
  file?: any
  isEditor?: boolean
  onInsertImage?: (url: string) => void
  onDeleteFile: (seq: number) => void
  className?: string
}

type Props = ChildProps & {
  files: any[]
}

const _FileItem = ({
  file,
  isEditor,
  onInsertImage,
  onDeleteFile,
  className,
}: ChildProps) => {
  const { fileName, downloadUrl, fileUrl } = file

  return (
    <span className={className}>
      <a href={toHttps(downloadUrl)}>{fileName}</a>
      {/* {isEditor && <FaFileUpload onClick={() => onInsertImage(toHttps(fileUrl))} /> */}
    </span>
  )
}

const FileItem = styled(_FileItem)<CommonType>``

const Wrapper = styled.div<CommonType>``

const FileItems = ({ files, isEditor, onInsertImage, onDeleteFile }: Props) => {
  return (
    files &&
    files.length > 0 && (
      <Wrapper>
        {files.map((file) => (
          <FileItem
            key={'file-item-' + file.seq}
            file={file}
            isEditor={isEditor}
            onInsertImage={onInsertImage}
            onDeleteFile={onDeleteFile}
            className="files-service"
          />
        ))}
      </Wrapper>
    )
  )
}

export default React.memo(FileItems)

function toHttps(url) {
  return url.replace('http:', 'https:').replace(':80', '')
}
