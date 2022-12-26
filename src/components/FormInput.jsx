import React, { useState } from 'react'
import "./formInput.css";

const FormInput = (props) => {
  
  //destructuring props to have a more concise code
  const { label, errorMessage, onChange, required, id, ...inputProps } = props;

  //state to update when the input is focused in order to display error messages only after user filled the field
  const [focused, setFocused]= useState(false)

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className='flex flex-col '>
      
      <div className="mb-1">
        <label 
          className='font-semibold text-base sm:text-lg'>{label}
        </label>
      </div>
      <div className="mb-4">
        <input 
            {...inputProps}
            onChange={onChange}
            required
            onBlur={handleFocus}
            focused={focused.toString()}
            className="mx-0  p-2 border rounded-md focus:border-slate-500 text-sm sm:text-base w-full peer"
          />
        <span className='mt-1 font-semibold text-red-600 text-xs sm:text-sm leading-3 hidden  '>{errorMessage}</span> 
      </div>

    </div>
  )
}

export default FormInput
//imported into app.js