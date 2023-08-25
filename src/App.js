import Header from "./components/header";
import Footer from "./components/footer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Student from "./components/student";
import Teacher from "./components/teacher";
import Login from "./components/login";
import Register from "./components/register";
import { useSelector } from "react-redux";
import ClassIA from "./components/cs-i-a";
import Mark from "./components/mark";

function App() {
  const loggedin=useSelector(state=>state.loggedin)
  return (
    <BrowserRouter>
      <Header></Header>
     <Routes>
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/student" element={<Student /> } />
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path = "/cs-i-a" element = {<ClassIA/>}/>
      <Route path = "/mark" element = {<Mark/>} />
     </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;
