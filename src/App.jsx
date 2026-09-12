import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './pages/Footer'

function App() {
  return (
<BrowserRouter>
<Navbar/>
  
  <Routes>

   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/contact' element={<Contact/>}/>




  </Routes>
  
  <Footer/>
  
  
  
  
  </BrowserRouter>
  );
}

export default App
