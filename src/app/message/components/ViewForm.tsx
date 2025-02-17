import { SmallButton } from '@/app/global/components/Buttons'
import { TableCols } from '@/app/global/components/Tables'
import { CommonType } from '@/app/global/types/StyledType'
import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form<CommonType>``

const ViewForm = ({ data, onDelete }) => {
  const { subject, content, senderEmail } = data
  return (
    <>
      <StyledForm>
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
        <SmallButton type="button" color="dark" width={120} onClick={onDelete}>
          삭제
        </SmallButton>
      </StyledForm>
    </>
  )
}

export default React.memo(ViewForm)
