import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Signuprequest } from "../Redux/auth_reducer/action";

export default function Signup() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')
    const [confirmPassword,setConfirmpassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

function registor(){
  dispatch(Signuprequest({email,password,username,confirmPassword}))
    // console.log()
}

  return (
    <div className="signupdiv">
        <p>Welcome!</p>
        <h2>Sign up to</h2>
        <span>Our Todo App</span>
      <div>
        <p>Email</p> <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" />
      </div>
      <div>
        <p>User Name</p> <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="User Name" />
      </div>
      <div>
        <p>Password</p> <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </div>
      <div>
        <p>Confirm Password</p>
        <input type="password" onChange={(e)=>setConfirmpassword(e.target.value)} placeholder="Confirm Password" />
      </div>
      <div>
        <button onClick={registor} >Registor</button>
      </div>
      <div>
        <div className="linktosignup">
          Already have a Account<span onClick={()=>navigate('/signin')} style={{cursor: "pointer",color: "blue"}} >signup</span>
        </div>
      </div>
    </div>
  );
}
