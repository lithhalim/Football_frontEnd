import React from 'react';
import "./style/style.scss";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Two_team_container from '../two-team-section/two-team';



function Hreader_Country({countryData}:any) {
  
  return (
    <>
        {countryData.length>0?
          <div>
            <div className='country-header'>
                <div className='icon-section'>
                    <img src={countryData[0].country_logo} alt="" />
                    <div className='name-country'>
                        <p style={{fontWeight:"bold"}}>{countryData[0].country_name}</p>
                        <p>{countryData[0].league_nam}</p>
                    </div>
                </div>
                <ChevronRightIcon/>
                
            </div>
              {countryData.map((data:any,i:any)=>(
              <Two_team_container DataUse={data} key={i}/>
              ))}
          </div>
        :<></>}
    </>

    
  )
}

export default Hreader_Country