import { BigButton } from "@/app/global/components/Buttons"
import { SubTitle } from "@/app/global/components/StyledTitle"
import { TableCols } from "@/app/global/components/Tables"
import colors from "@/app/global/styles/colors"
import React from "react"
import styled from "styled-components"

const {primary, white} = colors

const StyledForm = styled.form`
  table {
    margin-bottom: 30px;

    th {
      width: 120px;
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
  }
  .buttonGroup {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`

const DeleteModalForm = ({ data, actionState, closeModal, onDelete }) => {
  console.log('form',data)
  const {subject, senderEmail, content, seq} = data
  const [errors, formAction, isPending] = actionState
  return (
    <>
      <StyledForm action={formAction} autoComplete="off">
        <SubTitle>쪽지</SubTitle>
        <TableCols>
          <tbody>
            <tr>
              <th>제목</th>
              <td>{subject}</td>
            </tr>

            <tr>
              <th>보낸사람</th>
              <td>{senderEmail}</td>
            </tr>

            <tr>
              <th>내용</th>
              <td>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </td>
            </tr>
          </tbody>
        </TableCols>
        <div className='buttonGroup'>
        <BigButton
            type="button"
            color="dark"
            width={100}
            disabled={isPending}
            onClick={() => onDelete(seq)}
          >
            삭제
          </BigButton>
          <BigButton
            type="button"
            color="info"
            width={100}
            disabled={isPending}
            onClick={closeModal}
          >
            취소
          </BigButton>
        </div>
      </StyledForm>
    </>
  )
}

export default React.memo(DeleteModalForm)