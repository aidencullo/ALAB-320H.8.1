import React, { useState, useEffect } from 'react'

import getShips from './services/sw-api'

function App() {

  const [ships, setShips] = useState([])

  useEffect(() => {
    getShips()
      .then((ships) => {
	setShips(ships)
      })
  }, [])

  return (
    <>
      {ships.map((ship, index) => (
	<div key={index}>
          <h1>{ship.name}</h1>
	</div>
      ))}
    </>
  )
}

export default App
