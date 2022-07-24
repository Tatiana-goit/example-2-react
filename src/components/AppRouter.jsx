import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import PostdPage from '../pages/PostIdPage'

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostdPage/>} />
        {/* <Route path="*" element={<Navigate to="/about" replace />}/> */}
      </Routes>
  )
}
