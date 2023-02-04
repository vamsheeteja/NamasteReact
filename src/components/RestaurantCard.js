import { IMG_CDN_URL } from '../config'
import { useContext } from 'react'
import UserContext from '../utils/UserContext.js'

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  // Note we are extracting inside component
  const { user } = useContext(UserContext)

  return (
    <div className="w-56 p-2 m-5 shadow-lg bg-white rounded-lg">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="">{cuisines.join(', ')}</h3>
      <h4 className="font-bold">{avgRating}⭐</h4>
      <span className="text-red-900">
        {user.name /* added in L-11*/} - {user.email}
      </span>
    </div>
  )
}

export default RestaurantCard
