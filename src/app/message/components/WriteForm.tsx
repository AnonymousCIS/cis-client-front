import React from 'react'
import styled from 'styled-components'
import useUser from '@/app/global/hooks/useUser'
import type { CommonType } from '@/app/global/types/StyledType'
import { Input, Textarea } from '@/app/global/components/FormComponents'
import { TableCols } from '@/app/global/components/Tables'
import colors from '@/app/global/styles/colors'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import Messages from '@/app/global/components/Messages'
import { BigButton } from '@/app/global/components/Buttons'
import Editor from '@/app/global/components/Editor'
import FileUpload from '@/app/global/components/FileUpload'

const { primary, white } = colors

const StyledForm = styled.form<CommonType>`
  table {
    margin-bottom: 30px;

    th {
      width: 180px;
      background: ${primary};
      color: ${white};
    }

    td {
      & > * + * {
        margin-left: 20px;
      }
    }

    &:last-of-type {
      margin-bottom: 30px;
    }

    .flex {
      display: flex;

      & > span {
        width: 50px;
        cursor: default;
      }
    }
  }
`

const WriteForm = ({
  form,
  onChange,
  onClick,
  onEditor,
  onEditorImage,
  actionState,
}) => {
  console.log('form', form)
  const [errors, formAction, isPending] = actionState

  const { isAdmin } = useUser()

  return (
    <>
      <StyledForm action={formAction} autoComplete="off">
        <TableCols>
          <tbody>
            <tr>
              <th>받는 사람 이메일</th>
              <td>
                <Input
                  type="text"
                  name="receiverEmail"
                  value={form?.receiverEmail ?? ''}
                  onChange={onChange}
                  placeholder="받는 사람 이메일"
                />
                <Messages color="danger">{errors?.receiverEmail}</Messages>
              </td>
            </tr>
            <tr>
              <th>제목</th>
              <td>
                <Input
                  type="text"
                  name="subject"
                  value={form?.subject ?? ''}
                  onChange={onChange}
                  placeholder="제목"
                />
                {isAdmin && (
                  <span
                    onClick={() => onClick('notice', !Boolean(form?.notice))}
                  >
                    {form?.notice ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    공지
                  </span>
                )}
                <Messages color="danger">{errors?.subject}</Messages>
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <Editor
                  onChange={onEditor}
                  useImage={onEditorImage}
                  gid={form?.gid}
                  location="editor"
                  content={form?.content || ''}
                  files={form?.editorFiles}
                />
                <Messages color="danger">{errors?.content}</Messages>
              </td>
            </tr>
            <tr>
              <th>첨부 파일</th>
              <td>
                <div className="row">
                  <FileUpload
                    gid={form?.gid}
                    location="attach"
                    files={form?.attachFiles}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </TableCols>
        <BigButton type="submit" disabled={isPending} color="primary">
          작성
        </BigButton>
      </StyledForm>
    </>
  )
}

export default React.memo(WriteForm)
