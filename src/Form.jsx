import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Form() {
    
    const [data,setData] = useState({
      id: null,
      name : "",
      school_name: "",
      email : "",
      phone: null,
      facebook: "",
      instagram: ""
    });

    const [schoolOpen,setSchoolOpen] = useState(false);

    const navigate = useNavigate();

    // form submit
    const handleSubmit = async (event) =>{
      event.preventDefault();
      try{
        await axios.post("http://localhost:8000/students", data);
        navigate("/");
      }catch(err){
        console.log(err);
      }
    }

    // state change
    const handleChange = (event) =>{
      if(event.target.value === "other"){
        setSchoolOpen(true);
      }
      setData((prev)=>({...prev, [event.target.name]:event.target.value}));
    }
     
    
  return (
    <div className='mx-auto h-full w-full'>
      <form method='post' action="" onSubmit={handleSubmit} className='flex flex-col place-content-center mx-auto w-3/4 md:w-1/2 lg:w-2/5 h-full p-5 m-5 bg-green-300'>
        <h1 className='text-center text-white text-2xl md:text-3xl font-bold mb-5'>SSC BATCH 2011</h1>
        <input name="name" placeholder='Enter your name' onChange={handleChange} className='p-1 m-1 bg-green-200 text-start hover:bg-green-100'/>
        <select name="school_name" onChange={handleChange} className='m-1 p-1 border-1 border-black bg-green-50 hover:cursor-pointer'>
          <option>Select your School name here...</option>
          <option value="Narayanganj High School and College">Narayanganj High School and College</option>
          <option value="Morgan Girls' School & College">Morgan Girls' School & College</option>
          <option value="Narayanganj Govt. Girls' High School">Narayanganj Govt. Girls' High School</option>
          <option value="Narayanganj Ideal School">Narayanganj Ideal School</option>
          <option value="Adarsha Girls' High School & College">Adarsha Girls' High School & College</option>
          <option value="Narayanganj Bar Academy">Narayanganj Bar Academy</option>
          <option value="I.E.T Government High School">I.E.T Government High School</option>
          <option value="Narayanganj Girls' High School & College">Narayanganj Girls' High School & College</option>
          <option value="joy Govinda High School">Joy Govinda High School</option>
          <option value="Isdair Rabeya Hossain High School">Isdair Rabeya Hossain High School</option>
          <option value="Aligonj High School">Aligonj High School</option>
          <option value="Narayangonj Model High School">Narayangonj Model High School</option>
          <option value="Dapa Adarsha High School">Dapa Adarsha High School</option>
          <option value="Sonakanda High School">Sonakanda High School</option>
          <option value="Fatulla Pilot High School">Fatulla Pilot High School</option>
          <option value="Hariharpara High School">Hariharpara High School</option>
          <option value="Jalkuri High School and College">Jalkuri High School and College</option>
          <option value="Dhankunda Popular High School">Dhankunda Popular High School</option>
          <option value="Arribs International School and College">Arribs International School and College</option>
          <option value="Syedpur Banga Bandhu High School">Syedpur Banga Bandhu High School</option>
          <option value="other" >others..</option>
        </select>
        {schoolOpen&&<input name="school_name" placeholder='Enter your School name' onChange={handleChange} className='p-1 m-1 bg-green-200 text-start hover:bg-green-100' />} 
        <input name="email" placeholder='Enter your Email (optional)' onChange={handleChange} className='p-1 m-1 bg-green-200 text-start hover:bg-green-100' />
        <input name="phone" placeholder='Enter your phone no (optional)' onChange={handleChange} className='p-1 m-1 bg-green-200 text-start hover:bg-green-100'/>
        <input name="facebook" placeholder='Enter your facebook id (optional)' onChange={handleChange} className='p-1 m-1 bg-green-200 text-start hover:bg-green-100'/>
        <input name="instagram" placeholder='Enter your instagram id (optional)' onChange={handleChange}  className='p-1 m-1 bg-green-200 text-start hover:bg-green-100'/>
        <button type="submit" className='w-auto mx-auto p-2 m-2 text-lg rounded-md bg-green-500 text-white hover:cursor-pointer hover:bg-green-600'>Submit</button>
      </form>
      <h1 className="p-2 text-center font-semibold left-0 bottom-0">NB:This page is only for SSC batch 2011, use caution when filling the form</h1>
    </div>
  )
}

export default Form;