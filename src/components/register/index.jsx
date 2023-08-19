import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import Wrapper from './style'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch();
    const add=(e)=>{
        // dispatch({
        //     type:"ADD_USER",payload:{name,contact,password}
        // })
        e.target.value="Registering..."
        e.target.disabled=true
        e.preventDefault()
        console.log(e.target)
        axios.post("https://server-api1-li2k.onrender.com/api/user/add ",
          {
          name,contact,password
          }
        ).then(res=>{
          console.log(res.data)
        }).catch(err=>{
          console.log(err.message)
        }).finally(()=>{
          console.log("Finally Running")
          e.target.value="Register"
          e.target.disabled=false
        })
    }

  return (
    <Wrapper>
    <div>
      <input type="text" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input type="text" placeholder='contact' value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
      <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <input type="submit" disabled={false}  value="Register" onClick={add}/>
      
      <Link to="/">Login</Link>
    </div>
    </Wrapper>
  )
}

export default Register
