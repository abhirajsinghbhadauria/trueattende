import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './style'


const Teacher= () => {
  return (
    <Wrapper>
      <div className='inner'>
        <form className='year'>
          <input type="button" value="I" />
          <input type="button" value="II" />
          <input type="button" value="III" />
          <input type="button" value="IV" />
        </form>
        <form className='search'>
            <input type="text" placeholder='Search' />
            <input type="button" value="Search" />
        </form>
        <form className='classes'>
          <Link to = 'cs-i-a'><input type="button" value="CS-A-I" /></Link>
          <input type="button" value="CS-B-I" />
          <input type="button" value="CS-C-I" />
          <input type="button" value="CS-A-II" />
          <input type="button" value="CS-B-II" />
          <input type="button" value="CS-C-II" />
          <input type="button" value="CS-A-III" />
          <input type="button" value="CS-B-III" />
          <input type="button" value="CS-C-III" />
        </form>
      </div>
    </Wrapper>
    
  )
}

export default Teacher
