import { Outlet } from 'react-router-dom'
import Profile from './ProfileClass'
import ProfileFunctionalComponent from './Profile'
import { Component } from 'react'
import UserContext from '../utils/UserContext'
// const About2 = () => {
//   return (
//     <div>
//       <h1>About Us page</h1>
//       <p>This is Namaste React Live course Chapter 07: Finding the Path</p>
//       {/* <Outlet /> */}
//       <ProfileFunctionalComponent name={'Vamshee'} />
//       <Profile name={'Vamshee Class'} />
//     </div>
//   )
// }

// converting our About(2) component to Class Based component

class About extends Component {
  constructor(props) {
    super(props)
    // console.log('Parent - Constructor')
  }

  componentDidMount() {
    // BEST PLACE for API CALLS
    // this will be called AFTER render
    // console.log('Parent - ComponentDidMount')
  }

  render() {
    // console.log('Parent - render')
    return (
      <div>
        <h1>About Us page</h1>
        {/* using context in CBCs L-11 */}
        <UserContext.Consumer>
          {/* this takes in a JSX which is a function. This function has value whatever the context holds. */}
          {(value) => console.log(value)}
        </UserContext.Consumer>
        <UserContext.Consumer>
          {/* this takes in a JSX which is a function. This function has value whatever the context holds. */}

          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>

        <p>This is Namaste React Live course Chapter 07: Finding the Path</p>
        {/* <Outlet /> */}
        <ProfileFunctionalComponent name={'Vamshee'} />
        {/* <Profile name={'1st Child'} /> */}
      </div>
    )
  }
}

export default About
