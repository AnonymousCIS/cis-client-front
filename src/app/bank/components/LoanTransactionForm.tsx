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
  { value: 'CREDITLOAN', label: '신용대출' },
  { value: 'MORTGAGELOAN', label: '담보대출' },
]

const CardTransactionForm = ({ form, onClick, onChange, errors }) => {
  return (
    <>
      <StyledForm>
        <FormWrapper>
          <Wrapper>
            <Select
              name="category"
              options={options}
              selected={form?.category ?? ''}
              onChange={onChange}
              width={180}
              color="dark"
            />
          </Wrapper>
          <Messages color="danger">{errors?.category}</Messages>
          <BigButton type="button" onClick={() => onClick()}>
            추천받기
          </BigButton>
        </FormWrapper>
      </StyledForm>
    </>
  )
}

export default React.memo(CardTransactionForm)
