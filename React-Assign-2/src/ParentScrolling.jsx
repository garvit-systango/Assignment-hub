import React, { useRef } from 'react'
import CustomInput from './CustomInput'

const ParetScrolling = () => {

  const refElement = useRef("") 

  const handleClick = () => {
    refElement.current.scrollIntoView({behavior: 'smooth'});
    refElement.current.focus();

  }

  
    
  return (
    <div>
      <div >
      <button onClick={handleClick} style={{margin: '200px', backgroundColor: 'grey'}}>Scroll!</button>
      </div>
      <div style={{height: '1000px'}}></div>
      <div >
        <div style={{margin: '200px'}}>
        <span>Your Input field:</span>
        <CustomInput label = "Enter the name: " ref={refElement}/>
        </div>
      </div>
    </div>
  )
}

export default ParetScrolling
