'use client'

import React from 'react'
import styled from 'styled-components'
import { TableRows } from '@/app/global/components/Tables'

// import { MainTitle } from '@/app/global/components/StyledTitle'


const StyledForm = styled.form`
  th:nth-of-type(1) {
    width: 50px;
  }

  th:nth-of-type(2) {
    width: 150px;
  }

  th:nth-of-type(3) {
    width: 300px;
  }

  th:nth-of-type(4) {
    width: 150px;
  }

  th:nth-of-type(5) {
    width: 150px;
  }
  th:nth-of-type(6) {
    width: 200px;
  }
   th:nth-of-type(7) {
    width: 200px;
  }

  td {
    text-align: center;
  }
`

const ListCardItem = ({ item }) => {
  const { cardName, bankName, cardLimitMax, cardLimitMin, sDate, dDate, category, cardDescription } = item

  return (
    <tr>
      <td>{cardName}</td>
      <td>{bankName}</td>
      <td>{cardDescription}</td>
      <td>{cardLimitMax}</td>
      <td>{cardLimitMin}</td>
      <td>{sDate}</td>
      <td>{dDate}</td>
      <td>{category}</td>
    </tr>
  )
}

const ListItem = ({ items }) => {
  return (
    <StyledForm>

      <h2>카드 목록</h2>

      <TableRows>
        <thead>
          <tr>
            <th>카드명</th>
            <th>은행명</th>
            <th>카드 설명</th>
            <th>최대한도</th>
            <th>최소한도</th>
            <th>시작날짜</th>
            <th>만료일자</th>
            <th>카테고리</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((card) => (
              <ListCardItem key={'cards_' + card.seq} item={card} />
            ))
          ) : (
            <tr>
              <td colSpan={6} className="no-data">
                카드가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </TableRows>
    </StyledForm>
  )
}

export default React.memo(ListItem)
