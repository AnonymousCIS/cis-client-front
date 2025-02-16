import React from 'react'
import { TableCols } from '@/app/global/components/Tables'
import { SubTitle } from '@/app/global/components/StyledTitle'
import colors from '@/app/global/styles/colors'
import { BigButton } from '@/app/global/components/Buttons'
import styled from 'styled-components'

const { primary, white } = colors

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
  div {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`

const ModalViewForm = ({ form, closeModal }) => {

  return (
    <>
      <StyledForm>
        <SubTitle>카드 상세</SubTitle>
        <TableCols>
          <tbody>

            <tr>
              <th>카드명</th>
              <td>
                <span>{form?.cardName ?? ''}</span>
              </td>
            </tr>

            <tr>
              <th>카드 종류</th>
              <td>
                <span>{form?.cardTypeStr ?? ''}</span>
              </td>
            </tr>

            <tr>
              <th>카테고리</th>
              <td>
                <span>{form?.categoryStr ?? ''}</span>
              </td>
            </tr>

            <tr>
              <th>은행명</th>
              <td>
                <span>{form?.bankNameStr ?? ''}</span>
              </td>
            </tr>

            <tr>
              <th>카드 한도</th>
              <td>
                <span>{form?.limit ?? ''}</span>
              </td>
            </tr>

            <tr>
              <th>카드 설명</th>
              <td>
                <span>{form?.cardDescription ?? ''}</span>
              </td>
            </tr>
          </tbody>
        </TableCols>
        <div>
          <BigButton
            type="button"
            color="info"
            width={100}
            onClick={closeModal}
          >
            취소
          </BigButton>
        </div>
      </StyledForm>
    </>
  )
}

export default React.memo(ModalViewForm)
