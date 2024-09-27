import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import { FiLogIn, FiUser } from 'react-icons/fi' // 로그인 아이콘
import { MdOutlineInventory2 } from 'react-icons/md' // 상품 아이콘

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  box-shadow: 0px 4px 8px ${({ theme }) => theme.shadowLight};

  @media (max-width: 768px) {
    padding: 10px;
  }
`

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.background};
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 20px;
    font-size: 18px;
    text-decoration: none;
    color: white;

    &:hover {
      color: ${({ theme }) => theme.background};
    }
  }

  @media (max-width: 768px) {
    a {
      margin-right: 10px;
    }
  }
`

const CartIconWrapper = styled.div`
  position: relative;
`

const CartIcon = styled(FaShoppingCart)`
  font-size: 24px;
  color: white;

  &:hover {
    color: ${({ theme }) => theme.background};
  }
`

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${({ theme }) => theme.accent};
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
`

const ProfileIcon = styled(FiUser)`
  font-size: 24px;
  color: white;
  margin: 0px 10px;

  &:hover {
    color: ${({ theme }) => theme.background};
  }
`

const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.accent};
  }
`

export default function Header({ isLoggedIn = false, cartCount = 0 }) {
  return (
    <HeaderWrapper>
      {/* 로고 */}
      <Logo to="/">ReactShop</Logo>

      {/* 중간 메뉴 */}
      <Menu>
        <Link to="/products">
          <MdOutlineInventory2 /> Products
        </Link>
      </Menu>

      {/* 프로필 / 로그인, 장바구니 */}
      <Menu>
        {isLoggedIn ? (
          <>
            <CartIconWrapper>
              <CartIcon />
              {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
            </CartIconWrapper>
            <ProfileIcon />
          </>
        ) : (
          <LoginButton>Login</LoginButton>
        )}
      </Menu>
    </HeaderWrapper>
  )
}
