import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // initial value of the cart
    // Lets put an empty items.
    items: [],
  },
  // this reducers are called on dispatch of an action
  reducers: {
    // this is the place where i will tell what action will call what reducer function.
    // reducer at eod is a function.
    // here the mapping bw action and reducer function.
    // addItem is an action and it is mapped to a reducer function.
    addItem: (state, action) => {
      /*
       * this reducer function takes in two params.
       * state and action payload
       * state is the initial state and action is the data which is coming in.
       * action payload is the place where i will get the items which i have to add to my cart.
       * when we will be dispatching our actions (on clicking that `ADD`/ + button) right then we will use this.
       * This reducers functions DOES NOT RETURN ANY THING. IT TAKES STATE AND MODIFY IT.
       */

      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      state.items.pop()
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

// export actions and reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions // 'actions'

// it will combine all reducers and make it one reducer.
export default cartSlice.reducer // it is `reducer`
