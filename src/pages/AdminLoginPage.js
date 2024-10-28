import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const AdminProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadowMedium};
  margin-bottom: 20px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid white;
  }

  h2 {
    color: white;
    margin: 10px 0;
  }

  p {
    color: white;
    font-size: 0.9rem;
  }
`

const AdminSection = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.shadowLight};
  margin-bottom: 20px;

  h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`

const ManagementButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 6px ${({ theme }) => theme.shadowLight};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #e6594e;
  }
`

export default function AdminPage() {
  return (
    <Layout>
      <AdminProfileSection>
        <img src="admin_profile_placeholder.jpg" alt="Admin Profile" />
        <h2>어드민 이름</h2>
        <p>adminemail@example.com</p>
      </AdminProfileSection>

      <AdminSection>
        <h3>상품 관리</h3>
        <ManagementButton>상품 등록</ManagementButton>
      </AdminSection>
      <AdminSection>
        <h3>재고 관리</h3>
        <ManagementButton>재고 수정</ManagementButton>
      </AdminSection>
      <AdminSection>
        <h3>주문 관리</h3>
        <ManagementButton>주문 상태 변경</ManagementButton>
      </AdminSection>
    </Layout>
  )
}
