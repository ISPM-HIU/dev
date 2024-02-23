import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    addToCart: (state, action) => {
      let cart = state.value
      let product = action.payload
      // Find the index of the object with the same id as newValue
      let index = cart.findIndex(item => item.id === product.id);
      if(index === -1) {
        // New product
        state.value.push(product)
      } else {
        state.value[index].number += product.number
      }
    },
    removeToCart: (state, action) => {
      let id = action.payload
      let cart = state.value
      cart = cart.filter(item => item.id !== id);
      state.value = cart
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart } = cartSlice.actions

export default cartSlice.reducer