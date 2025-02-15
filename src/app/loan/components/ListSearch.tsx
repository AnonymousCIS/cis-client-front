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
    gap: 10px; /* 선택 요소 간의 간격 추가 */

    select {
      margin-right: 5px;
      width: 180px; /* Select 요소의 고정 폭 */
    }

    input {
      flex-grow: 1;
    }
  }

  /* 반응형 디자인 */
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
  { value: 'CATEGORY', label: '카테고리' },
]

const categoryOptions = [
  { value: 'CREDITLOAN', label: '신용대출' },
  { value: 'MORTGAGELOAN', label: '담보대출' }
]

const bankOptions = [
  { value: 'HANKUK', label: '한국은행' },
  { value: 'KB', label: '국민은행' },
  { value: 'SC', label: '제일은행' },
  { value: 'CITY', label: '한국시티은행' },
  { value: 'HANA', label: '하나은행' },
  { value: 'SHINHAN', label: '신한은행' },
  { value: 'KBANK', label: 'K-뱅크' },
  { value: 'KAKAO', label: '카카오은행' },
  { value: 'TOSS', label: '토스' },
  { value: 'SUHYUP', label: '수협은행' },
  { value: 'BUSAN', label: '부산은행' },
  { value: 'KYUNGNAM', label: '경남은행' },
  { value: 'KYANGJOO', label: '광주은행' },
  { value: 'JUNBOK', label: '전북은행' },
  { value: 'JEJOO', label: '제주은행' },
  { value: 'LOTTE', label: '롯데카드' },
  { value: 'NONGHYUP', label: '농협은행' },
  { value: 'SAMSUNG', label: '삼성카드' },
  { value: 'HYUNDAI', label: '현대카드' },
  { value: 'WOORI', label: '우리은행' },
  { value: 'SINHYUP', label: '신협은행' },
  { value: 'SAEMAEULGEUMGO', label: '새마을금고' },
  { value: 'WOOCAEKUK', label: '우체국' }
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

          {form?.sopt === 'BANKNAME' && (
            <tr>
              <th>은행 선택</th>
              <td>
                <Select
                  name="bank"
                  options={bankOptions}
                  selected={form?.bank ?? ''}
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