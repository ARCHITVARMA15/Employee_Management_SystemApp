import React from 'react'
import Header from '../others/Header.jsx'
import CreateTask from '../others/CreateTask.jsx'
import AllTask from '../others/AllTask.jsx'

const AdminDashboard = (props)=>{
    return(
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser}/>
            <CreateTask/>
            <AllTask/>
          
        </div>
    )
}

export default AdminDashboard