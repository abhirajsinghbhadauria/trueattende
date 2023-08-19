import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './style'

const Teacher= () => {
  return (
    <Wrapper>
        <main>
          <h1>Attendance System</h1>
          <div className='button inner'>
            <input type="button" value="Mark" />
            <input type="button" value="View" />
          </div>
          

          <div className='studentYear inner'>
            <label htmlFor="">Select Year:</label>
            <select name="year" id="" >
                <option disabled selected>Select year</option>
                <option value="first">1st year</option>
                <option value="second">2nd year</option>
                <option value="third">3rd year</option>
                <option value="forth">4th year</option>
            </select>
            </div>

          <div className='studentSection inner'>
            <label htmlFor="">Select Section:</label>
            <select name="section" id="" >
                <option disabled selected>Select section</option>
                <option value="A">Sec -A</option>
                <option value="B">Sec -B</option>
                <option value="C">Sec -C</option>
            </select>
          </div>

        </main>
        
    </Wrapper>
    
  )
}

export default Teacher
