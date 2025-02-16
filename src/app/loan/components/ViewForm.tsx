'use client'

import React from 'react'
import styled from 'styled-components'
import { TableCols } from '@/app/global/components/Tables'
import colors from '@/app/global/styles/colors'
import { MainTitle } from '@/app/global/components/StyledTitle'
import { CommonType } from '@/app/global/types/StyledType'

const { secondary, white } = colors

const TableWrapper = styled.div`
  margin-top: 20px;
  padding: 20px;
`

const StyledForm = styled.form<CommonType>`
  table {
    margin-bottom: 30px;

    th {
      width: 180px;
      background: ${secondary};
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

  & > .center {
    display: flex;
    justify-content: center;
    gap: 5px;

    & > * {
      display: block;
    }
  }
`

const LogViewItem = ({ form }) => {
  const { seq } = form

  return (
    <TableWrapper>
      <MainTitle>대출 상세</MainTitle>
      <StyledForm>
        <TableCols>
          <tbody>
            <tr>
              <th>대출명</th>
              <td>
                <span>{form?.loanName ?? ''}</span>
              </td>
            </tr>

            <tr>
              <th>은행명</th>
              <td>
                <span>{form?.transBankName ?? ''}</span>
              </td>
            </tr>

            <tr>
              <th>대출 카테고리</th>
              <td>
                <span>{form?.transCategoryName ?? ''}</span>
              </td>
            </tr>

            <tr>
              <th>내용</th>
              <td>
                <span>{form?.loanDescription ?? ''}</span>
              </td>
            </tr>

            <tr>
              <th>최대 한도</th>
              <td>
                <span>{form?.limit ?? ''}</span>
              </td>
            </tr>
            <tr>
              <th>금리</th>
              <td>
                <span>{form?.interestRate ?? ''}</span>
              </td>
            </tr>
            <tr>
              <th>상환년도</th>
              <td>
                <span>{form?.repaymentYear ?? ''}</span>
              </td>
            </tr>
            <tr>
              <th>사용 가능 여부</th>
              <td>
                <span>{form?.isOpen ?? ''}</span>
              </td>
            </tr>
          </tbody>
        </TableCols>
      </StyledForm>
    </TableWrapper>
  )
}

export default React.memo(LogViewItem)