import Header from "./components/header";
import Footer from "./components/footer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Student from "./components/student";
import Teacher from "./components/teacher";
import Login from "./components/login";
import Register from "./components/register";
import { useSelector } from "react-redux";

function App() {
  const loggedin=useSelector(state=>state.loggedin)
  return (
    <BrowserRouter>
      <Header></Header>
     <Routes>
      <Route path="/teacher" element={<Teacher />}></Route>
      <Route path="/student" element={<Student />}></Route>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
     </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;
