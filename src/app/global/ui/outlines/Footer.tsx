'use client'

import React from 'react'
import Image from 'next/image'
import { styled } from 'styled-components'
import colors from '../../styles/colors'
import sizes from '../../styles/sizes'

import { useSearchParams } from 'next/navigation'
import icon1 from './images/github-white-icon.png'
import icon2 from './images/logo.png'
const { dark, light, info, secondary, white } = colors
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
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;

    div + div {
      margin-left: 100px;
    }

    .left {
      //background: ${info};
      color: ${info};
    }

    .center {
      //background: ${info};
      color: ${info};
    }

    .right {
      //background: ${info};
      color: ${info};
    }
  }

  .name {
    font-size: 40px;
    color: ${white};
  }

  .nameSub {
    color: ${white};
    font-size: 15.5px;
  }

  .logoName {
    display: flex;
    flex-direction: row;
    color: ${white};
    align-items: center;
  }

  .call {
    font-size: 26px;
    color: ${white};
  }

  .callSubs {
    font-size: 15px;
    color: ${white};
  }

  a {
    color: #fff;
  }

  .github {
    display: flex;
    flex-direction: row;
    gap: 4.2px;
  }

  li {
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 0px 0px 0px 18px; /* 텍스트와 바 간격 */
    align-items: center;
  }

  // li::before {
  //   content: ''; /* 커스텀 요소 삽입 */
  //   position: absolute;
  //   left: 0; /* 수직선 위치 */
  //   top: 5px;
  //   bottom: 0;
  //   width: 0.1px; /* 수직선 두께 */
  //   height: 13px;
  //   background-color: gray; /* 수직선 색상 */
  // }

  .board {
    color: ${white};
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
          <div className="left">
            <div className="logoName">
              <a
                className="git"
                href="#"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Image src={icon2} alt="아이콘" width={100} height={100} />
              </a>
              <span>©Team CIS-Anonymous</span>
            </div>
          </div>
          <div className="center">
            <span className="nameSub">
              곽경섭 김시원 오준학 차태일 우현수 박진주
            </span>
            <br />
            <div className="github">
              <a className="git" href="">
                <Image src={icon1} alt="아이콘" width={40} height={40} />
              </a>
              <a className="git" href="https://github.com/pab1010">
                <Image src={icon1} alt="아이콘" width={40} height={40} />
              </a>
              <a className="git" href="">
                <Image src={icon1} alt="아이콘" width={40} height={40} />
              </a>
              <a className="git" href="https://github.com/chataeil">
                <Image src={icon1} alt="아이콘" width={40} height={40} />
              </a>
              <a className="git" href="https://github.com/BDloverHS">
                <Image src={icon1} alt="아이콘" width={40} height={40} />
              </a>
              <a className="git" href="https://github.com/JINI-PeachFuzz">
                <Image src={icon1} alt="아이콘" width={40} height={40} />
              </a>
            </div>
          </div>
          {/* <div className="right"></div> */}
        </div>
        <div className="mid">
          <div className="left">
            본 사이트의 콘텐츠에 대한 무단 복제 및 도용을 금하며 이를 어길 시
            법적 조치를 받을 수 있습니다.
          </div>
          {/* <div className="center">.mid.center 영역</div>
          <div className="right">.mid.right 영역</div> */}
        </div>
        <div className="bot">
          <div className="left">
            <li className="board">
              <a href="">QnA ( 1:1 문의 )</a>
              <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <a href="">공지사항</a>
            </li>
            <br />
            <span>보이스피싱 금융사고: 080-123-1234(수신자 부담)</span>
          </div>
          {/* <div className="center">.bot.center 영역</div> */}
          <div className="right">
            <span className="call">고객센터 1981-1125</span>
            <br />
            <span className="callSubs">
              평일 : 09:30 ~ 18:30 <br />
              점심시간 : 오후 01:30 ~ 02:30 <br />
              주말 및 공휴일은 휴무입니다.
            </span>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default React.memo(Footer)
