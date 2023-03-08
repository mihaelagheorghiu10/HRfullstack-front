import React, { useState } from 'react'
import styles from './employeeList.module.css'
import { MdEdit, MdDeleteForever } from 'react-icons/md';

export default function EmployeeList() {
    
    const listaEmpleados = [
        {   
            id: "",
            photo: "https://img.freepik.com/vector-premium/icono-avatar-masculino-persona-desconocida-o-anonima-icono-perfil-avatar-predeterminado-usuario-redes-sociales-hombre-negocios-silueta-perfil-hombre-aislado-sobre-fondo-blanco-ilustracion-vectorial_735449-120.jpg",
            name: "Juan",
            lastName: "Perez Cueto",
            position: "Administrador",
            salary: 2000.00,
            joiningDate: new Date(2020,8,15),
            birthDate: new Date(1975, 5, 20),
            phone: "666123456",
            email: "juan.perez@gmail.com",
            location: "Barcelona",
            dni: "12345678Z"
        },
        {   
            id: "",
            photo: "https://img.freepik.com/vector-premium/icono-avatar-masculino-persona-desconocida-o-anonima-icono-perfil-avatar-predeterminado-usuario-redes-sociales-hombre-negocios-silueta-perfil-hombre-aislado-sobre-fondo-blanco-ilustracion-vectorial_735449-120.jpg",
            name: "Maria",
            lastName: "Gonzalez Reyes",
            position: "Gerente de Marketing",
            salary: 2500.00,
            joiningDate: new Date(2010,8,15),
            birthDate: new Date(1985, 5, 20),
            phone: "666654321",
            email: "maria.gonzalez@gmail.com",
            location: "Sabadell",
            dni: "87654321A"
        },
        {   
            id: "",
            photo: "https://img.freepik.com/vector-premium/icono-avatar-masculino-persona-desconocida-o-anonima-icono-perfil-avatar-predeterminado-usuario-redes-sociales-hombre-negocios-silueta-perfil-hombre-aislado-sobre-fondo-blanco-ilustracion-vectorial_735449-120.jpg",
            name: "Esteban",
            lastName: "Dido Loízo",
            position: "CEO",
            salary: 8000.00,
            joiningDate: new Date(2015,9,14),
            birthDate: new Date(1978, 3, 11),
            phone: "666666666",
            email: "elvoladordelarbolada@gmail.com",
            location: "Sant Cugat",
            dni: "12345666X"
        },
        {   
            id: "",
            photo: "https://img.freepik.com/vector-premium/icono-avatar-masculino-persona-desconocida-o-anonima-icono-perfil-avatar-predeterminado-usuario-redes-sociales-hombre-negocios-silueta-perfil-hombre-aislado-sobre-fondo-blanco-ilustracion-vectorial_735449-120.jpg",
            name: "Miguel",
            lastName: "Decer Vantes",
            position: "Editor",
            salary: 1500.00,
            joiningDate: new Date(2017,10,1),
            birthDate: new Date(1970, 7, 21),
            phone: "632368456",
            email: "elmancodelepanto@gmail.com",
            location: "Mataró",
            dni: "12683678Z"
        },
    ];

    const [employeeList, setEmployeeList] = useState(listaEmpleados);


  return (
    <div className = {styles.employeeListContainer}>
      {listaEmpleados.map((employee)=> (
            <div className = {styles.employeeCardContainer}>
                <div className = {styles.employeeImgContainer}>
                    <img className = {styles.employeeImg}src={employee.photo} alt={`Foto ${employee.name} ${employee.lastName}`}/>
                </div>
                <div className = {styles.employeeInfoAndBtnContainer}>
                    <div className = {styles.employeeInfoContainer}>
                        <div className = {styles.nameContainer}>
                            <h4 className = {styles.infoTitle}>Nombre: </h4>
                            <p className = {styles.enployeeName}>{`${employee.name} ${employee.lastName}`}</p>
                        </div>
                        <div className = {styles.positionContainer}>
                        <h4 className = {styles.infoTitle}>Cargo: </h4>
                            <p className = {styles.enployeePosition}>{`${employee.position}`}</p>
                        </div>
                    </div>
                    <div className = {styles.employeeBtnContainer}>
                        <MdEdit className = {styles.editButton}/>
                        <MdDeleteForever className= {styles.deleteButton}/>
                    </div>
                </div>
            </div>

      ))}
    </div>
  )
      }
