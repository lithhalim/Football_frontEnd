import React, { useState } from 'react';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { format } from 'fecha';




function Select_date({Get_Time}:any) {

   let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
   let dateNow= format(new Date(), 'YYYY-MM-DD '); 
   let Month_Number=dateNow.split("-")[1]
   let Day_Number=Number(dateNow.split("-")[2])
   let Month_Word=months[Number(dateNow.split("-")[1])]


   const [DateUse,setDateUse]=useState([{day:'before',time:`${Day_Number-2} ${Month_Word}`,month_number:Month_Number},{day:'yesterday',time:`${Day_Number-1} ${Month_Word}`,month_number:Month_Number},{day:'today',time:`${Day_Number} ${Month_Word}`,month_number:Month_Number},{day:'tomorrow',time:`${Day_Number+1} ${Month_Word}`,month_number:Month_Number},{day:'after',time:`${Day_Number+2} ${Month_Word}`,month_number:Month_Number}])


   
    const getDate=(e:any)=>{
        let day=(e.currentTarget.childNodes[1].textContent.split(" ")[0])
        let month=(e.currentTarget.getAttribute("datatype"))    
        Get_Time({day:day,month:month})
    }
   
  return (
    <div className='date-conteiner'>

        <LiveTvIcon/>
            <div className='time-containetr'>
                {
                    DateUse.map(({day,time,month_number},i)=>(
                        <div className='day-container' key={i} onClick={getDate} datatype={month_number}>
                            <p>{day}</p>
                            <p>{time}</p>
                        </div>
                    ))
                }
            </div>
        <InsertInvitationIcon/>
        
      
    </div>
  )
}

export default Select_date
