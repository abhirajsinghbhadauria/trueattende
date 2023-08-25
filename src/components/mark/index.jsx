import React from 'react'

const students = [{
    name:"Abhiraj",
    rollno: "1",
    // photo:
},
{
    name:"naveen",
    rollno:"2"
}]



    const display = () => {
        students.map((student) =>(
            <div>
            {student.rollno} {student.name}
            <form action="">
                <input type="checkbox" id='present' onClick={display}/>
                <label htmlFor="present">Present</label>
                <input type="checkbox" id='absent' onClick={display}/>
                <label htmlFor="present">Absent</label>
            </form>
            </div>
        ))
    }
  

const Mark = () => {
  return (<div>{display}
  </div> 
  )
}

export default Mark
