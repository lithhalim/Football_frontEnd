import React, { useState } from "react";


//use to create the context 
export const TwoPlear_Create_Context=React.createContext();


export function Two_Plear_DataProvider(props) {

    const [all_Data,setAll_data]=useState( window.localStorage.Two_Plear_Saver_Section?JSON.parse(window.localStorage.Two_Plear_Saver_Section):false);




  return (
    <TwoPlear_Create_Context.Provider value={{all_Data,setAll_data}}>
        {props.children}
    </TwoPlear_Create_Context.Provider>
  ) 
}
