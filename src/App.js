import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EmployeeTable/>
    </div>
    
  );
}
export default App
