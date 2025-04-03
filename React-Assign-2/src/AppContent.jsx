import React from 'react'
import Debugging from './Debug'
import ParetScrolling from './ParentScrolling'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

const AppContent = () => {
  const navigate = useNavigate();

  const handleDebugClick = () => {
    navigate('debugging')
  }

  const handleRefClick = () => {
    navigate('ParetScrolling')
  }

  return (
    <>
    <div>
      <h1 style={{marginLeft: '300px'}}>React Assignment 2</h1>
    </div>
    <div>
      <div style={{marginLeft: '300px'}}>
        <button onClick={handleDebugClick}>Debugger</button>
        <button onClick={handleRefClick}>Forwardref & useRef</button>
      </div>
    </div> 
    <Routes>
      <Route path="Debugging/*" element={<Debugging/>}/>
      <Route path='ParetScrolling' element={<ParetScrolling />}/>
    </Routes>
    </>
  )
}

export default AppContent