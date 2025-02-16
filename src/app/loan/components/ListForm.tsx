'use client'

import React from 'react'
import styled from 'styled-components'
import { TableRows } from '@/app/global/components/Tables'

const StyledForm = styled.form`
  th:nth-of-type(1) {
    width: 100px; /* 대출명 열 너비 증가 */
  }

  th:nth-of-type(2) {
    width: 150px;
  }

  th:nth-of-type(3) {
    width: 200px;
  }

  th:nth-of-type(4) {
    width: 500px;
  }

  th:nth-of-type(5) {
    width: 150px;
  }

  th:nth-of-type(6) {
    width: 100px;
  }

  th:nth-of-type(7) {
    width: 80px; 
  }
 th:nth-of-type(8) {
  width: 80px;
}
  td {
    text-align: center;
  }
`

const bankNameKo = {
    HANKUK: '한국은행',
    KB: '국민은행',
    SC: '제일은행',
    CITY: '한국시티은행',
    HANA: '하나은행',
    SHINHAN: '신한은행',
    KBANK: 'K-뱅크',
    KAKAO: '카카오은행',
    TOSS: '토스',
    SUHYUP: '수협은행',
    BUSAN: '부산은행',
    KYUNGNAM: '경남은행',
    KYANGJOO: '광주은행',
    JUNBOK: '전북은행',
    JEJOO: '제주은행',
    LOTTE: '롯데카드',
    NONGHYUP: '농협은행',
    SAMSUNG: '삼성카드',
    HYUNDAI: '현대카드',
    WOORI: '우리은행',
    SINHYUP: '신협은행',
    SAEMAEULGEUMGO: '새마을금고',
    WOOCAEKUK: '우체국',
  }
  
const categoryName ={
    CREDITLOAN: "신용대출",
    MORTGAGELOAN: "담보대출" // 담보대출
}

const ListLoanItem = ({ item }) => {
  const { loanName, bankName, category,limit,interestRate,repaymentYear,isOpen, loanDescription } = item

  const transBankName = bankNameKo[bankName] || bankName
  const transCategoryName = categoryName[category] || category
  return (
    <tr>
      <td>{loanName}</td>
      <td>{transBankName}</td>
      <td>{transCategoryName}</td>
      <td>{loanDescription}</td>
      <td>{limit}</td>
      <td>{interestRate}</td>
      <td>{repaymentYear}</td>
      <td>{isOpen}</td>
    </tr>
  )
}

const ListItem = ({ items }) => {
  return (
    <StyledForm>
      <h2>대출 목록</h2>
      <TableRows>
        <thead>
          <tr>
            <th>대출명</th>
            <th>은행명</th>
            <th>대출 카테고리리</th>
            <th>대출 설명</th>
            <th>최대 한도</th>
            <th>금리</th>
            <th>상환년도</th>
            <th>사용 가능 여부</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((loan) => (
              <ListLoanItem key={'loan_' + loan.seq} item={loan} />
            ))
          ) : (
            <tr>
              <td colSpan={8} className="no-data">
                알맞는 대출상품이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </TableRows>
    </StyledForm>
  )
}

export default React.memo(ListItem)
