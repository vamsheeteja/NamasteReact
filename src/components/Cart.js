import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import FoodItem from './FoodItem'

const Cart = () => {
  // VERY IMP Part while using REDUX.
  // useSelector is used to Subscribe the store (best practice is to subscribe to a particular slice). Subscribing to Whole store will affect the Performance. WHY? HOW?
  // ANS: if cart is subscribing to the store, Everytime my store changes my cart will change, it will Re Render my component. that why we have to subscribe to a specific portion of the store. It will be a Major Performace improvemence.
  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div>
      <h1 className="font-bold text-3xl "> Cart Items</h1>
      <button className="bg-red-400 p-2 m-5" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Cart
