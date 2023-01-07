import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from './Signin'
import Signup from './Signup'
import Todo from './Todo'

export default function AllRoute() {
  return (
    <Routes>
        <Route path='/' element={<Todo/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin />} />
    </Routes>
  )
}
