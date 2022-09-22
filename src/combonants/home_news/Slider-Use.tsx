import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router';
import { Catagory_Create_Context } from '../../context-api/All_News';



let Route=0;
function Slider_Use() {
    const [DataUse,setDataUse]=useState<any>(false)
    const Navi=useNavigate()
    const DataContext=useContext(Catagory_Create_Context)


    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/everything?q=football&from=2022-${new Date().getMonth()+1}-${new Date().getDate()}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS}`).then((data)=>{
            setDataUse(data.data.articles)
          })        
    },[])
    


    const left=()=>{
        if(Route==0)return
        Route--

        (document.querySelector(".cursal-container") as HTMLElement).style.transform=` translateX(-${Route*250}px)`;
    }

    const right=()=>{
        Route++
        //to stop slide at the last item 
        (document.querySelector(".cursal-container") as HTMLElement).style.transform=` translateX(-${Route*250}px)`;        
    }

    const goToPage=(e:any)=>{
        //Get All Data Of The Click Item 
        let Alldata=e.currentTarget.getAttribute("datatype").split("##$$##")
        let DataSaveContext={urlToImage:Alldata[0],title:Alldata[1],author:Alldata[2],content:Alldata[3],description:Alldata[4],publishedAt:Alldata[5],url:Alldata[6]}
  
        window.localStorage.newsDataSave=JSON.stringify(DataSaveContext)
        //Save The Data In The Context Api To Can Use iT
        DataContext.setSpecific_Data(DataSaveContext)
        Navi("/newsPage")
      }




    return(
        <div className='slider-container'>
                <div className='left-icon' onClick={left}>
                    <ArrowBackIosIcon />
                </div>
                        <div className='cursal-container'>
                                {
                                DataUse!==false?DataUse.map(({urlToImage,title,publishedAt,author,content,description,url}:any,i:any)=>(
                                        <div className='container-item' key={i} onClick={goToPage} datatype={`${urlToImage}##$$##${title}##$$##${author}##$$##${content}##$$##${description}##$$##${publishedAt}##$$##${url}`}>
                                            <img src={urlToImage} alt="" />
                                            <p>{title}</p>
                                        </div> 
                                )):<></>
                                }
                        </div>
                <div className='right-icon' onClick={right}>
                    <ArrowForwardIosIcon />
                </div>
        </div>
    )
}

export default Slider_Use
