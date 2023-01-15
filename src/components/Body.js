import RestaurantCard from './RestaurantCard'
import { restaurantList } from '../config'
import { useState } from 'react'

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText),
  )
  return filterData
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList)
  const [searchText, setSearchText] = useState() // returns = [variable name, function to update the variable]
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // 1. need to filter data (restoList) and
            const data = filterData(searchText, restaurants)
            // 2. update the state - restaurants
            setRestaurants(data)
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          )
        })}
      </div>
    </>
  )
}

export default Body
