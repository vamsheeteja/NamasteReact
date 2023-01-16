import RestaurantCard from './RestaurantCard'
import { restaurantList } from '../config'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase()),
  )
  return filterData
}

const Body = () => {
  // at any given point of time : i want all my restaurants or filetered restaurants
  // whenever we are filtering we have to filter from all restaurants
  const [allRestaurants, setAllRestaurants] = useState([]) // (O.O) understand why this is Added. For Searching flexibility
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState('') // returns = [variable name, function to update the variable]

  useEffect(() => {
    // API call
    getRestaurants()
  }, [])

  // the call happens aynchronously
  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.310302&lng=78.518064&page_type=DESKTOP_WEB_LISTING',
    )
    const json = await data.json()
    console.log(json)
    // We have to use Optional chaining.
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

  // Conditional Rendering
  // if restaurant is empty => load shimmer ui
  // if restaurant has data then load actual data ui

  // Avoid rendering
  // A K A Early Return
  if (!allRestaurants) return null // or some message <h1> no all resto </h1>

  // if (filteredRestaurants?.length == 0)
  // return <h1> No Restaurant found with {searchText}</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          // BINDING MY STATE VARIABLE TO INPUT BOX. whenever my input gets modified on ui it will be displayed on UI on every change.
          // YOU CAN SEE IN DEV TOOLs IN => index.html header -> value attribute
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants)
            setFilteredRestaurants(data)
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* i will show in my filtered restaurants */}
        {/* Home-work added in Lec-6 */}
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            )
          })
        ) : (
          <h1> No Restaurant found with {searchText}</h1>
        )}
      </div>
    </>
  )
}

export default Body
