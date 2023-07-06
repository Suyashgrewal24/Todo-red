import React from 'react'
import Navbar from './components/Navbar'
import Forms from './components/Inputs'
import './App.css'
import ListGroup from './components/ListGroup'
import Body from './components/Body'

function App() {
  return (
    <>
      <div className="app bg-gray-700">

        <Navbar />
        <Body />

      </div>
    </>

  )
}

export default App