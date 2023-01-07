import ReactDOM from 'react-dom/client'

const Title = () => (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
)

// Functional component : a normal javascript function
const HeaderComponent = () => {
  return (
    <div>
      <Title /> {/* Good practice */}
      <h1> Namaste React functional component </h1>
      <h2>This is a h2 tag</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

// async defer
root.render(<HeaderComponent />) // rendering a react functional component
