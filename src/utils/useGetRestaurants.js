// import { useState, useEffect } from 'react'

// const useGetRestaurants = () => {
//   const [allRestaurants, setAllRestaurants] = useState([])
//   const [filteredRestaurants, setFilteredRestaurants] = useState([])
//   // Get the data via API
//   useEffect(() => {
//     getRestaurants()
//   }, [])

//   async function getRestaurants() {
//     const data = await fetch(
//       'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.310302&lng=78.518064&page_type=DESKTOP_WEB_LISTING',
//     )
//     const json = await data.json()
//     // console.log(json)
//     // We have to use Optional chaining.
//     setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
//     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
//   }
//   console.log(allRestaurants)

//   // return the data ie all restaurants data
//   return allRestaurants, filteredRestaurants
// }

// export default useGetRestaurants
