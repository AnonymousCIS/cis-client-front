'use client'
import React from 'react'
import { BigButton, SmallButton } from '@/app/global/components/Buttons'
import { MainTitle } from '@/app/global/components/StyledTitle'
import { TableCols } from '@/app/global/components/Tables'
import { CommonType } from '@/app/global/types/StyledType'
import { FaSearch } from 'react-icons/fa'
import { Input, Select } from '@/app/global/components/FormComponents'
import styled from 'styled-components'
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md'

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

const ListSearch = ({ form, onChange, onSubmit,onClick }) => {
  return (
    <StyledForm onSubmit={onSubmit} autoComplete="off">
      <TableCols>
        <tbody>
          <tr>
            <th>통합 검색</th>
            <td className="flex">
              <Input
                type="text"
                name="skey"
                value={form?.skey ?? ''}
                onChange={onChange}
                placeholder='검색어를 입력해주세요'
              />
            </td>
          </tr>
          <tr>
            <th>카드 종류</th>
            <td
              onClick={() => onClick('', !Boolean(form?.skey))}
              className="table-check"
            >
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              개인 체크
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              개인 신용
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              법인 체크
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              법인 신용
            </td>
          </tr>

          <tr>
            <th>카테고리</th>
            <td
              onClick={() => onClick('', !Boolean(form?.skey))}
              className="table-check"
            >
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              SHOPPING
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              LIFE
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              TRAVEL
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              LIVING
            </td>
          </tr>

          <tr>
            <th>은행명</th>
            <td
              onClick={() => onClick('', !Boolean(form?.skey))}
              className="table-check"
            >
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              한국은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              국민은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              제일은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              한국시티은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              하나은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              신한은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              K-뱅크
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              카카오
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              토스
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              수협은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              부산은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              경남은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              광주은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              전북은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              제주은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              롯데카드
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              농협은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              삼성카드
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              현대카드
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              우리은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              신협은행
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              새마을금고
              {form?.skey === 'PersonalCheck' ? (
                <MdOutlineCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
              우체국
            </td>
          </tr>

          <tr>
            <th>카드 한도</th>
            <td>
              <Input type="number" width={250} placeholder="최소 금액" />
              ~
              <Input type="number" width={250} placeholder="최대 금액" />
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