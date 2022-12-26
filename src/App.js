import { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  const [ values, setValues] = useState({
    userName:'',
    email:'',
    birthday:'',
    password:'',
    confirmPassword:''
  })

  //props of the inputs of the form
  const inputs = [
    {
      id:1,
      name:'userName',
      type:'text',
      placeholder:'Username',
      errorMessage:"Username should be 3-16 characters, shouldn't include any special character",
      label:'Username',
      pattern:"^[A-Za-z0-9]{3,16}$",
      title:"Username should be 8-16 characters, shouldn't includeany special character",
      required:true,

    },
    {
      id:2,
      name:'email',
      type:'email',
      placeholder:'youremail@company.com',
      errorMessage:"Should be a valid email address",
      label:'Email'
    },
    {
      id:3,
      name:'birthday',
      type:'date',
      placeholder:'Birthday',
      errorMessage:"",
      label:'Birthday'
    },
    {
      id:4,
      name:'password',
      type:'password',
      placeholder:'password',
      errorMessage:"Password should be 8-20 characters",
      label:"Password",
      pattern:"^[A-Za-z0-9]{8,20}$",
    },
    {
      id:5,
      name:'confirmPassword',
      type:'password',
      placeholder:'Confirm your password',
      errorMessage:"Passwords don't match!",
      label:'Confirm your password',
      pattern:values.password
    }
  ]
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e)=> {
    setValues({...values, [e.target.name]: e.target.value})
  }

  console.log(values);
  return (
    <div className="app flex justify-center min-h-screen items-center">
      <form onSubmit={handleSubmit} className="bg-gray-50/50 p-7 border-none rounded-lg h-3/4 w-2/3 sm:w-1/2 xl:w-1/3">
      <h2 className="text-center font-bold text-lg sm:text-2xl pb-2">Register</h2>
       {inputs.map((input) => { 
          return(
            <FormInput 
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
          )
       })}
      <button className="w-full  p-1 border rounded-lg justify-center bg-purple-900 font-bold text-white shadow-xl">Submit</button>
      </form>
    </div>
  );
}

export default App;
