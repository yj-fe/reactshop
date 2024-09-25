import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

// style
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  padding: 20px;
`

export default function Layout({
  children,
  showHeader = true,
  showFooter = true,
}) {
  return (
    <LayoutWrapper>
      {showHeader && <Header />}
      <Main>{children}</Main>
      {showFooter && <Footer />}
    </LayoutWrapper>
  )
}
