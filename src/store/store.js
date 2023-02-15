import { configureStore } from '@reduxjs/toolkit'
import { foodSlice } from './food/foodSlice'

export const store = configureStore({
  reducer: {
    food: foodSlice.reducer
  },
})