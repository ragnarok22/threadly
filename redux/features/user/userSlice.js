import { createSlice } from "@reduxjs/toolkit";
import muppetProfile from '../../../public/img/muppet-profile.jpg'

const defaultUser = {
  firstName: 'Jhon Doe',
  username: 'jhondoe',
  token: null,
  imageUrl: muppetProfile,
  bannerUrl: 'https://pbs.twimg.com/profile_banners/2245226480/1633215496',
  isPremium: false,
}

const initialState = {
  user: defaultUser,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      localStorage.setItem('authtoken', action.payload.token)
    },
    logout: (state) => {
      state.user = defaultUser
      localStorage.removeItem('authtoken')
    }
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer