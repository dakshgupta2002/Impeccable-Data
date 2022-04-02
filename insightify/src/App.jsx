import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Home, About, Results, Insightify } from './pages'
import Login from './pages/Insightify/page/Login/Login'
import Register from './pages/Insightify/page/Login/Register'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/results" element={<Results/>} />
      <Route path="/insightify" element={< Insightify />} />
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
