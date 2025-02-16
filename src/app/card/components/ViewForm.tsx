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
      <MainTitle>카드 상세</MainTitle>
      <StyledForm>
        <TableCols>
          <tbody>
            <tr>
              <th>카드명</th>
              <td>
                <span>{form?.cardName ?? ''}</span>
              </td>
            </tr>

            <tr>
              <th>은행명</th>
              <td>
                <span>{form?.bankName ?? ''}</span>
              </td>
            </tr>

            <tr>
              <th>카드 설명명</th>
              <td>
                <span>{form?.cardDescription ?? ''}</span>
              </td>
            </tr>
            <tr>
              <th>카테고리</th>
              <td>
                <span>{form?.category ?? ''}</span>
              </td>
            </tr>
          </tbody>
        </TableCols>
      </StyledForm>
    </TableWrapper>
  )
}

export default React.memo(LogViewItem)