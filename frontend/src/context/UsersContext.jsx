import React, { useState } from 'react'
import { createContext } from 'react'
export const UsersDataContext = createContext()

function UsersContext({children}) {
    const [user,setUser] = useState({
         fullname:{
             firstname: '',
             lastname: ''
         },
         email: ''
     })
 
   return (
     <div>
         <UsersDataContext.Provider value={{user,setUser}}>
       {children}
       </UsersDataContext.Provider>
     </div>
   )
}

export default UsersContext
