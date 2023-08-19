import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import Wrapper from './style'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch();
    const add=()=>{
        dispatch({
            type:"ADD_USER",payload:{name,contact,password}
        })
    }

  return (
    <Wrapper>
    <div>
      <input type="text" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input type="text" placeholder='contact' value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
      <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <input type="submit"  value="Add" onClick={add}/>
      
      <Link to="/">Login</Link>
    </div>
    </Wrapper>
  )
}

export default Register
