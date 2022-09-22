import React, { useState } from "react";


//use to create the context 
export const Catagory_Create_Context=React.createContext();


export function AllData_Provider(props) {

    const [all_Data,setAll_data]=useState(false);
    const [Specific_Data,setSpecific_Data]=useState(window.localStorage.newsDataSave?JSON.parse(window.localStorage.newsDataSave):false)



  return (
    <Catagory_Create_Context.Provider value={{all_Data,setAll_data,setSpecific_Data,Specific_Data}}>
        {props.children}
    </Catagory_Create_Context.Provider>
  ) 
}
