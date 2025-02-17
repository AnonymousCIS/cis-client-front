'use client'

import React from 'react'
import { styled } from 'styled-components'
import colors from '../../styles/colors'
import sizes from '../../styles/sizes'
import { useSearchParams } from 'next/navigation'

const { dark, light, info, secondary } = colors
const { big } = sizes

const StyledFooter = styled.footer`
  background: ${dark};
  min-height: 200px;
  color: ${light};
  font-size: ${big};

  .top,
  .mid,
  .bot {
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;

    div + div {
      margin-left: 100px;
    }

    .left {
      background: ${info};
      color: ${dark};
    }

    .center {
      background: ${info};
      color: ${dark};
    }

    .right {
      background: ${info};
      color: ${dark};
    }
  }
`

const Footer = () => {
  const searchParams = useSearchParams()

  return searchParams.get('popup') === 'true' ? (
    <></>
  ) : (
    <StyledFooter>
      <div className="layout-width">
        <div className="top">
          <div className="left">EX)Team CIS-Anonymous 등 🥕.top.left 영역 </div>
          <div className="center">.top.center 영역</div>
          <div className="right">.top.right 영역</div>
        </div>
        <div className="mid">
          <div className="left">.mid.left 영역</div>
          <div className="center">.mid.center 영역</div>
          <div className="right">.mid.right 영역</div>
        </div>
        <div className="bot">
          <div className="left">.bot.left 영역</div>
          <div className="center">.bot.center 영역</div>
          <div className="right">.bot.right 영역</div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default React.memo(Footer)
