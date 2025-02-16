'use client'
import React from 'react'
import { BigButton } from '@/app/global/components/Buttons'
import { TableCols } from '@/app/global/components/Tables'
import { CommonType } from '@/app/global/types/StyledType'
import { FaSearch } from 'react-icons/fa'
import { Input, Select } from '@/app/global/components/FormComponents'
import styled from 'styled-components'

const StyledForm = styled.form<CommonType>`
  margin-bottom: 35px;
  button[type='submit'] {
    display: block;
    margin: 15px auto 0;
  }

  th {
    width: 180px;
  }

  .flex {
    display: flex;

    select {
      margin-right: 5px;
    }

    select + input {
      flex-grow: 1;
    }
  }
`

const options = [
  { value: 'ALL', label: '통합 검색' },
  { value: 'CARDNAME', label: '카드이름' },
  { value: 'BANKNAME', label: '은행이름' },
  { value: 'CATEGORY', label: '카테고리' },
  { value: 'CARDTYPE', label: '카드타입별' },
  { value: 'CARDMAXLIMIT', label: '최대한도' },
  { value: 'CARDMINLIMIT', label: '최소한도' },
  { value: 'CREATEDAT', label: '날짜' },
]

const categoryOptions = [
  { value: 'SHOPPING', label: 'SHOPPING (온라인, 할인점, 백화점, 아울렛, 면세점 등)' },
  { value: 'LIFE', label: 'LIFE (병원약국, 커피제과, 교통, 영화관, 주유, 통신 등)' },
  { value: 'TRAVEL', label: 'TRAVEL (여행, 항공, 해외 등)' },
  { value: 'LIVING', label: 'LIVING (편의점, 음식점, 교육, 배달앱, 보험, 생활비 등)' },
]

// 은행 목록 추가
const bankOptions = [
  { value: 'HANKUK', label: '한국은행' },
  { value: 'KB', label: '국민은행' },
  { value: 'SC', label: '제일은행' },
  { value: 'CITY', label: '한국시티은행' },
  { value: 'HANA', label: '하나은행' },
  { value: 'SHINHAN', label: '신한은행' },
  { value: 'KBANK', label: 'K-뱅크' },
  { value: 'KAKAO', label: '카카오' },
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
  { value: 'WOOCAEKUK', label: '우체국' },
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
                width={180}
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
              <th>은행이름</th>
              <td>
                <Select
                  name="bankname"
                  options={bankOptions}
                  selected={form?.bankname ?? ''}
                  onChange={onChange}
                />
              </td>
            </tr>
          )}

      {(form?.sopt === 'CARDMAXLIMIT' || form?.sopt === 'CARDMINLIMIT') && (
         <tr>
           <th>{form?.sopt === 'CARDMAXLIMIT' ? '한도 (최대)' : '한도 (최소)'}</th>
             <td>
               <Input
                type="number"
                name={form?.sopt}
                value={form?.[form?.sopt] ?? ''}
                onChange={onChange}
                placeholder={form?.sopt === 'CARDMAXLIMIT' ? '최대 한도를 입력하세요' : '최소 한도를 입력하세요'}
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