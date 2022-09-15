import React from 'react'
import { Routes ,Route } from 'react-router-dom';



const Home = () => {
  return <Routes>
    <Route path='/' element="solo" exact />
    <Route path='/list' element="list" exact />
  </Routes>
}

export default Home;