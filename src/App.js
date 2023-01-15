import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js'
import Body from './components/Body'
import Footer from './components/Footer'
// Structure you layout
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

// async defer
root.render(<AppLayout />) // rendering a react functional component
