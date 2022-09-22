import React, { useEffect, useState } from 'react';
import Slider_section from './slider-section/Slider-section';
import "./style/style.scss"

function Select_Two({Datause}:any) {

  const [savePlace,setsavePlace]=useState('0');



  const displayDate=(e:any)=>{
    //Remove The Active From All Item 
    (document.querySelector(".select-two-plear-container")as HTMLElement).childNodes.forEach((item:any)=>{
     item.classList.remove("activass")
    })
    //Add Active To Specific Item
    e.currentTarget.classList.add("activass");
    setsavePlace(e.currentTarget.getAttribute("datatype"))
  }
  useEffect(()=>{
    //Add On click Button For Each Item 
    (document.querySelector(".select-two-plear-container") as HTMLElement).childNodes.forEach((item)=>{
      item.addEventListener("click", displayDate);    
    })
  },[])
  
  return (
    <div >
      <ul className='select-two-plear-container'>
          <li className='activass' datatype='0'>Info</li>
          <li datatype='1'>Summery</li>
          <li datatype='2'>Stats</li>
          <li datatype='3'>Table</li>
          <li datatype='4'>H2H</li>
      </ul>
      <Slider_section selectItem={savePlace} Datause={Datause}/>    
    </div>
  )
}

export default Select_Two