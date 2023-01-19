import ErrorImage from '../assets/img/error_img.png'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()
  //   console.log(err)
  return (
    <div className="error-div">
      <img
        alt="error-image"
        src={ErrorImage}
        style={{ height: '150px', width: '150px' }}
      />
      <h1>Opps!</h1>
      <h2>Something Went Wrong. Please try again later.</h2>
      <h3>Status: {err.status} </h3>
      <h3>Status Text: {err.statusText} </h3>
      <h3>Error: {err.error.message} </h3>
    </div>
  )
}

export default Error
