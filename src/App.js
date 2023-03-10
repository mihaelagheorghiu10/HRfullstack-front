import logo from './logo.svg'
import './App.css'
import EmployeeList from './components/EmployeeList/EmployeeList'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <EmployeeList />
    </div>
  )
}
export default App
