import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice'

export const makeStore = () => {
  return configureStore({
    reducer: userReducer,
  })
}

const store = makeStore()

export default store