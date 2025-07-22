import React,{useState,createContext} from 'react'

export const CaptainDataContext = createContext()

function CaptainContext({children}) {
    const [isLoading,setIsLoading] = useState(false)
    const [captain,setCaptain] = useState({
             fullname:{
                 firstname: '',
                 lastname: ''
             },
             email: '',
             vehicle:{
             color:'',
             plate:'',
             capacity:'',
             vehicleType: ''
             }
         })

  return (
    <div>
      <CaptainDataContext.Provider value={{captain,setCaptain,isLoading,setIsLoading}}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext
