import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function List() {

  const [students,setStudents] = useState([]);

  // data fatching from backend
  const fatchData = async () =>{
    try{
      const res = await axios.get("http://localhost:8000/students")
      setStudents(res.data);
    }catch(err){
      console.log(err)
    }
  }
  
  // render entry upon students change
  useEffect(()=>{
    fatchData();
  },[])

  // delete entry
  const deleteStudent = async (id) => {
    try{
      await axios.delete("http://localhost:8000/students/"+id);
    }catch(err){
      console.log(err);
    }
  }


  return (
    <>
    <div className="bg-green-100 flex flex-col place-content-center w-full p-1">
    <h1 className="text-5xl text-center p-2 m-2">SSC BATCH 2011</h1>
      <table className="w-full h-auto text-center ">
        <thead className="text-2xl font-semibold border-black border-2 p-2 m-2 bg-slate-200">
          <tr>
            <th className="border-black border-2 ">Name</th>
            <th className="border-black border-2 ">school name</th>
            <th className="border-black border-2 ">email id</th>
            <th className="border-black border-2 ">phone no</th>
            <th className="border-black border-2 ">facebook id</th>
            <th className="border-black border-2 ">instagram id</th>
            <th className="border-black border-2 ">action</th>
          </tr>
        </thead>
        <tbody className="bg-slate-50 text-lg" >
          {students.map((student)=>{
            return(
            <>
              <tr key={student.id} className="border-black border-2 hover:bg-slate-200 hover:cursor-pointer">  
                <td className="border-black border-2 ">{student.name}</td>
                <td className="border-black border-2 ">{student.school_name}</td>
                <td className="border-black border-2 ">{student.email}</td>
                <td className="border-black border-2 ">{student.phone}</td>
                <td className="border-black border-2 ">{student.facebook}</td>
                <td className="border-black border-2 ">{student.instagram}</td>
                <td className="border-black border-2 "><button className="bg-red-400 p-1 rounded-md hover:bg-red-600" onClick={()=>{deleteStudent(student.id)}}>del</button>
                {/* <button className="bg-green-400 p-1 rounded-md hover:bg-green-600">
               <Link to={"/edit/"+student.id}>edit</Link> </button>  */}
               </td>
              </tr>
            </>
            )
          })}
        </tbody>
      </table>
      <button className="bg-green-400 w-auto mx-auto p-2 m-5 font-semibold rounded-md hover:bg-green-600 hover: cursor-pointer"><Link to="/add">Add your info</Link></button> 
    </div>
    </>
  )
}

export default List;