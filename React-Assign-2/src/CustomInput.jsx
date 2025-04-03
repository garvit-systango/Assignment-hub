import React from 'react'
import { forwardRef } from 'react'

const CustomInput = forwardRef((props, refElement) => {
  return (
    <div>
      <input type="text" ref={refElement}/>
    </div>
  )
})

export default CustomInput
