import React from 'react';

function SignIn() {

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
      await axios.post("http://localhost:8000/students/signin", student);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className='flex flex-col'>
        <form action="" method='post' onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder='enter user name' onChange={handleChange}/>
            <input type="password" name="password" placeholder='enter your password' onChange={handleChange} />
            <button>sign in</button>
        </form>
    </div>
  )
}

export default SignIn;