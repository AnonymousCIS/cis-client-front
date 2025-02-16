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
  { value: 'interestRate', label: '금리' },
  { value: 'repaymentYear', label: '상환년도' },
  { value: 'isOpen', label: '사용 가능 여부' },
]

const categoryOptions = [
  { value: 'CREDITLOAN', label: '신용대출' },
  { value: 'MORTGAGELOAN', label: '담보대출' }
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
          {form?.sopt === 'CATEGORY' && (
            <tr>
              <th>카테고리</th>
              <td>
                <Select
                  name="category"
                  options={categoryOptions}
                  selected={form?.category ?? ''}
                  onChange={onChange}
                />
              </td>
            </tr>
          )}
          {form?.sopt === 'LIMIT' && (
            <tr>
              <th>최대 한도</th>
              <td>
                <Input
                  type="number"
                  name="limit"
                  value={form?.limit ?? ''}
                  onChange={onChange}
                  placeholder="최대 한도를 입력하세요"
                />
              </td>
            </tr>
          )}
          {form?.sopt === 'interestRate' && (
            <tr>
              <th>금리</th>
              <td>
                <Input
                  type="number"
                  name="interestRate"
                  value={form?.interestRate ?? ''}
                  onChange={onChange}
                  placeholder="금리를 입력하세요"
                />
              </td>
            </tr>
          )}
          {form?.sopt === 'repaymentYear' && (
            <tr>
              <th>상환년도</th>
              <td>
                <Input
                  type="number"
                  name="repaymentYear"
                  value={form?.repaymentYear ?? ''}
                  onChange={onChange}
                  placeholder="상환년도를 입력하세요"
                />
              </td>
            </tr>
          )}
          {form?.sopt === 'isOpen' && (
            <tr>
              <th>사용 가능 여부</th>
              <td>
                <Select
                  name="isOpen"
                  options={[{ value: 'true', label: '가능' }, { value: 'false', label: '불가능' }]}
                  selected={form?.isOpen ?? ''}
                  onChange={onChange}
                />
              </td>
            </tr>
          )}
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
