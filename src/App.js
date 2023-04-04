import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import EmployeeTable from './components/EmployeeTable/EmployeeTable'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EmployeeForm from './Pages/Form/EmployeeForm'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import LoginPage from './Pages/LoginPage/LoginPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeTable />}></Route>
        <Route path="employees/form/" element={<EmployeeForm />}></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}
export default App
