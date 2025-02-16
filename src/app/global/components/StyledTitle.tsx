/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useContext, useLayoutEffect } from 'react'
import styled from 'styled-components'
import CommonContext from '../contexts/CommonContext'
import sizes from '../styles/sizes'
import colors from '../styles/colors'
import type { CommonType } from '../types/StyledType'

const { medium, big } = sizes

const { dark, info } = colors

// children = 사이트 제목
const _MainTitle = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  const {
    actions: { setTitle },
  } = useContext(CommonContext)

  useLayoutEffect(() => {
    setTitle(children)
  }, [children, setTitle])

  return <h1 className={className}>{children}</h1>
}

export const MainTitle = styled(_MainTitle)<CommonType>`
  padding: 15px 10px 15px;
  // margin: 0 0 25px;
  font-size: ${big};
  border-bottom: 2px solid ${info};
  color: ${dark};
  max-width: 1300px;
  min-width: 1000px;
  margin: 0 auto 25px;
`

export default _MainTitle

export const SubTitle = styled.h2`
  padding: 0;
  margin: 0 0 15px;
  font-size: ${medium};
  color: ${dark};
`
