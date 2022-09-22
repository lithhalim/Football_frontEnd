import React, { useEffect, useState } from 'react'
import Side_Bar_Item from './side-bar-item';
import "./style/style.scss";



function Side_bar({DataUse,Select_Country_Child}:any) {
  const [DataHave,setDataHave]=useState(DataUse)

  //Filder Data Depend Of The Name Of The Item
  const SearchTeam=(e:any)=>{
    let newData=DataHave.filter((data:any,i:any)=>(data[0].country_name.toLowerCase().startsWith(e.target.value.toLowerCase())))
    setDataHave(newData)
    if(e.target.value==""){

      setDataHave(DataUse)
    }
  }
  useEffect(()=>{
    setDataHave(DataUse)
  },[DataUse])



  return (
    <div>
      {DataHave!==undefined?
        <div className='side-bar-container'>
            <input type="search" placeholder='search ...' className='input-type'  onChange={SearchTeam}/>
            {DataHave.map((DataHave:any,i:any)=>(
            <Side_Bar_Item key={i} data={DataHave} Select_Country_Child={Select_Country_Child}/>
            ))}
        </div>
        :<></>}
    </div>
  )
}

export default Side_bar