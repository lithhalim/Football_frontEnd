import React, { useContext } from 'react';
import { useNavigate } from 'react-router';



function Side_Bar_Item({data,Select_Country_Child}:any) {
  const Navi=useNavigate()

  const selectSpecificCountry=(e:any)=>{
   let countrySelect=e.currentTarget.getAttribute("datatype");
   Select_Country_Child(countrySelect)
   Navi("/selectcountry")
  }



  return (
    <>
        {
          data.length>0?
          <div className='item-section' datatype={data[0].country_name} onClick={selectSpecificCountry}>
              <img src={data[0].country_logo}/>
              <p>{data[0].country_name}</p>
          </div>:<></>
        }
    </>
  )
}

export default Side_Bar_Item