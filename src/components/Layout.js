import React from 'react'
import styled from 'styled-components'
import Footer from './footer/Footer'
import Header from './header/Header'

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: 768px) {
  }
`

const Main = styled.main`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${({ centered }) => (centered ? 'center' : 'flex-start')};

  @media (max-width: 768px) {
    align-items: center;
  }

  > * {
    max-width: 600px;
    width: 100%;
  }
`

export default function Layout({
  children,
  showHeader = true,
  showFooter = true,
  centered = true,
}) {
  return (
    <LayoutWrapper>
      {showHeader && <Header cartCount={5} />}
      <Main centered={centered}>{children}</Main>
      {showFooter && <Footer />}
    </LayoutWrapper>
  )
}
