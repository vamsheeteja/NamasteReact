import { createContext } from 'react'

// this createContext at EOD is a function and it takes some data which we need all across our application.
const UserContext = createContext({
  user: {
    name: 'Dummy Name',
    email: 'dummy@gmail.com',
  },
})

UserContext.displayName = 'UserContext' // React will not Track just for debugging

export default UserContext
