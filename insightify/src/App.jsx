import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Home, About, Insights, Visitors } from './pages'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/insights" element={<Insights/>} />
      <Route path="/visitor" element={< Visitors />} />
    </Routes>
  )
}
