import { useState, useContext } from 'react' // added in L-11, to import useContext for using context
import Logo from '../assets/img/foodvilla.png'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'
import UserContext from '../utils/UserContext'

const Title = () => (
  <a href="/">
    <img className="h-28 pl-2" alt="logo" src={Logo} />
  </a>
)

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Whenever we change the STATE VARIABLE React does a KIND of REFRESHES THE COMPONENT.
  // the whole Component gets re-rendered when some is changed in a STATE VARIABLE.
  // console.log('render()')

  const isOnline = useOnline()

  const { user } = useContext(UserContext) // added in L-11

  return (
    <>
      <div className="visible sm:hidden md:hidden lg:hidden">
        <Title />
      </div>
      <div className="flex justify-between bg-[#EEA47FFF] shadow-lg ">
        <span className="hidden sm:block md:block lg:block">
          <Title />
        </span>
        <div className="nav-items">
          <ul className="flex py-10">
            <li>
              <Link to="/" className="px-2 text-xl hover:text-purple-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="px-2 text-xl hover:text-purple-700">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-2 text-xl hover:text-purple-700"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="" className="px-2 text-xl hover:text-purple-700">
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/instamart"
                className="px-2 text-xl hover:text-purple-700"
              >
                Instamart
              </Link>
            </li>
          </ul>
        </div>
        <h1>{isOnline ? '✅' : '⛔'}</h1>
        <span className="p-10 font-bold text-red-900">
          {user.name /* added in L-11*/} - {user.email}
        </span>

        {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
      </div>
    </>
  )
}

export default Header
