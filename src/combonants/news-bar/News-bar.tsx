import React, { useContext, useEffect, useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./style/style.scss"
import Item_section from './item';
import axios from 'axios';
import { Catagory_Create_Context } from '../../context-api/All_News';





function News_bar({selectCountry}:any) {

let [DataUsable,setDataUsable]=useState<any>(false)
let DataContext=useContext(Catagory_Create_Context);


useEffect(()=>{
  axios.get(`https://newsapi.org/v2/everything?q=${selectCountry}&from=2022-${new Date().getMonth()+1}-${new Date().getDate()}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS}`).then((data)=>{
    setDataUsable(data.data.articles)
    DataContext.setAll_data(data.data.articles)
  })
},[selectCountry])

  return (
    <div className='navbar-news-bar-section'>
        <div className='header-news-bar-section'>
            <p>Fearured News</p>
            <p><KeyboardArrowRightIcon/></p>
        </div>
        {DataUsable!==false?
          DataUsable.map((dataUse:any,i:any)=>(
            <Item_section DataUse={dataUse} key={i}/>
          ))  
          :<></>
        }
    </div>
  )
}

export default News_bar