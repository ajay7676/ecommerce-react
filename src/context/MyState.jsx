import React, { useState } from 'react';
import MyContext from './MyContext';


const MyState = (props) => {
   const [mode , setMode] = useState("light");
   const toggleMode = () => {
       if(mode === "light"){
          setMode("dark");
          document.body.style.backgroundColor ="rgb(17, 24, 39)"
       }else{
         setMode('light')
         document.body.style.backgroundColor = "#fff"
       }
   }
  return (
    <MyContext.Provider value={{mode ,toggleMode}} >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState