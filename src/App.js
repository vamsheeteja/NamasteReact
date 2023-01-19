import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js'
import Body from './components/Body'
import Footer from './components/Footer'
// This `createBrowserRouter` function from react-router-dom which help us create ROUTING
//Timestamp : 48:25 There is a component RouterProvider that helps in provinding appRouter to our APP.
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Error from './components/Error.js'
import RestaurantMenu from './components/RestaurantMenu.js'

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
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

// now root will render according to the `appRouter` configuration
// here router is a PROPs
root.render(<RouterProvider router={appRouter} />) // rendering a react functional component
