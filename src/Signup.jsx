import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Signup() {

  const [student,setStudent] = useState({
    userName : "",
    password : ""
  })

  const handleChange = (event) =>{
    setStudent((prev)=>({...prev, [event.target.name] : event.target.value}));
  }
  
  const handleSubmit = async(event) =>{
    event.preventDefault();
    try{
      await axios.post("http://localhost:8000/students/signup", student);
    }catch(err){
      console.log(err);
    }
  }
  

  return (
    <div className='flex flex-col place-content-center'>
        <form action="" method='post' onSubmit={handleSubmit} >
            <input type="text" name="userName" placeholder='create a user name' onChange={handleChange} />
            <input type="password" name="password" placeholder='create a password' onChange={handleChange} />
            <button>sign up</button>
        </form>
        <div className='flex'>
            <h1>already a member</h1>
            <button> <Link to="./signin">sign in</Link></button>
        </div>
    </div>
  )
}

export default Signup