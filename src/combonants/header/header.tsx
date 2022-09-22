import React, { useState } from 'react'
import Select_item from './select-item';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import "./style/style.scss";
import { useNavigate } from 'react-router';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
  
const Header:React.FC=()=> {
  const Navi=useNavigate()
  const homePage=()=>{Navi("/")}
  const [stateWort,setStatteWord]=useState<any>(false)
  const [stateSearch,setstateSearch]=useState<any>(false)


  const Navbarsection=()=>{
    stateWort==false?setStatteWord(true):setStatteWord(false);
    stateWort==false? (document.querySelector(".select-item-container") as HTMLElement).classList.add("showBar"):  (document.querySelector(".select-item-container") as HTMLElement).classList.remove("showBar") 
  }

  const showSearchBar=()=>{
    stateSearch==false?setstateSearch(true):setstateSearch(false);
    stateSearch==false? (document.querySelector(".side-bar-container") as HTMLElement).classList.add("showSearchBar"):  (document.querySelector(".side-bar-container") as HTMLElement).classList.remove("showSearchBar") 
  }

  return (
    <div className='header-container'>
          <div className='Slider-bar' >
              <div className='nav-bar-section' onClick={Navbarsection}>
                <DensityMediumIcon />
              </div>
                <p className='logo' style={{cursor:"pointer"}} onClick={homePage}>Fifa <span>JO</span></p>
                <div className='search-item' style={{cursor:"pointer"}} onClick={showSearchBar}>
                  <ManageSearchIcon />
                </div>
          </div>
          <Select_item  />
    </div>
  )
}

export default Header