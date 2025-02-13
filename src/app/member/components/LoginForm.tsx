import React from 'react'
import styled from 'styled-components'
import { Input } from '@/app/global/components/FormComponents'
import { BigButton, ButtonGroup } from '@/app/global/components/Buttons'
import Messages from '@/app/global/components/Messages'

const StyledForm = styled.form`
  Input + Input {
    margin-bottom: 5px;
  }
  button {
    margin-bottom: 5px;
  }
`

const LoginForm = ({ actionState, onChange, form }) => {
  const [errors, formAction, isPending] = actionState

  return (
    <StyledForm action={formAction} autoComplete="off">
      <Input
        type="text"
        name="email"
        value={form?.email ?? ''}
        onChange={onChange}
        placeholder="이메일"
        color="dark"
      />

      <Messages color="danger">{errors?.email}</Messages>

      <Input
        type="password"
        name="password"
        value={form?.password ?? ''}
        onChange={onChange}
        placeholder="비밀번호"
        color="dark"
      />

      <Messages color="danger">{errors?.password}</Messages>

      <BigButton type="submit" disabled={isPending} color="primary">
        로그인
      </BigButton>
      <a href="/member/password/find">
        <BigButton type="button" disabled={isPending} color="info">
          비밀번호찾기
        </BigButton>
      </a>

      <Messages color="danger">{errors?.global}</Messages>
    </StyledForm>
  )
}

export default React.memo(LoginForm)
