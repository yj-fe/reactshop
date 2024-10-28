import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.shadowLight};
  margin-bottom: 20px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.primary};
  }

  h2 {
    color: ${({ theme }) => theme.text};
    margin: 10px 0;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;
  }
`

const Section = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.shadowMedium};
  margin-bottom: 15px;

  h3 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.1rem;
    margin-bottom: 8px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`

const WishlistContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px 0;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  img {
    width: 150px;
    height: auto;
    border-radius: 8px;
    margin-right: 10px;
    flex-shrink: 0;
  }
`

export default function MyPage() {
  const user = useSelector((state) => state.auth.user)
  const [showOrderDetails, setShowOrderDetails] = useState(false)

  return (
    <Layout>
      <ProfileSection>
        {user ? (
          <>
            <img src="profile_placeholder.jpg" alt="Profile" />
            <h2>{user.displayName}</h2>
            <p>{user.email}</p>
          </>
        ) : (
          <p>로그인이 필요합니다.</p>
        )}
      </ProfileSection>

      {/* 주문 내역 섹션 */}
      <Section onClick={() => setShowOrderDetails(!showOrderDetails)}>
        <h3>주문 내역</h3>
        {showOrderDetails ? (
          <p>주문 상세 내역이 여기에 표시됩니다.</p>
        ) : (
          <p>주문 내역을 보려면 클릭하세요.</p>
        )}
      </Section>

      {/* 위시리스트 섹션 */}
      <Section>
        <h3>위시리스트</h3>
        <WishlistContainer>
          {[...Array(6)].map((_, index) => (
            <Link to={`/products/${index + 1}`} key={index}>
              <img
                src={`https://via.placeholder.com/150?text=Product+${index + 1}`}
                alt={`Wishlist Product ${index + 1}`}
              />
            </Link>
          ))}
        </WishlistContainer>
      </Section>

      {/* 계정 설정 섹션 */}
      <Section>
        <h3>계정 설정</h3>
      </Section>
    </Layout>
  )
}
