import { IMG_CDN_URL } from '../config'

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="w-56 p-2 m-5 shadow-lg bg-white rounded-lg">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="">{cuisines.join(', ')}</h3>
      <h4 className="font-bold">{avgRating}⭐</h4>
    </div>
  )
}

export default RestaurantCard
