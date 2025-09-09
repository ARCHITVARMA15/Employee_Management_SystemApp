//import React, { useEffect } from 'react'
import React, { useContext, useEffect, useState } from 'react'

import Login from "./components/Auth/Login.jsx"
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'


const App=()=>{

  const [user,setUser] = useState(null)
  const[loggedInUserData,setLoggedInUserData] =useState(null)
  const authData = useContext(AuthContext)

  

  useEffect(()=>{

    if (authData?.employees) {
    localStorage.setItem('employees', JSON.stringify(authData.employees))
  }
    const loggedInUser= localStorage.getItem('loggedInUser','')

    if(loggedInUser){
     const userData = JSON.parse(loggedInUser)

     setUser(userData.role)
     setLoggedInUserData(userData.data)
      
    }
  },[authData])

  const handleLogin = (email,password) =>{
   if(email == 'admin@me.com' && password =='123'){
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
   }else if(authData ){
     const employee =  authData.employees.find((e)=>email == e.email && password== e.password)
      if(employee){
       
        setUser('employee') 
        setLoggedInUserData (employee)   
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    }else{
      alert("Invalid Credentials ")
   }
  }
  
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
/*    <>
    {user === 'admin' ? (
  <AdminDashboard changeUser={setUser} />
) : user === 'employee' && loggedInUserData ? (
  <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
) : null}

    </>*/
  )
}



export default App