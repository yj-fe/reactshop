import React from 'react'
import { Routes, Route } from 'react-router-dom' // Routes와 Route 추가
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/Theme'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import GoogleLoginPage from './pages/GoogleLoginPage'
import AdminLoginPage from './pages/AdminLoginPage'
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
        {/* /login 경로 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login/google" element={<GoogleLoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
      </Routes>
    </ThemeProvider>
  )
}
