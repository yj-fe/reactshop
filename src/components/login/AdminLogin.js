import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const AdminLoginWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export default function AdminLogin() {
  return (
    <AdminLoginWrapper>
      <h3>어드민 페이지를 찾으시나요?</h3>
      <p>상점을 등록해보세요</p>
      <Link to="/admin-login">
        <Button>어드민 로그인</Button>
      </Link>
    </AdminLoginWrapper>
  )
}
