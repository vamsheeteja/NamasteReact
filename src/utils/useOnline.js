import { useEffect, useState } from 'react'

const useOnline = () => {
  // i want to change my status of online should automatically change.. so i will use a STATE variable for it to maintain the state
  const [isOnline, setIsOnline] = useState(true)

  // run the (set the) eventListener just ONCE, when ever my page loads, my eventListener should be tracked once. ie by using useEffect with empty dependency array

  useEffect(() => {
    // write a logic to keep on updating my online status whenever user go offline and go online.

    const handleOnline = window.addEventListener('online', () => {
      setIsOnline(true)
    })
    const handleOffline = window.addEventListener('offline', () => {
      setIsOnline(false)
    })

    return () => {
      // whenever i have to remove an event listener i have to pass in the SAME function that i have created
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // a Senior Dev code
  // we have to clean the cache. Whenever we add a event listener we need to clean up the eventListener.
  // wheneever we go offline and coming online..
  // TS 1:29:00
  // when we go to about us page the eventlistener is still there. but we need the event listener only when we are on the body page.
  // So good practice to clear the mess that we are creating

  // it return the status (boolean)
  return isOnline
}

export default useOnline
