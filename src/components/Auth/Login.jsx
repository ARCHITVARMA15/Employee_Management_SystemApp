import React, { useState } from 'react'

const Login=({handleLogin})=>{

   
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        //child ke andar sei parent ko function pass kar diya, consider this as a trick 
        handleLogin(email,password)
        console.log("email is",email)
        console.log("password is",password)

        setEmail("")
        setPassword("")
    }

  return(
    
  <div className ='flex h-screen w-screen items-center justify-center'>
    <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form  
        //to prevent the default reloading of form here
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
            
            <input 
                value = {email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
            required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Email'/>
            <input 
            value ={password}
            //basically adding event listeners
            onChange = {(e)=>{
                setPassword(e.target.value)
            }}
            required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full mt-4 placeholder:text-gray-400' type="password" placeholder='Enter password' />
            <button className='mt-5 text-white border-none outline-none  border-2 bg-emerald-600 text-xl py-4 px-5 rounded-full mt-4 placeholder:text-white'>Login</button>
        </form>
    </div>
  </div>
  )
}


export default Login