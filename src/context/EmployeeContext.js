import { createContext } from 'react';

const EmployeeContext = createContext({
  id: null,
  name: null,
  lastName: null,
  photo: null,
  position: null,
  phone: null,
  email: null,
  location: null,
  salary: null,
  joiningDate: null,
  birthDate: null,
  dni: null,
  department: null,
});

export default EmployeeContext;