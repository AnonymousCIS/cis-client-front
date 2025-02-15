'use client'

import React from 'react'
import styled from 'styled-components'
import { TableRows } from '@/app/global/components/Tables'

const StyledForm = styled.form`
  th:nth-of-type(1) {
    width: 50px;
  }

  th:nth-of-type(2) {
    width: 150px;
  }

  th:nth-of-type(3) {
    width: 200px;
  }

  th:nth-of-type(4) {
    width: 300px;
  }

  th:nth-of-type(5) {
    width: 150px;
  }

  td {
    text-align: center;
  }
`

const ListLoanItem = ({ item }) => {
  const { loanName, bankName, category } = item

  return (
    <tr>
      <td>{loanName}</td>
      <td>{bankName}</td>
      <td>{category}</td>
    </tr>
  )
}

const ListItem = ({ items }) => {
  return (
    <StyledForm>
      <h2>대출 목록</h2>
      <TableRows>
        <thead>
          <tr>
            <th>대출명</th>
            <th>은행명</th>
            <th>종류</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((loan) => (
              <ListLoanItem key={'loan_' + loan.seq} item={loan} />
            ))
          ) : (
            <tr>
              <td colSpan={3} className="no-data">
                알맞는 대출상품이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </TableRows>
    </StyledForm>
  )
}

export default React.memo(ListItem)