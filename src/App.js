import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom' // Routes와 Route 추가
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/Theme'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AdminLoginPage from './pages/AdminLoginPage'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import MyPage from './pages/MyPage'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
import { monitorAuthState } from './api/firebase'
import AdminPage from './pages/AdminLoginPage'

export default function App() {
  useEffect(() => {
    monitorAuthState()
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* 라우팅 설정 */}
      <Routes>
        {/* 홈 */}
        <Route path="/" element={<HomePage />} />
        {/* 상품 */}
        <Route path="/products" element={<ProductPage />} />
        <Route
          path="/products/:productId"
          element={<ProductDetailPage />}
        />{' '}
        {/* 로그인 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        {/* 마이페이지 */}
        <Route path="/mypage" element={<MyPage />} />
        {/* 장바구니 */}
        <Route path="/carts" element={<CartPage />} />
        {/* 주문 */}
        <Route path="/order" element={<OrderPage />} />
        {/* 어드민 */}
        <Route path="/adminpage" element={<AdminPage />} />
      </Routes>
    </ThemeProvider>
  )
}
