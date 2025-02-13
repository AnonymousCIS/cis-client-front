'use client'
import React, { useState, useMemo, useRef, useCallback } from 'react'
import ReactQuill from 'react-quill-new'
import styled from 'styled-components'
import type { CommonType } from '../types/StyledType'
import { getToken } from '../libs/apiRequest'
import FileItms from './FileItms'
import { error } from 'console'

type Props = {
  content?: string
  onChange: (content: string) => void
  width?: number | string
  height?: number
  useImage?: boolean
  gid?: string
  location?: string
}

const Editor = ({
  content,
  onChange,
  width,
  height,
  useImage,
  gid,
  location,
}: Props) => {
  width = width ?? '100%'
  height = height ?? 350

  gid = gid ?? '' + Date.now()
  location = location ?? 'editor'

  const styles = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height],
  )

  const editor = useRef<any>(undefined)
  const modules = useMemo(() => {
    const imageUploader = () => {
      const fileEl = document.createElement('input')
      fileEl.type = 'file'
      fileEl.accept = 'image/*'
      fileEl.multiple = true
      fileEl.click()

      fileEl.addEventListener('change', (e: any) => {
        const files = e.target.files
        const formData = new FormData()
        formData.append('gid', gid)
        formData.append('location', location)
        formData.append('imageOnly', 'true')

        for (const file of files) {
          formData.append('file', file)
        }

        ;(async () => {
          // const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/file/upload'
          const apiUrl = 'https://cis-file-service.onedu.blue/upload'

          const options = {
            method: 'POST',
            body: formData,
          }

          const res = await fetch(apiUrl, {
            method: 'POST',
            body: formData,
          })
          const result = await res.json()

          /* if () {
            const _editor = editor.current.getEditor()
            const cursor = editor.getSelection()

          } */
          console.log('result', result)
        })()
      })
    }

    if (useImage) {
      return {
        toolbar: {
          container: [
            ['image'],
            [{ header: [1, 2, 3, 4, 5, true] }],
            ['bold', 'underline'],
          ],
          handlers: {
            image: imageUploader,
          },
        },
      }
    } else {
      return {}
    }
  }, [useImage, gid, location])

  const onInsertImage = useCallback((url) => {
    const _editor = editor.current.getEditor()
    // const cursor = editor.getSelection()
    // _editor.onInsertImage(cursor.index, 'image', url)
  }, [])

  const onDeleteFile = useCallback((seq) => {}, [])

  return (
    <Wrapper>
      <ReactQuill
        ref={editor}
        theme="snow"
        value={content ?? ''}
        onChange={onEditorChange}
        style={styles}
        modules={modules}
      />
      {files && (
        <Files
      )}
    </Wrapper>
  )
}

export default React.memo(Editor)
