import React from 'react'
import './App.css'
import Navbar from './Components/Navigation/Navbar'
import MovieLists from './Components/HomePage/MovieList'
import { Route, Routes } from 'react-router-dom'
import Subscription from "./Components/Subscription/Subscription"
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className='Home_console'>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<MovieLists type="upcoming"/>}></Route>
        <Route path="/top_rated" element = {<MovieLists type="top_rated"/>}></Route>
        <Route path="/upcoming" element = {<MovieLists type="upcoming"/>}></Route>
        <Route path="/subscription" element = {<Subscription/>}></Route>
      </Routes>
      <Footer/>
   </div>
  )
    
}

export default App
