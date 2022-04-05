import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AllNews from "./components/AllNews";
import './css/App.css'



const App = () => {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<AllNews />}/>
            <Route path='/news'/>
            <Route path='/library'/>
          </Routes>
      </Router>
    </>
  )
}

export default App