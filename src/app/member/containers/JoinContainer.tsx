'use client'
import React, { useState } from 'react'
import { BigButton } from '@/app/global/components/Buttons'
import { TableCols } from '@/app/global/components/Tables'
import { CommonType } from '@/app/global/types/StyledType'
import { FaSearch } from 'react-icons/fa'
import { Select } from '@/app/global/components/FormComponents'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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

// 기존 옵션에 추가된 카테고리 옵션
const options = [
  { value: 'ALL', label: '통합 검색' },
  { value: 'CARDNAME', label: '카드이름' },
  { value: 'BANKNAME', label: '은행이름' },
  { value: 'CATEGORY', label: '카테고리' },
  { value: 'CARDTYPE', label: '카드타입별' },
  { value: 'CARDMAXLIMIT', label: '최대한도' },
  { value: 'CARDMINLIMIT', label: '최소한도' },
  { value: 'CREATEDAT', label: '시작날짜' },
  { value: 'DELETEDAT', label: '만료일자' },
]

const categoryOptions = [
  { value: 'SHOPPING', label: '쇼핑 (온라인, 할인점, 백화점, 아울렛, 면세점 등)' },
  { value: 'LIFE', label: '생존 (병원약국, 커피제과, 교통, 영화관, 주유, 통신 등)' },
  { value: 'TRAVEL', label: '여행행 (여행, 항공, 해외 등)' },
  { value: 'LIVING', label: '일상상 (편의점, 음식점, 교육, 배달앱, 보험, 생활비 등)' },
]

const ListSearch = ({ form, onChange, onSubmit, onSelectDate }) => {
  const [selectedOption, setSelectedOption] = useState(form?.sopt ?? 'ALL')
  const [selectedCategory, setSelectedCategory] = useState(form?.category ?? '')
  const [startDate, setStartDate] = useState(form?.startDate ?? null)
  const [endDate, setEndDate] = useState(form?.endDate ?? null)

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value)
    onChange(e)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
    onChange(e)
  }

  const handleStartDateChange = (date) => {
    setStartDate(date)
    onSelectDate(date, 'startDate')
  }

  const handleEndDateChange = (date) => {
    setEndDate(date)
    onSelectDate(date, 'endDate')
  }

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
                selected={selectedOption}
                onChange={handleSelectChange}
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

          {/* 카테고리 선택 시 카테고리 옵션 보여주기 */}
          {selectedOption === 'CATEGORY' && (
            <tr>
              <th>카테고리</th>
              <td>
                <Select
                  name="category"
                  options={categoryOptions}
                  selected={selectedCategory}
                  onChange={handleCategoryChange}
                />
              </td>
            </tr>
          )}

          {/* 시작날짜 선택 */}
          {selectedOption === 'CREATEDAT' && (
            <tr>
              <th>시작날짜</th>
              <td>
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="시작날짜를 선택하세요"
                  isClearable
                />
              </td>
            </tr>
          )}

          {/* 만료일자 선택 */}
          {selectedOption === 'DELETEDAT' && (
            <tr>
              <th>만료일자</th>
              <td>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="만료일자를 선택하세요"
                  isClearable
                />
              </td>
            </tr>
          )}

          {/* 최대한도/최소한도 선택 시 */}
          {(selectedOption === 'CARDMAXLIMIT' || selectedOption === 'CARDMINLIMIT') && (
            <tr>
              <th>{selectedOption === 'CARDMAXLIMIT' ? '최대한도' : '최소한도'}</th>
              <td>
                <Input
                  type="number"
                  name={selectedOption.toLowerCase()}
                  value={form?.[selectedOption.toLowerCase()] ?? ''}
                  onChange={onChange}
                  placeholder={selectedOption === 'CARDMAXLIMIT' ? '최대한도를 입력하세요' : '최소한도를 입력하세요'}
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