// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ClassIA = () => {
//     const [students, setStudents] = useState([]);
//     const [currentStudentIndex, setCurrentStudentIndex] = useState(0);

//     useEffect(() => {
//         axios.get("https://quizattendace.onrender.com/api/user/read")
//         .then(res => {
//             const studentUsers = res.data.filter(user => user.role && user.role.toLowerCase() === 'student');
//             setStudents(studentUsers);
//         })
//         .catch(err => {
//             console.log(err.message);
//         });
//     }, []);

//     const markPresent = (studentId) => {
//         // Update student's attendance status as present
//         // This is just a placeholder, you should implement the logic to update the server
//         console.log(`Marking student ${studentId} as Present`);
//         attendance = [...attendance,true]
//         setCurrentStudentIndex(prevIndex => prevIndex + 1);
//     };

//     const markAbsent = (studentId) => {
//         // Update student's attendance status as absent
//         // This is just a placeholder, you should implement the logic to update the server
//         console.log(`Marking student ${studentId} as Absent`);
//         attendance = [...attendance,false]
//         setCurrentStudentIndex(prevIndex => prevIndex + 1);
//     };

//     return (
//         <div>
//             {currentStudentIndex < students.length && (
//                 <div key={students[currentStudentIndex].id}>
//                     {students[currentStudentIndex].name}
//                     <form>
//                         <button type="button" onClick={() => markPresent(students[currentStudentIndex].id)}>Present</button>
//                         <button type="button" onClick={() => markAbsent(students[currentStudentIndex].id)}>Absent</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ClassIA;
