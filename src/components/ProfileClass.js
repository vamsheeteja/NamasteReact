import React from 'react'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        name: 'Dummy Name',
        location: 'Dummy Location',
      },
    }
    console.log('Child - Constructor ' + this.props.name)
  }

  // single page application also do have cons init
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('Namaste React OP')
    }, 1000)
    // (O.O) when we move on to another component the interval again start..
    // like called 2nt time interval will be twice 1 3 5.. called 3rd time thrice 1 4 7 10 ...
    // SPA was most powerful but this is a Bad thing
    // this is bcoz we are not Reloading the page,
    // Performance loss is happening..
    // to CLEAR this setInterval using componentUnmount

    console.log('Component did mount')
  }

  // componentDidUpdate() will be called after every render
  componentDidUpdate() {
    console.log('Component Did update')
  }

  // componentWillUnmount will be called before this component will unmount(go) from the DOM ie if we go to another page.
  componentWillUnmount() {
    clearInterval(this.timer)
    console.log('CompentWillUnmount')
  }

  render() {
    // DE-Structuring
    const { avatar_url, name, location } = this?.state?.userInfo
    console.log('Child - render ' + this.props.name)

    return (
      <div>
        <h1> Profile Class Component</h1>
        <img src={avatar_url} />
        <h2> Name: {name}</h2>
        <h3> Location: {location} </h3>
      </div>
    )
  }
}

export default Profile
