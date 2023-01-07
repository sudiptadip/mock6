import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css";

export default function Signin() {
  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')
  const [userdata,setuserdata] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("https://api-for-todo-mock-6.onrender.com/usersignupdata")
    .then((e)=> setuserdata(e.data))
    .catch((e)=> console.log(e))
  },[])

 function  Signinreq(){
      // console.log({password,username})
      // console.log(userdata)
      
       userdata.map((e)=>{
        if(e.username === username && e.password === password){
          localStorage.setItem("user", JSON.stringify(e))
          alert("signin successful")
          navigate('/')
        }
      })
  }



  return (
    <div className="signupdiv">
        <p>Welcome!</p>
        <h2>Sign up to</h2>
        <span>Our Todo App</span>
      <div>
        <p>User Name</p> <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="User Name" />
      </div>
      <div>
        <p>Password</p> <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </div>
      <div>
        <button onClick={Signinreq} >Registor</button>
      </div>
      <div>
        <div className="linktosignup">
          Create a Account
          <span onClick={()=>navigate('/signup')} style={{cursor: "pointer",color: "blue"}} >signin</span>
        </div>
      </div>
    </div>
  )
}
