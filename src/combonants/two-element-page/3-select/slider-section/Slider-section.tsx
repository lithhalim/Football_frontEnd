import React, { useEffect, useRef, useState } from 'react';
import Info_TwoPlear from '../tem-select-all-information/1-info/Info_TwoPlear';
import Summery_Two from '../tem-select-all-information/2-summary/Summery_Two';
import Statistic_two from '../tem-select-all-information/3-stats/Statistic_two';
import Select_Table from '../tem-select-all-information/4-table/Select_Table';
import Table_TwoTeam from '../tem-select-all-information/4-table/Table_TwoTeam';
import H2H_TwoTeam from '../tem-select-all-information/HEH/H2H_TwoTeam';
import "./style/style.scss";

function Slider_section({selectItem,Datause}:any) {
    let Place=Number(selectItem);
    

    useEffect(()=>{
        let width= (document.querySelector(".carsule-slider")as HTMLElement ).offsetWidth;
        (document.querySelector(".carsule-slider")as HTMLElement ).style.transform=` translateY(-${Place*100}vh)`;
        (document.querySelector(".carsule-slider")as HTMLElement ).style.transition=` all .5s `;
    },[Place])   
    
  


  return (
        <div className='carsule-container'>
                <div className='carsule-slider' >
                    <Info_TwoPlear Datause={Datause}/>
                    <Summery_Two Datause={Datause}/>
                    <Statistic_two Datause={Datause.statistics}/>
                    <Select_Table Datause={Datause}/>
                    <H2H_TwoTeam Datause={Datause}/>
                </div>
        </div>

  )
}

export default Slider_section