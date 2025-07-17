import React, { useState } from 'react'
import { createContext } from 'react'
export const UserDataContext = createContext()

function userContext({children}) {

    const [user,setUser] = useState({
        fullname:{
            firstname: '',
            lastname: ''
        },
        email: ''
    })

  return (
    <div>
        <UserDataContext.Provider>
      {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default userContext
