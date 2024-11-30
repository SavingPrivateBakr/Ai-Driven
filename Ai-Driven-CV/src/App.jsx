import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './NavBar/NavBar'
import HomePage from './HomePage/HomePage'
import './App.css'
import { ssrImportKey } from 'vite/module-runner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
     <HomePage></HomePage>
    </>
  )
}

export default App
