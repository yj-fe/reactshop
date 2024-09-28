import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import { GoogleLoginButton } from './GoogleLoginButton'
import { Link } from 'react-router-dom'

const FormWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export default function LoginForm() {
  return (
    <FormWrapper>
      <h2>회원 로그인</h2>
      <GoogleLoginButton />
      <Link to="/signup">
        <Button bgColor="black">회원가입</Button>
      </Link>
    </FormWrapper>
  )
}
