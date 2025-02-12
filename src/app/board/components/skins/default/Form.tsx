'use client'
import React from 'react'
import { MainContentBox } from '@/app/global/components/ContentBox'
import { MainTitle } from '@/app/global/components/StyledTitle'
import ReactQuill from 'react-quill-new'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { Input, Textarea } from '@/app/global/components/FormComponents'
import styled from 'styled-components'
import { CommonType } from '@/app/global/types/StyledType'
import { BigButton } from '@/app/global/components/Buttons'
import Messages from '@/app/global/components/Messages'
import useUser from '@/app/global/hooks/useUser'

const StyledForm = styled.form<CommonType>``

const Form = ({
  board,
  data,
  onEditorChange,
  onChange,
  actionState,
  onClick,
}) => {
  const [errors, formAction, isPending] = actionState
  const { useEditor } = board
  const { isLogin, isAdmin } = useUser()
  return (
    <>
      <MainContentBox max={750} min={650}>
        <MainTitle>{board.name}</MainTitle>
        <StyledForm action={formAction} autoComplete="off">
          <input type="hidden" name="bid" value={board?.bid ?? ''} />
          <input type="hidden" name="gid" value={board?.gid ?? ''} />
          <Messages color="danger">{errors?.bid}</Messages>
          <Messages color="danger">{errors?.gid}</Messages>
          <Messages color="danger">{errors?.global}</Messages>

          <div className="row poster">
            <div>
              <input
                type="text"
                name="poster"
                value={data?.post ?? ''}
                onChange={onChange}
                placeholder="작성자"
              />
              {isAdmin && (
                <span onClick={() => onclick('notice', !Boolean(data?.notice))}>
                  {data?.notice ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}{' '}
                  공지글
                </span>
              )}
              <span></span>
            </div>
            <Messages color="danger">{errors?.poster}</Messages>
          </div>
          {((!isLogin && data?.mode === 'write') ||
            (data && data?.mode === 'edit' && data?.createdBy)) && (
            <div className="row">
              <Input
                type="password"
                name="guestPw"
                value={data?.guestPw ?? ''}
                onChange={onChange}
              />
              <Messages color="danger">{errors?.guestPw}</Messages>
            </div>
          )}
          <div className="row">
            <Input
              type="text"
              name="subject"
              value={data?.subject ?? ''}
              onChange={onChange}
            />
            <Messages color="danger">{errors?.subject}</Messages>
          </div>
          {useEditor ? (
            <ReactQuill
              theme="snow"
              value={data?.content ?? ''}
              onChange={onEditorChange}
              placeholder="내용을 입력하세요"
            />
          ) : (
            <Textarea
              name="content"
              value={data?.content ?? ''}
              onChange={onChange}
              placeholder="내용을 입력하세요."
            />
          )}
          <Messages color="danger">{errors?.content}</Messages>
          <BigButton type="submit" disabled={isPending}>
            {data?.mode === 'edit' ? '수정하기' : '작성하기'}
          </BigButton>
        </StyledForm>
      </MainContentBox>
    </>
  )
}
export default React.memo(Form)
