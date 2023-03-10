// useParams: Routing parameters ... it a HOOKs
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config'
import useGetRestaurantMenu from '../utils/useGetRestaurantMenu'
import Shimmer from './Shimmer'
import { addItem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'

const RestaurantMenu = () => {
  const { resId } = useParams()
  // console.log(resId)
  // const [restaurant, setRestaurant] = useState(null) // commented in L-9

  const restaurant = useGetRestaurantMenu(resId)

  const dispatch = useDispatch()

  const addFoodItem = (item) => {
    dispatch(addItem(item))
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu flex">
      <div>
        <h1> Restaurant id: {resId}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} ⭐</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      {/* converting onbject into ARRAY by using Object.values() */}
      <div className="menu-cards p-5">
        <h1> Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name} -{' '}
              <button
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                {' '}
                Add{' '}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu
