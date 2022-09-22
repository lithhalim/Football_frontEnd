import React from 'react';
import "../style/style.scss";
import Hreader_Country from './header-country-team-plear/Hreader-Country';
import Select_date from "./select-time-header/select_date";



function Scores_conteiner({DataUse,Get_date}:any) {

  const Get_Time=(data:any)=>{
    Get_date(data)
  }


  return (
    <div className='scoure-container'>
      <Select_date  Get_Time={Get_Time}/>
      {DataUse.length>0?DataUse.map((data:any,i:any)=>(
      <Hreader_Country key={i} countryData={data}/>
      )):<></>}
    </div>
  )
}

export default Scores_conteiner
