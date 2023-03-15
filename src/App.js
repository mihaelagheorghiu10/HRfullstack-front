import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import EmployeeList from './components/EmployeeList/EmployeeList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './Pages/Form/EmployeeForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<EmployeeList/>}></Route>
        <Route path='employees/form' element={<EmployeeForm/>}></Route>
        
      </Routes>
    </div>
    
  );
}
export default App
