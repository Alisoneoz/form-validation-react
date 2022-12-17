import React from 'react'

const FormInput = (props) => {
  return (
    <div>
      <div className="block">
        <label></label>
        <input type={props} placeholder={props.placeholder} className="mx-0 my-2 p-4 border rounded-md"/>
      </div>
    </div>
  )
}

export default FormInput