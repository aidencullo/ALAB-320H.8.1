import getShips from './services/sw-api'

function App() {

  getShips().then(data => {
    console.log(data)
  })

  return (
    <>
      <p> Hello World </p>
    </>
  )
}

export default App
