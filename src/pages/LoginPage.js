import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom' // 홈으로 이동할 링크
import { FaShoppingCart } from 'react-icons/fa' // react-icons 사용
import AdminLogin from '../components/login/AdminLogin'
import LoginForm from '../components/login/LoginForm'

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  background-color: ${({ theme }) => theme.secondary}; /* 서브 컬러 배경 */
  gap: 30px;
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary}; /* 메인 컬러 */
    font-size: 2.5rem;
    font-weight: bold;
  }

  h2 {
    margin-top: 10px;
  }
`

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  gap: 20px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textPrimary};
  }
`

const OptionsWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`

export default function LoginPage() {
  return (
    <LoginPageWrapper>
      {/* 로고 */}
      <LogoWrapper>
        <Link to="/">ReactShop</Link>
        <h2>로그인페이지</h2>
      </LogoWrapper>

      {/* 로그인 폼 */}
      <FormWrapper>
        <LoginForm />
      </FormWrapper>

      {/* 어드민 로그인 */}
      <OptionsWrapper>
        <AdminLogin />
      </OptionsWrapper>
    </LoginPageWrapper>
  )
}
