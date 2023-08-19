import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import Wrapper from './style';
import axios from 'axios';

const Login = () => {
    const [contact,setContact]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const login=()=>{
      axios.post("https://server-api1-li2k.onrender.com/api/user/login",{
        contact,password
      }).then((res)=>{
        console.log(res)
        navigate("/teacher")
      }).catch(err=>{
        console.log(err)
        alert("Wrong Credential")
      }).finally(()=>{
        console.log("Finally running")
      })
        // dispatch({
        //     type:"LOGIN",payload:{contact,password}
        // // })
        // console.log(contact);
    }
  return (
    <Wrapper>
    <div>
       <input type="text" placeholder='contact' value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
      <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <input type="submit"  value="Login" onClick={login}/>
      <Link to="/register">Register</Link>
    </div>
    </Wrapper>
  )
}

export default Login
