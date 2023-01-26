import { useState } from 'react'
import Logo from '../assets/img/foodvilla.png'
import { Link } from 'react-router-dom'

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
)

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Whenever we change the STATE VARIABLE React does a KIND of REFRESHES THE COMPONENT.
  // the whole Component gets re-rendered when some is changed in a STATE VARIABLE.
  // console.log('render()')

  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="" className="link">
              Cart
            </Link>
          </li>
        </ul>
      </div>
      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </div>
  )
}

export default Header
