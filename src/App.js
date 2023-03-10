import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import EmployeeList from './components/EmployeeList/EmployeeList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EmployeeList/>
    </div>
    
  );
}
export default App
