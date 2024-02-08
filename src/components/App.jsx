import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
