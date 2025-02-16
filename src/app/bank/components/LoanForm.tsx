import React from 'react'
import styled from 'styled-components'
import type { CommonType } from '@/app/global/types/StyledType'
import { TableRows } from '@/app/global/components/Tables'
import colors from '@/app/global/styles/colors'
import sizes from '@/app/global/styles/sizes'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import { BigButton } from '@/app/global/components/Buttons'

const { info, dark } = colors
const { small } = sizes

const StyledForm = styled.form<CommonType>`
  margin-top: 10px;

  table {
    th {
      background: ${info};
      color: ${dark};
      font-size: ${small};
    }
    td {
      padding: 10px;
      text-align: center;
    }
  }
`

const LoanItems = ({ item, form, onClick }) => {
  const {
    loanName,
    bankNameStr,
    categoryStr,
    interestRate,
    limit,
    repaymentYear,
    seq,
    loanDescription,
  } = item

  const isChecked = form?.[seq]?.check || false

  const handleCheckboxClick = () => {
    onClick(seq, !isChecked) // seq와 체크 상태를 넘겨줌
  }

  return (
    <>
      <TableRows>
        <thead>
          <tr>
            <th>대출이름</th>
            <th>은행</th>
            <th>카테고리</th>
            <th>이자율</th>
            <th>대출금액</th>
            <th>대출상환년도</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{loanName}</td>
            <td>{bankNameStr}</td>
            <td>{categoryStr}</td>
            <td>{interestRate}%</td>
            <td>{limit.toLocaleString()}원</td>
            <td>{repaymentYear}년</td>
            <td>
              <div onClick={handleCheckboxClick}>
                {isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
              </div>
            </td>
          </tr>
        </tbody>
      </TableRows>
      <TableRows>
        <thead>
          <tr>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{loanDescription}</td>
          </tr>
        </tbody>
      </TableRows>
    </>
  )
}

const LoanForm = ({ items, form, onClick, onProcess }) => {
  return (
    <StyledForm>
      {items.map((item, i) => (
        <LoanItems key={i} item={item} form={form} onClick={onClick} />
      ))}
      <BigButton type="button" color="danger" onClick={() => onProcess(form)}>
        삭제
      </BigButton>
    </StyledForm>
  )
}

export default React.memo(LoanForm)
