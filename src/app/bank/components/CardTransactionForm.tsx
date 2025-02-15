import { Input, Select } from '@/app/global/components/FormComponents'
import React from 'react'
import styled from 'styled-components'
import { BigButton } from '@/app/global/components/Buttons'
import Messages from '@/app/global/components/Messages'

const StyledForm = styled.form``

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const options = [
  { value: 'PersonalCheck', label: '개인체크' },
  { value: 'PersonalCredit', label: '개인신용' },
  { value: 'CorporateCheck', label: '법인체크' },
  { value: 'CorporateCredit', label: '법인신용' },
]

const CardTransactionForm = ({ form, actionState, onChange, title }) => {
  const [errors, formAction, isPending] = actionState
  return (
    <>
      <StyledForm action={formAction}>
        <FormWrapper>
          <Wrapper>
            <Input
              type="number"
              name="annualFee"
              value={form?.annualFee ?? ''}
              onChange={onChange}
              placeholder="연회비를 입력하세요. 1000 ~ 30000"
              color="dark"
            />
            <Select
              name="cardType"
              options={options}
              selected={form?.cardType ?? ''}
              onChange={onChange}
              width={180}
              color="dark"
            />
          </Wrapper>
          <Messages color="danger">{errors?.annualFee}</Messages>
          <Messages color="danger">{errors?.cardType}</Messages>
          <BigButton type="submit" disabled={isPending}>
            추천받기
          </BigButton>
        </FormWrapper>
      </StyledForm>
    </>
  )
}

export default React.memo(CardTransactionForm)
