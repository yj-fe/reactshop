import React from 'react'
import { Link, useNavigate } from 'react-router-dom' // 홈으로 이동할 링크
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { login } from '../api/firebase'
import { setUser } from '../store/authSlice'
import AdminLogin from '../components/login/AdminLogin'
import Button from '../components/common/Button'
import { FcGoogle } from 'react-icons/fc'

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  background-color: ${({ theme }) => theme.secondary};
  gap: 30px;
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
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

const InnerWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const OptionsWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`

export default function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const user = await login()
      if (user) {
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
          })
        )
        navigate('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <LoginPageWrapper>
      {/* 로고 */}
      <LogoWrapper>
        <Link to="/">ReactShop</Link>
        <h2>로그인페이지</h2>
      </LogoWrapper>

      {/* 로그인 폼 */}
      <FormWrapper>
        <InnerWrapper>
          <h2>회원 로그인</h2>
          {/* 구글로그인 */}
          <Button
            onClick={handleLogin}
            bgColor="#EFF0F1"
            textColor="black"
            hoverBgColor="#ccc"
          >
            <FcGoogle style={{ marginRight: '10px' }} />
            구글로 로그인하기
          </Button>
          <Link to="/signup">
            <Button bgColor="black">회원가입</Button>
          </Link>
        </InnerWrapper>
      </FormWrapper>

      {/* 어드민 로그인 */}
      <OptionsWrapper>
        <AdminLogin />
      </OptionsWrapper>
    </LoginPageWrapper>
  )
}
