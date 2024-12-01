import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './NavBar/NavBar'
import HomePage from './HomePage/HomePage'
import './App.css'
import { ssrImportKey } from 'vite/module-runner'
import Decision from './Decision/Decision'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BuilderSideBar from './components/cv-builder/builder-sidebar'
function App() {
  const [count, setCount] = useState(0)

  /*return (
    <>
   
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Decision" element={<Decision />} />
        <Route path='*' element={<Decision/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )*/
 return(<>
 <BuilderSideBar/>

 </>)
}

export default App
