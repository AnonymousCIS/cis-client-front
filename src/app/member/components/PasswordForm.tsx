import React from 'react'
import styled from 'styled-components'
import { Input } from '@/app/global/components/FormComponents'
import { BigButton } from '@/app/global/components/Buttons'

const StyledForm = styled.form``

const PasswordForm = ({ actionState, onChange, form, mode }) => {
  const [errors, formAction, isPending] = actionState
  return (
    <>
      {mode === true ? ( // 비밀번호 찾기 후 이메일로 넘기기 mode true
        <StyledForm action={formAction} autoComplete="off">
          <Input
            type="text"
            name="name"
            onChange={onChange}
            placeholder="이름"
            color="dark"
            value={form?.userName ?? ''}
          ></Input>
          <Input
            type="text"
            name="phoneNumber"
            onChange={onChange}
            placeholder="휴대폰번호"
            color="dark"
            value={form?.phoneNumber ?? ''}
          ></Input>
          <BigButton type="submit">이메일로 받기</BigButton>
        </StyledForm>
      ) : (
        // 비밀번호 변경 mode false
        <StyledForm>
          <Input
            type="password"
            name="password"
            onChange={onChange}
            placeholder="비밀번호"
            color="dark"
            value={form?.password ?? ''}
          ></Input>
          <Input
            type="password"
            name="confirmPassword"
            onChange={onChange}
            placeholder="비밀번호 확인"
            color="dark"
            value={form?.confirmPassword ?? ''}
          ></Input>
          <BigButton type="submit">비밀번호 변경</BigButton>
        </StyledForm>
      )}
    </>
  )
}

export default React.memo(PasswordForm)
