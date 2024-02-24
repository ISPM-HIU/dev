import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/cartSlice'
import userSlice from './slice/userSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userSlice
  }
})