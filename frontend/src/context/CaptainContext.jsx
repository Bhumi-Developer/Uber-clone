import React,{useState,createContext} from 'react'

export const CaptainDataContext = createContext()

function CaptainContext({children}) {
    const [captain,setCaptain] = useState({
             fullname:{
                 firstname: '',
                 lastname: ''
             },
             email: ''
         })

  return (
    <div>
      <CaptainDataContext.Provider value={{captain,setCaptain}}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext
