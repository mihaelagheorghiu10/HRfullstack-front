import './App.css'
import Navbar from './components/Navbar/Navbar'
import EmployeeTable from './components/EmployeeTable/EmployeeTable'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import { AuthProvider } from './hooks/useAuth'
import RequireAuth from './components/RequireAuth/RequireAuth'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <RequireAuth>
              <EmployeeTable />
            </RequireAuth>
          }>
          </Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}
export default App
