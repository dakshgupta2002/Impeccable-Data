import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Home, About, Results, Insightify } from './pages'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/results" element={<Results/>} />
      <Route path="/insightify" element={< Insightify />} />
    </Routes>
  )
}
