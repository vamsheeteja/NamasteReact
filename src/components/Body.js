import RestaurantCard from './RestaurantCard'
import { restaurantList } from '../config'
import { useState, useEffect, useContext } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import { filterData } from '../utils/helper'
import useOnline from '../utils/useOnline'
import UserContext from '../utils/UserContext'
const Body = () => {
  // at any given point of time : i want all my restaurants or filetered restaurants
  // whenever we are filtering we have to filter from all restaurants
  const [allRestaurants, setAllRestaurants] = useState([]) // (O.O) understand why this is Added. For Searching flexibility
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState('') // returns = [variable name, function to update the variable]
  const { user, setUser } = useContext(UserContext)
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
    // console.log(json)
    // We have to use Optional chaining.
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    // console.log(setAllRestaurants)
  }

  const isOnline = useOnline()
  if (!isOnline) {
    return (
      <h1>
        {' '}
        ⛔Looks like you are Offline, Check you Internet Connection and try
        Again
      </h1>
    )
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
      <div className="search-container p-5 bg-[#EEA47FFF] my-1">
        <input
          type="text"
          className="p-1"
          placeholder="Search"
          value={searchText}
          // BINDING MY STATE VARIABLE TO INPUT BOX. whenever my input gets modified on ui it will be displayed on UI on every change.
          // YOU CAN SEE IN DEV TOOLs IN => index.html header -> value attribute
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button
          className="p-2 m-2 bg-#00539CFF rounded-lg text-white bg-purple-900 hover:bg-sky-700"
          onClick={() => {
            const data = filterData(searchText, allRestaurants)
            setFilteredRestaurants(data)
          }}
        >
          Search
        </button>

        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        ></input>
        <input
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
      </div>
      <div className="flex flex-wrap bg-[#00539CFF] justify-center">
        {/* i will show in my filtered restaurants */}
        {/* Home-work added in Lec-6 */}
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => {
            return (
              // #1
              // <RestaurantCard {...restaurant.data} key={restaurant.data.id} />

              // # 2
              // Added this code in Lec 7 timestamp 2:30:00
              <Link
                className="restaurant-card-link"
                to={'/restaurant/' + restaurant.data.id}
                key={restaurant.data.id}
              >
                {/* {console.log(restaurant?.data?.id)} */}
                <RestaurantCard {...restaurant.data} />
              </Link>
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
