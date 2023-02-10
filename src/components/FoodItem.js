import { IMG_CDN_URL } from '../config'

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="flex justify-between w-56 p-2 m-5 shadow-lg bg-white rounded-lg">
      <div>
        {' '}
        <h2 className="font-bold text-xl">{name}</h2>
        <h3 className="">{description}</h3>
        <h4 className="font-bold">₹ {price / 100}⭐</h4>
      </div>
      <div className="p-2">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
      </div>
    </div>
  )
}

export default FoodItem
