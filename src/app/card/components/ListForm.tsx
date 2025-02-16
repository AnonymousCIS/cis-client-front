import React from 'react'
import styled from 'styled-components'
import { TableRows } from '@/app/global/components/Tables'
import { SmallButton } from '@/app/global/components/Buttons'

const StyledForm = styled.form`
  th:nth-of-type(1) {
    width: 100px;
  }

  th:nth-of-type(2) {
    width: 100px;
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
    width: 100px;
  }

  th:nth-of-type(7) {
    width: 500px;
  }

  td:nth-of-type(1),
  td:nth-of-type(2),
  td:nth-of-type(3),
  td:nth-of-type(4),
  td:nth-of-type(5),
  td:nth-of-type(6),
  td:nth-of-type(7),
  td:nth-of-type(8) {
    text-align: center;
  }

  .btn {
    display: flex;
    justify-content: center;
    gap: 5px;
  }

  .check {
    span + span {
      margin-left: 15px;
    }
  }
`

const ListCardItem = ({ item, onModal }) => {
  const {
    cardName,
    bankNameStr,
    cardTypeStr,
    categoryStr,
    limit,
    annualFee,
    cardDescription,
  } = item

  //  const frontUrl = process.env.NEXT_PUBLIC_URL + `card/view/${seq}`

  return (
    <tr>
      <td>{cardName}</td>
      <td>{bankNameStr}</td>
      <td>{cardTypeStr}</td>
      <td>{categoryStr}</td>
      <td>{annualFee}</td>
      <td>{limit}</td>
      <td>{cardDescription}</td>
      <td className="btn">
        <SmallButton
          type="button"
          color="primary"
          width={100}
          onClick={() => onModal(item)}
        >
          상세보기
        </SmallButton>
      </td>
    </tr>
  )
}

const ListForm = ({ items, onClick, onModal }) => {
  return (
    <StyledForm>
      <TableRows>
        <thead>
          <tr>
            <th>카드명</th>
            <th>은행명</th>
            <th>카드 종류</th>
            <th>카테고리</th>
            <th>연회비</th>
            <th>한도</th>
            <th>카드 설명</th>
            <th>새 창</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((item) => (
              <ListCardItem
                key={'card_' + item.seq}
                item={item}
                onClick={onClick}
                onModal={onModal}
              />
            ))
          ) : (
            <tr>
              <td colSpan={7} className="no-data">
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
