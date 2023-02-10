import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice' // import my slice. By default it was exporting reducer

const store = configureStore({
  reducer: {
    // name of the slice: slice file.
    cart: cartSlice,
  },
})

export default store
