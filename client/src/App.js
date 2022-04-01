import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Card from "./components/SingleNews";
import './css/App.css'



const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Card />
        <Routes>
          <Route path='/' />
          <Route path='/reports'/>
          <Route path='/products'/>
        </Routes>
      </Router>
    </>
  )
}

export default App