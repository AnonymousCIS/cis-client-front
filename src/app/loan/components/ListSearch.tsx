'use client'
import React from 'react'
import { BigButton } from '@/app/global/components/Buttons'
import { TableCols } from '@/app/global/components/Tables'
import { CommonType } from '@/app/global/types/StyledType'
import { FaSearch } from 'react-icons/fa'
import { Input, Select } from '@/app/global/components/FormComponents'
import styled from 'styled-components'

// 스타일링 수정
const StyledForm = styled.form<CommonType>`
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  button[type='submit'] {
    display: block;
    margin: 20px auto;
  }

  th {
    width: 180px;
    text-align: left;
    padding-right: 10px;
  }

  .flex {
    display: flex;
    gap: 10px;

    select {
      margin-right: 5px;
      width: 180px;
    }

    input {
      flex-grow: 1;
    }
  }

  @media (max-width: 768px) {
    .flex {
      flex-direction: column;
      gap: 10px;
    }
  }
`

const options = [
  { value: 'ALL', label: '통합 검색' },
  { value: 'CARDNAME', label: '대출이름' },
  { value: 'BANKNAME', label: '은행이름' },
  { value: 'CATEGORY', label: '대출 카테고리' },
  { value: 'LIMIT', label: '최대 한도' },
  { value: 'loanDescription', label: '대출 설명' },
  { value: 'interestRate', label: '금리' },
  { value: 'repaymentYear', label: '상환년도' },
  { value: 'isOpen', label: '사용 가능 여부' },
  
]

const ListSearch = ({ form, onChange, onSubmit }) => {
  return (
    <StyledForm autoComplete="off" onSubmit={onSubmit}>
      <h2>검색</h2>
      <TableCols>
        <tbody>
          <tr>
            <th>검색어</th>
            <td className="flex">
              <Select
                name="sopt"
                options={options}
                selected={form?.sopt ?? 'ALL'}
                onChange={onChange}
              />
              <Input
                type="text"
                name="skey"
                value={form?.skey ?? ''}
                onChange={onChange}
              />
            </td>
          </tr>
        </tbody>
      </TableCols>
      <BigButton type="submit" color="primary" width={250}>
        <FaSearch />
        검색
      </BigButton>
    </StyledForm>
  )
}

export default React.memo(ListSearch)