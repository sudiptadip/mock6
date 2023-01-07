import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Todo() {

const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))
const [task,setTask] = useState('')
const [alltask,setalltask] = useState([])


function handelclick(){
  axios.post("https://api-for-todo-mock-6.onrender.com/usertododata",{task: task, userdata: user.username})
    .then((response) => {
      console.log(response.data)
      alert("task added")
      setTask('')
    }).catch((e) => {
      console.log(e)
    })
}

useEffect((e)=>{
  axios.get("https://api-for-todo-mock-6.onrender.com/usertododata")
  .then((e)=> setalltask(e.data))
  .catch((e)=> console.log(e))
},[task])


  return (
    <div className='todobox'>
       <h1 className='logout' >Logout</h1>
       <p className='hello'>Hello</p>
       <h2 className='username' >{user.username}</h2>
       <p className='hello' > Good To see you here</p>
       <p className='hello' > Your total task for today 5</p>
       <div className='inputtask'>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
       </div>
       <div>
        <button onClick={handelclick} className='btn' >Add New TasK</button>
       </div>
    {
      alltask.map((e)=>(
        <h1>{e.task}</h1>
      ))
    }
    </div>
  )
}
