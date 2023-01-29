import React, { lazy, Suspense } from 'react'
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
// import Instamart from './components/Instamart.js' // we gonna do LAZY LOAD This

// lazy comes from react
// this is different import
const Instamart = lazy(() => import('./components/Instamart')) // it like a Dynamic Import
// Upon on Demand Loading -> upon render -> suspend loading

// for practice case writing my About component in Lazy loading..
const About = lazy(() => import('./components/About'))

// Structure you layout
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      {/* This is the Outlet where we have to FILL out Different pages here */}
      {/* Outlet will be filled by Children components */}
      {/* All the children will be going into outlet according to the ROUTE */}
      <Outlet />
      <Footer />
    </React.Fragment>
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
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

// now root will render according to the `appRouter` configuration
// here router is a PROPs
root.render(<RouterProvider router={appRouter} />) // rendering a react functional component
