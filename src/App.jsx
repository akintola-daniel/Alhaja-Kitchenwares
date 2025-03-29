import React from 'react'
import { Navbar, Hero, Footer, Products, ScrollToTop } from './sections'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <ScrollToTop />
    <div className="App">
     
      <div className="content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  )
}

export default App
