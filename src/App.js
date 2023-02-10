import React, { lazy, Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js'
import Body from './components/Body'
import Footer from './components/Footer'
// This `createBrowserRouter` function from react-router-dom which help us create ROUTING
//Timestamp : 48:25 There is a component RouterProvider that helps in provinding appRouter to our APP.
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
// import About from './components/About.js' // commented in L-9 for case of lazy loading
import Contact from './components/Contact.js'
import Error from './components/Error.js'
import RestaurantMenu from './components/RestaurantMenu.js'
// import Profile from './components/Profile.js'
import Profile from './components/ProfileClass.js'
import Shimmer from './components/Shimmer.js'
import UserContext from './utils/UserContext.js'
// import Instamart from './components/Instamart.js' // we gonna do LAZY LOAD This
import { Provider } from 'react-redux'
import store from './utils/store'
import Cart from './components/Cart.js'

// lazy comes from react
// this is different import
const Instamart = lazy(() => import('./components/Instamart')) // it like a Dynamic Import
// Upon on Demand Loading -> upon render -> suspend loading

// for practice case writing my About component in Lazy loading..
const About = lazy(() => import('./components/About'))

// Structure you layout
const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Vamshee Teja',
    email: 'vamshee.teja@gmail.com',
  }) // suppose i want this userInfo everywhere(header, footer, body,,etc) in my app. Props drilling is a bad approach
  // whenever you have a use case like this where you need SAME data across all my app you have to STORE THE DATA AT A CENTRAL STAGE
  // (that central storage can be a local storage but local storage is something inside browser, but we are talking about React State.) // And updating the local storage is the HEAVY/COSTLY operation. You need to have this data in a react app, you have to store it in a central space. React gives us acess to this central space which is known as REACT-CONTEXT. we can also use Redux-store

  // why cant we use a GLOBAL variable ... Becoz React not TRACKING IT, react is not triggering its Reconciliation algo, React Context is a very powerful tool powered by React

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        {/* TRY THIS ONE ALSO <UserContext.Provider value={user}> // OVERWRITING THE DEFAULT VALUE..*/}
        <Header />
        {/* This is the Outlet where we have to FILL out Different pages here */}
        {/* Outlet will be filled by Children components */}
        {/* All the children will be going into outlet according to the ROUTE */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  )
}

// this is place we where give links to the /path.
// Routing Configuration. This configuration is an ARRAY. it contains objects. List of paths and element..
const appRouter = createBrowserRouter([
  {
    path: '/',
    // which has to be loaded on "/". <AppLayout /> must be defined FIRST (thats why placed after defining AppLayout)
    element: <AppLayout />,
    errorElement: <Error />,
    // We can create children of route
    children: [
      // NOTE: we have to also pass a children for the BODY Component
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            // "/profile" then react-router-dom will consider this as `localhost:1234/profile`. SO DONT WRITE /profile
            // `/` slash means from the route
            path: 'profile', // react-router-dom will convert this to `localhost:1234/parentpath/{path}`
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

// now root will render according to the `appRouter` configuration
// here router is a PROPs
root.render(<RouterProvider router={appRouter} />) // rendering a react functional component
