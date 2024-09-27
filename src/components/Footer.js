import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px 20px;
  text-align: center;
  box-shadow: 0px -2px 4px ${({ theme }) => theme.shadowLight};

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`

export default function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2024 ReactShop. All rights reserved.</p>
    </FooterWrapper>
  )
}
