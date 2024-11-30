import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Stars  from './Stars/Stars.jsx'
import NavBar from './NavBar/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  
  <>
    <NavBar />
    <Stars />
    <App />
  </>
)