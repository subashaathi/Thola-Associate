import React from 'react'
import "./App.scss"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Career from './components/Career/Career'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service from './components/Service/Service'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<section id='Home'><Header/><Home/></section>} />
          <Route path="/about" element={<section id='About'> <Header/><About/><Footer/></section>} />
          <Route path="/Service" element={<section id='Service'> <Header/><Service/><Footer/></section>} />
          <Route path="/portfolio" element={<section id='Portfolio'><Header/><Portfolio/><Footer/></section>} />
          <Route path="/career" element={<section id='Career'><Header/><Career/></section>} />
          <Route path="/contact" element={<section id='Contact'><Header/><Contact/></section>} />
        </Routes>
          
      </BrowserRouter>
      
    </>
  )
}

export default App