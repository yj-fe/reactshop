import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/Layout'

const FeaturedProducts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  img {
    width: 48%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`

export default function ProductPage() {
  return (
    <Layout>
      <FeaturedProducts>
        <img
          src="https://via.placeholder.com/600x300"
          alt="Sponsored Product 1"
        />
        <img
          src="https://via.placeholder.com/600x300"
          alt="Sponsored Product 2"
        />
      </FeaturedProducts>
      <ProductGrid>
        {[...Array(10)].map((_, index) => (
          <Link to={`/products/${index + 1}`} key={index}>
            <img
              src="https://via.placeholder.com/150"
              alt={`Product ${index + 1}`}
            />
          </Link>
        ))}
      </ProductGrid>
    </Layout>
  )
}
