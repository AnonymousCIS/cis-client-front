import React from 'react'
import { BigButton, SmallButton } from '@/app/global/components/Buttons'
import { MainTitle } from '@/app/global/components/StyledTitle'
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

const ListSearch = ({ form, onChange, onSubmit }) => {
  return (
    <StyledForm autoComplete="off" onSubmit={onSubmit}>
      <MainTitle>검색</MainTitle>
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
                onChange={onChange} // 검색어 변경 시 상태 업데이트
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
