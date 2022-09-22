import React, { useEffect, useRef, useState,RefObject } from 'react';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useNavigate } from 'react-router';
import "./style/style.scss"



const Select_item:React.FC=({dataItem}:any)=> {
  const [savePlace,setsavePlace]=useState('scores');
  const Navi=useNavigate()



const displayDate=(e:any)=>{
  //Remove The Active From All Item 
  (document.querySelector(".select-item-container")as HTMLElement).childNodes.forEach((item:any)=>{
   item.classList.remove("actviso")
  })
  //Add Active To Specific Item
  e.currentTarget.classList.add("actviso");
  setsavePlace(e.currentTarget.lastChild.textContent)
}
useEffect(()=>{
  //Add On click Button For Each Item 
  (document.querySelector(".select-item-container") as HTMLElement).childNodes.forEach((item)=>{
    item.addEventListener("click", displayDate);    
  })
},[])



const newsPaage=()=>{Navi("/allNews")}
const scorePage=()=>{Navi("/")}

  return (
      <ul className='select-item-container'  >
          <li className='actviso' onClick={scorePage}>
              <SportsSoccerIcon/>
              <span>Scores</span>
          </li>
          <li>
            <StarBorderIcon/>
            <span>Favourites</span>
          </li>
          <li onClick={newsPaage}>
            <NewspaperIcon/>
            <span>News</span>
          </li>
          <li>
            <ArrowCircleDownIcon/>
            <span>Get The App</span>
          </li>
      </ul>
  )
}

export default Select_item