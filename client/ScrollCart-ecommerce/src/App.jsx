import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Layout from './Layout'
import Cart from './pages/Cart'

function App() {


  return (
    <div className="App ">
         <Routes>
            <Route exact path="/"  element={ <Layout ><Home   /></Layout>} />
            <Route exact path="/cart"  element={ <Layout ><Cart   /></Layout>} />
       </Routes>
     
    </div>
  )
}

export default App
