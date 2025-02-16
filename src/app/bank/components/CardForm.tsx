import React from 'react'
import styled from 'styled-components'
import type { CommonType } from '@/app/global/types/StyledType'

const StyledForm = styled.form<CommonType>``

const CardRunFom = ({ item }) => {
  const { data } = item
  return <StyledForm></StyledForm>
}

export default React.memo(CardRunFom)
