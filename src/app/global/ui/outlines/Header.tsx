'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { styled } from 'styled-components'
import { RiLoginBoxLine, RiLogoutBoxLine } from 'react-icons/ri'
import { MdContactPage } from 'react-icons/md'
import { FaUserPlus, FaHome, FaSearch } from 'react-icons/fa'
import { GrUserAdmin } from 'react-icons/gr'
import colors from '../../styles/colors'
import sizes from '../../styles/sizes'
import logo from '../../assets/images/logo2.png'
import useUser from '../../hooks/useUser'
import { useSearchParams } from 'next/navigation'

const { white, primary, secondary, info, lightgreen, light, dark } = colors
const { medium, big, normal } = sizes

// scss 문법
const StyledHeader = styled.header`
  .site-top {
    background: ${light};
    height: 45px;

    .layout-width {
      display: flex;
      justify-content: space-between;

      & > div {
        display: flex;
        align-items: center;
        height: 45px;

        .icon-cls {
          color: ${dark};
        }

        a + a {
          margin-left: 10px;
        }
      }

      svg {
        font-size: ${big};
      }
    }
  }

  .logo-search {
    .layout-width {
      display: flex;
      justify-content: space-between;
      height: 150px;
      align-items: center;
    }
  }
`

const StyledForm = styled.form`
  width: 500px;
  display: flex;
  border: 3px solid ${secondary};

  margin-right: 400px;
  button {
    width: 45px;
    background: ${secondary};
    color: ${white};
    border: 0;
    cursor: pointer;

    svg {
      font-size: ${big};
    }
  }

  input {
    flex-grow: 1;
    border: 0;
    padding: 10px;
    font-size: ${medium};
  }
`

const StyledMenu = styled.nav`
  background: ${primary};

  .layout-width {
    display: flex;
    height: 50px;

    a {
      color: ${light};
      font-size: ${medium};
      padding: 0 40px;
      line-height: 50px;
      transition: all 0.4s;
      display: block;

      &:hover,
      &.on {
        color: ${primary};
        background: ${light};
      }
    }

    .subMenu {
      display: none;
      position: absolute;
      background: ${info};
      padding: 10px;

      a {
        color: ${dark};
        font-size: ${normal};
      }
    }

    li:hover {
      .subMenu {
        display: block;
      }
    }
  }
`

const Header = () => {
  const { userInfo, isLogin, isAdmin } = useUser()

  const email = userInfo?.email
  const name = userInfo?.name

  const adminUrl = 'http://localhost:3100'

  const searchParams = useSearchParams()

  return searchParams.get('popup') === 'true' ? (
    <></>
  ) : (
    <StyledHeader>
      <div className="site-top">
        <div className="layout-width">
          {/* 컨텐츠 영역 */}
          <div className="left">
            <Link href="/">
              <FaHome className="icon-cls" />
            </Link>
          </div>
          <div className="right">
            {isLogin ? (
              <>
                {name}({email})님 /
                <a href="/mypage">
                  <MdContactPage className="icon-cls" />
                  마이페이지
                </a>
                {isAdmin && (
                  <a href={adminUrl} target="_blank">
                    <GrUserAdmin className="icon-cls" />
                    사이트관리
                  </a>
                )}
                <a href="/member/api/logout">
                  <RiLogoutBoxLine className="icon-cls" />
                  로그아웃
                </a>
              </>
            ) : (
              <>
                <a href="/member/join">
                  <FaUserPlus className="icon-cls" /> 회원가입
                </a>
                <a href="/member/login">
                  <RiLoginBoxLine className="icon-cls" /> 로그인
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      {/* site-top */}
      <div className="logo-search">
        <div className="layout-width">
          {/* 컨텐츠 영역 */}
          <Link href="/" className="logo">
            <Image src={logo} alt="로고" priority={true} height={220} />
          </Link>

          <StyledForm method="GET" action="/board/search" autoComplete="off">
            <input
              type="text"
              name="skey"
              placeholder="검색어를 입력하세요"
            ></input>
            <button type="submit">
              <FaSearch />
            </button>
          </StyledForm>
        </div>
      </div>
      {/* logo-search */}
      <StyledMenu>
        <ul className="layout-width">
          <li>
            <a href="/info">Info</a>
            <div className="subMenu">
              <a href="#서브">사이트 소개</a>
              <a href="#서브">CIS-Anonymous 소개</a>
            </div>
          </li>
          <li>
            <Link href="/board/list/notice">공지사항</Link>
          </li>
          <li>
            <a href="#">카드</a>
            <div className="subMenu">
              <a href="/card/list">전체 목록</a>
              <a href="/bank/transaction/card">추천 받기</a>
            </div>
          </li>
          <li>
            <a href="#">대출</a>
            <div className="subMenu">
              <a href="/loan/list">전체 목록</a>
              <a href="/bank/transaction/loan">추천 받기</a>
            </div>
          </li>
          <li>
            <Link href="/board/list/qna">Q&A</Link>
          </li>
          <li>
            <a href="#">커뮤니티</a>
            <div className="subMenu">
              <Link href="/board/list/freetalk">자유게시판</Link>
            </div>
          </li>
        </ul>
      </StyledMenu>
    </StyledHeader>
  )
}

export default React.memo(Header)
