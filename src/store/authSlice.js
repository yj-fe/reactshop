import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload // 사용자 정보 저장
    },
    // 로그아웃 사용자 초기화
    resetUser: (state) => {
      state.isLoggedIn = false
      state.user = null
    },
  },
})

export const { setUser, resetUser } = authSlice.actions
export default authSlice.reducer
