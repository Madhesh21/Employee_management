import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AddEmployee from "./pages/addEmployee"
import EditEmployee from "./pages/EditEmployee"
import EmployeeDetails from "./pages/EmployeeDetails"

function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddEmployee/>} />
        <Route path="/edit/:id" element={<EditEmployee/>} />
        <Route path="/details/:id" element={<EmployeeDetails/>} />
      </Routes>
    </Router>
  )
}

export default App
