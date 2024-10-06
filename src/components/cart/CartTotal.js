import React from 'react'
import styled from 'styled-components'

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  font-size: 1.2rem;
`

export default function CartTotalPage({ cartItems }) {
  console.log(cartItems)
  // 목록총합
  const price = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  // 배송비
  const shippingFee = price >= 30000 ? 0 : 3000
  // 목록총합 + 배송비
  const finalTotal = price + shippingFee

  return (
    <TotalWrapper>
      <span>
        총 {`${cartItems.length}건`} {price.toLocaleString()}원 + 배송비
        {shippingFee === 0 ? ' 0원' : ' 3,000원'}
      </span>
      <span>{finalTotal.toLocaleString()} 원</span>
    </TotalWrapper>
  )
}
