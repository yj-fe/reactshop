import React from 'react'
// import { auth, googleProvider } from '../firebase'
// import { signInWithPopup } from 'firebase/auth'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { FcGoogle } from 'react-icons/fc'

export const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      // await signInWithPopup(auth, googleProvider)
      console.log('로그인 성공')
    } catch (error) {
      console.error('로그인 실패', error)
    }
  }

  return (
    <Link to="/login/google">
      <Button
        onClick={handleGoogleLogin}
        bgColor="#EFF0F1"
        textColor="black"
        hoverBgColor="#ccc"
      >
        <FcGoogle style={{ marginRight: '10px' }} />
        구글로 로그인하기
      </Button>
    </Link>
  )
}
