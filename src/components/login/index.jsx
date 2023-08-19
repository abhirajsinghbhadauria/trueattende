import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import Wrapper from './style';

const Login = () => {
    const [contact,setContact]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch();
    const login=()=>{
        dispatch({
            type:"LOGIN",payload:{contact,password}
        })
        console.log(contact);
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
