import React from 'react'
import {createStore} from 'redux'
const InitialState={
    users:[],
    loggedin:null

}
const reducer = (state=InitialState,action) => {
  switch(action.type)
  {
    case "ADD_USER":
        return{
            ...state,users:[...state.users,action.payload]
        
        }
    case "LOGIN":
    const user=  state.users.find(user=>user.contact === action.payload.contact && user.password === action.payload.password)
      
  
      if(user)
      {
        alert("Login Successful")
       return{
        ...state,
        loggedin:user

       }
      }
      else
      {
        alert("user not registered");
        return state;
      }
        
           
    default:
            return state
  }
}

export default createStore(reducer)


