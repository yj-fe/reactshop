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
import MyPage from './pages/MyPage'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* 라우팅 설정 */}
      <Routes>
        {/* 홈 */}
        <Route path="/" element={<HomePage />} />
        {/* 상품 */}
        <Route path="/products" element={<ProductPage />} />
        {/* 로그인 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login/google" element={<GoogleLoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        {/* 마이페이지 */}
        <Route path="/mypage" element={<MyPage />} />
        {/* 장바구니 */}
        <Route path="/carts" element={<CartPage />} />
        {/* 주문 */}
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </ThemeProvider>
  )
}
