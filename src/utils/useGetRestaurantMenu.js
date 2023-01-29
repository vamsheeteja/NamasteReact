import { useState, useEffect } from 'react'
import { FETCH_MENU } from '../config'
const useGetRestaurantMenu = (resId) => {
  // i will create a state for this hook. just for fetching data logic.
  const [restaurant, setRestaurant] = useState(null)

  // get data from API
  useEffect(() => {
    getRestaurantMenuInfo()
  }, [])

  async function getRestaurantMenuInfo() {
    const data = await fetch(FETCH_MENU + resId)
    const json = await data.json()
    // NOTE: we have select json.data (O.O)
    // console.log(json.data)
    setRestaurant(json.data)
  }

  // return restaurant data
  return restaurant
}

export default useGetRestaurantMenu
