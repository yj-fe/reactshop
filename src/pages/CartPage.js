import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Layout from '../components/Layout'
import CartTotalPage from '../components/cart/CartTotal'
import CartItemPage from '../components/cart/CartItem'
import Button from '../components/common/Button'

const CartWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 700px;
`

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
`

const CartList = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

const defaultCartItems = [
  {
    id: 1,
    name: 'Product A',
    imageUrl: '/path/to/image1.jpg',
    size: 'M',
    qty: 1,
    price: 5000,
  },
  {
    id: 2,
    name: 'Product B',
    imageUrl: '/path/to/image2.jpg',
    size: 'L',
    qty: 2,
    price: 15000,
  },
]

export default function CartPage({
  isLoggedIn = true,
  cartItems = defaultCartItems,
}) {
  const navigate = useNavigate()

  if (!isLoggedIn) {
    navigate('/')
  }

  return (
    <Layout>
      <CartWrapper>
        {/* <Title>{`(${id})님의 장바구니`}</Title> */}
        <CartList>
          {cartItems.map((item) => (
            <CartItemPage key={item.id} item={item} />
          ))}
        </CartList>
        <CartTotalPage cartItems={cartItems} />
        <Link to="/order">
          <Button>구매하기</Button>
        </Link>
      </CartWrapper>
    </Layout>
  )
}
