import { useState, useEffect } from 'react'

const Profile = (props) => {
  const [count, setCount] = useState(0)
  // console.log("render function")

  useEffect(() => {
    // it is called AFTER render
    // Q. WHY IT IS GREAT PLACE TO DO API CALL
    // ANS: As it makes our application render quickly without waiting for the API to get loader
    // it is like render first WITH DEFAULT STATE and once got data from API then againg render..(RE-RENDER)
    // API call
    // console.log('useEffect')

    // set interval in useEffect TS: 3:07:00
    const timer = setInterval(() => {
      console.log('Namaste React OP')
    }, 1000)

    console.log('useEffect')

    // this (function) will be called when we are UNMOUNTING this component
    return () => {
      clearInterval(timer)
      console.log('return')
    }
  })
  console.log('render')
  return (
    <div>
      <h2> Profile Component</h2>
      <h3> Name: {props.name}</h3>
      <h3> Count: {count} </h3>
      <button
        onClick={() => {
          setCount(1)
        }}
      >
        Count
      </button>
    </div>
  )
}

export default Profile
