import React from 'react'
import styled from 'styled-components'
import { TableRows } from '@/app/global/components/Tables'
import {
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
  MdCheckBoxOutlineBlank,
} from 'react-icons/md'
import { SmallButton } from '@/app/global/components/Buttons'

const StyledForm = styled.form`
  th:nth-of-type(1) {
    width: 40px;
  }

  th:nth-of-type(2) {
    width: 80px;
  }

  th:nth-of-type(3) {
    width: 100px;
  }

  th:nth-of-type(4) {
    width: 100px;
  }

  th:nth-of-type(5) {
    width: 100px;
  }

  th:nth-of-type(6) {
    width: 80px;
  }

  td:nth-of-type(1),
  td:nth-of-type(2),
  td:nth-of-type(3),
  td:nth-of-type(4),
  td:nth-of-type(5) {
    text-align: center;
  }
`

const ListCardItem = ({ item }) => {
  const { seq, cardName, cardTypeStr, categoryStr, open } = item

  //  const frontUrl = process.env.NEXT_PUBLIC_URL + `card/view/${seq}`

  return (
    <tr>
      <td></td>
      <td>{seq}</td>
      <td>{cardName}</td>
      <td>{cardTypeStr}</td>
      <td>{categoryStr}</td>
      <td>
        <a href={`/card/view/${seq}`} target="_blank">
          <SmallButton type="button" color="primary" width={120}>
            미리보기
          </SmallButton>
        </a>
      </td>
    </tr>
  )
}

const ListForm = ({ items }) => {
  return (
    <StyledForm>
      <TableRows>
        <thead>
          <tr>
            <th>
              <MdCheckBoxOutlineBlank />
            </th>
            <th>카드 ID</th>
            <th>카드명</th>
            <th>카드 종류</th>
            <th>카테고리</th>
            <th>공개 여부</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((item) => (
              <ListCardItem key={'card_' + item.seq} item={item} />
            ))
          ) : (
            <tr>
              <td colSpan={6} className="no-data">
                조회 카드가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </TableRows>
    </StyledForm>
  )
}

export default React.memo(ListForm)