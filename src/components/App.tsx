import React, { useState } from 'react'
import { MainColumn } from './MainFeatures'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainColumn />
    </>
  )
}

export default App
