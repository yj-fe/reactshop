import React from 'react'
import { Routes, Route } from 'react-router-dom' // Routes와 Route 추가
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/Theme'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* 라우팅 설정 */}
      <Routes>
        {/* 기본 경로 */}
        <Route path="/" element={<HomePage />} />
        {/* /products 경로 */}
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </ThemeProvider>
  )
}
