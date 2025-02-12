'use client'
import React from 'react'
import { MainContentBox } from '@/app/global/components/ContentBox'
import { MainTitle } from '@/app/global/components/StyledTitle'
import ReactQuill from 'react-quill-new'
import styled from 'styled-components'
import { CommonType } from '@/app/global/types/StyledType'
import { Input, Textarea } from '@/app/global/components/FormComponents'

const StyledForm = styled.form<CommonType>``

const Form = ({ board, data, onEditorChange, onChange, actionState }) => {
  const [errors, formAction, isPending] = actionState
  const { useEditor } = board

  return (
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle>{board.name}</MainTitle>
        <StyledForm action={formAction} autoComplete="off">
          {useEditor ? (
            <ReactQuill
              theme="snow"
              value={data?.content ?? ''}
              onChange={onEditorChange}
            />
          ) : (
            <Textarea
              name="content"
              value={data?.content ?? ''}
              onChange={onChange}
            />
          )}
        </StyledForm>
      </MainContentBox>
    </>
  )
}

export default React.memo(Form)
