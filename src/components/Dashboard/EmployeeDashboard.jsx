import React from 'react'
import Header from '../others/Header.jsx'
import TaskListNumber from '../others/TaskListNumber.jsx'
import TaskList from '../../TaskList/TaskList.jsx'
//import TaskList from '../../TaskList/TaskList.jsx'
const EmployeeDashboard = (props)=>{
   
    return(
    
        <div className='p-10 bg-[#1C1C1C] h-screen'>
          
            {props.data &&<Header changeUser={props.changeUser} data={props.data}/>}
           {props.data &&<TaskListNumber data={props.data}/>}
          
          {props.data&&<TaskList data={props.data}/>}
        </div>
    )
}

export default EmployeeDashboard