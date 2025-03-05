import React, { createContext, useState } from 'react'
export const dataContext  = createContext();
 
function UserContext({children}) {
    let [startRes,setStartRes] = useState(false)
    let [ popUp, setPopUp]  = useState(false)
    let [input,setInput] = useState("")
    let value ={
     startRes,setStartRes,
     popUp, setPopUp,
     input,setInput
    }
  return (
    <div>
    <dataContext.Provider value ={value}>
     {children} 
     </dataContext.Provider>
    </div>
  )
}

export default UserContext
