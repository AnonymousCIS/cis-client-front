import React from 'react'
import styled from 'styled-components'

import { Input, Select } from '@/app/global/components/FormComponents'
import { BigButton } from '@/app/global/components/Buttons'
import Messages from '@/app/global/components/Messages'
import useUser from '../../global/hooks/useUser'

const StyledForm = styled.form`
  Input + Input {
    margin-bottom: 5px;
  }

  Select + Input {
    margin-bottom: 5px;
  }

  Select {
    margin-bottom: 10px;
  }
`

const bankNameOptions = [
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

const CreateForm = ({ actionState, onChange, form }) => {
  const [errors, formAction, isPending] = actionState
  const { userInfo } = useUser()
  const name = userInfo?.name

  return (
    <StyledForm action={formAction} autoComplete="off">
      <Select
        type="text"
        name="bankName"
        options={bankNameOptions}
        selected={form?.bankName ?? ''}
        onChange={onChange}
        placeholder="은행명"
        color="dark"
      />

      <Messages color="danger">{errors?.bankName}</Messages>

      <Input
        type="number"
        name="accountNumber"
        value={form?.accountNumber ?? ''}
        onChange={onChange}
        placeholder="' - ' 를 제외한 계좌번호를 입력하세요."
        color="dark"
      />

      <Messages color="danger">{errors?.accountNumber}</Messages>

      <Input
        type="text"
        name="name"
        value={form?.name ?? name}
        onChange={onChange}
        placeholder="예금주를 입력하세요."
        color="dark"
        readOnly
      />

      <Messages color="danger">{errors?.name}</Messages>

      <Input
        type="password"
        name="password"
        value={form?.password ?? ''}
        onChange={onChange}
        placeholder="계좌 비밀번호를 입력하세요."
        color="dark"
      />

      <Messages color="danger">{errors?.password}</Messages>

      <BigButton type="submit" disabled={isPending} color="primary">
        계좌등록
      </BigButton>

      <Messages color="danger">{errors?.global}</Messages>
    </StyledForm>
  )
}

export default React.memo(CreateForm)
