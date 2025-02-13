import React from 'react'
import styled from 'styled-components'

import { Input } from '@/app/global/components/FormComponents'
import { BigButton } from '@/app/global/components/Buttons'
import Messages from '@/app/global/components/Messages'
import useUser from '../../global/hooks/useUser'

const StyledForm = styled.form`
  Input + Input {
    margin-bottom: 5px;
  }
`

const CreateForm = ({ actionState, onChange, form }) => {
  const [errors, formAction, isPending] = actionState
  const { userInfo } = useUser()
  const name = userInfo?.name

  return (
    <StyledForm action={formAction} autoComplete="off">
      <Input
        type="text"
        name="bankName"
        value={form?.bankName ?? ''}
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
        placeholder="계좌번호"
        color="dark"
      />

      <Messages color="danger">{errors?.accountNumber}</Messages>

      <Input
        type="text"
        name="name"
        value={form?.name ?? name}
        onChange={onChange}
        placeholder="예금주"
        color="dark"
        readOnly
      />

      <Messages color="danger">{errors?.name}</Messages>

      <Input
        type="password"
        name="password"
        value={form?.password ?? ''}
        onChange={onChange}
        placeholder="계좌 비밀번호"
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
