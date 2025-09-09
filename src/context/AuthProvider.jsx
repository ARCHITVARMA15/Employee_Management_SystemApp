import  React, { createContext, useState,useEffect }  from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) =>{
    //localStorage.clear()
    const[userData, setUserData] = useState(null)

    
    //setLocalStorage()->bad practice as it may lead to infinite loops

useEffect(() => {
        setLocalStorage()
        const {employees,admin} = getLocalStorage()
        setUserData({employees,admin})
    }, [])
    
   
    return(
        <div>
           <AuthContext.Provider value={userData}>
            {children}
           </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider