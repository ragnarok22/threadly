import { createSlice } from "@reduxjs/toolkit";

const defaultUser = {
  firstName: 'Jhon Doe',
  username: 'jhondoe',
  token: null,
  imageUrl: 'http://pbs.twimg.com/profile_images/1453064951036211203/OwlbEhLf_normal.png',
  bannerUrl: 'https://pbs.twimg.com/profile_banners/2245226480/1633215496',
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
    },
    logout: (state) => {
      state.user = null
    }
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer