import React, { useEffect, useState } from 'react';
import "./style/style.scss"
import Table_TwoTeam from './Table_TwoTeam';

function Select_Table({Datause}:any) {
    const [savePlace,setsavePlace]=useState('total');
    console.log()



    const displayDate=(e:any)=>{
      //Remove The Active From All Item 
      (document.querySelector(".select-two-plear-table")as HTMLElement).childNodes.forEach((item:any)=>{
       item.classList.remove("activass")
      })
      //Add Active To Specific Item
      e.currentTarget.classList.add("activass");
      setsavePlace(e.currentTarget.getAttribute("datatype"))
    }
    useEffect(()=>{
      //Add On click Button For Each Item 
      (document.querySelector(".select-two-plear-table") as HTMLElement).childNodes.forEach((item)=>{
        item.addEventListener("click", displayDate);    
      })
    },[])
    
    return (
      <div style={{marginTop:"10px 30px",height:"100vh",overflowY:"scroll"}} >
        <ul className='select-two-plear-table'>
            <li className='activass file1-section' datatype='total'>All</li>
            <li datatype='home' className='file1-section'>Home</li>
            <li datatype='away' className='file1-section'>Away</li>
        </ul>
        <Table_TwoTeam Datause={Datause} savePlace={savePlace}/>
      </div>
    )
  }

export default Select_Table
