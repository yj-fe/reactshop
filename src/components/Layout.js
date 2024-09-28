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

  @media (max-width: 768px) {
  }
`

export default function Layout({
  children,
  showHeader = true,
  showFooter = true,
}) {
  return (
    <LayoutWrapper>
      {showHeader && <Header cartCount={5} />}
      <Main>{children}</Main>
      {showFooter && <Footer />}
    </LayoutWrapper>
  )
}
