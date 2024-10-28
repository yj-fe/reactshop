import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/common/Button'
import Layout from '../components/Layout'

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 40px;
  max-width: 720px;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-radius: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`

const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ProductTitle = styled.h1`
  font-size: 1.5rem;
  color: #333;
  font-weight: 600;
`

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accent};
`

const Tabs = styled.div`
  display: flex;
  margin-top: 40px;
  border-bottom: 2px solid #ddd;
`

const TabButton = styled.button`
  flex: 1;
  padding: 15px;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ active, theme }) => (active ? theme.primary : '#555')};
  background: none;
  border: none;
  border-bottom: ${({ active, theme }) =>
    active ? `2px solid ${theme.primary}` : 'none'};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`

const TabContent = styled.div`
  padding: 20px 0;
  line-height: 1.6;
  color: #666;
`

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.shadowLight};
`

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
`

const CommentAuthor = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`

const CommentText = styled.p`
  color: #666;
  margin-top: 5px;
`

export default function ProductDetailPage() {
  const { productId } = useParams()
  const [activeTab, setActiveTab] = useState('description')
  const [tabData, setTabData] = useState({
    description: '',
    seller: '',
    reviews: [],
  })

  useEffect(() => {
    const fakeData = {
      description: '상품설명 탭 내용',
      seller: '판매자정보 탭 내용',
      reviews: [
        {
          id: 1,
          name: 'User 1',
          text: '문의 1',
          profileImage: 'https://via.placeholder.com/50',
        },
        {
          id: 2,
          name: 'User 2',
          text: '문의 2',
          profileImage: 'https://via.placeholder.com/50',
        },
      ],
    }
    setTabData(fakeData)
  }, [])

  const tabContent = {
    description: <p>{tabData.description}</p>,
    seller: <p>{tabData.seller}</p>,
    reviews: (
      <div>
        {tabData.reviews.map((review) => (
          <CommentContainer key={review.id}>
            <ProfileImage
              src={review.profileImage}
              alt={`${review.name} Profile`}
            />
            <CommentContent>
              <CommentAuthor>{review.name}</CommentAuthor>
              <CommentText>{review.text}</CommentText>
            </CommentContent>
          </CommentContainer>
        ))}
      </div>
    ),
  }

  return (
    <Layout>
      <ProductContainer>
        <ProductImage
          src="https://via.placeholder.com/600x600"
          alt="Product Detail"
        />
        <ProductInfo>
          <div>
            <ProductTitle>상품명 - {productId}</ProductTitle>
            <ProductPrice>₩100,000</ProductPrice>
          </div>
          <Button>장바구니에 담기</Button>
        </ProductInfo>
      </ProductContainer>
      {/* 상품설명, 판매자정보, 문의 탭 메뉴 */}
      <Tabs>
        {Object.keys(tabContent).map((tab) => (
          <TabButton
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'description'
              ? '상품설명'
              : tab === 'seller'
                ? '판매자정보'
                : '문의'}
          </TabButton>
        ))}
      </Tabs>

      {/* 선택된 탭 내용 */}
      <TabContent>{tabContent[activeTab]}</TabContent>
    </Layout>
  )
}
