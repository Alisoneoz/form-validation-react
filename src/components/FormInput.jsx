import React from 'react'

const FormInput = (props) => {
  
  //destructuring props to have a more concise code
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className='flex flex-col '>
      
      <label 
        className='font-semibold text-xs sm:text-base'>{label}
      </label>
       
       <input 
          {...inputProps}
          onChange={onChange}
          className="mx-0 mt-1 mb-4 p-2 border rounded-md focus:border-slate-500 text-xs sm:text-sm w-full "
        />
      <span>{errorMessage}</span> 
    </div>
  )
}

export default FormInput
//imported into app.js