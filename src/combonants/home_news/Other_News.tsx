import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Catagory_Create_Context } from '../../context-api/All_News';

function Other_News() {
    const [DataUse,setDataUse]=useState<any>(false);
    const Navi=useNavigate()
    const DataContext=useContext(Catagory_Create_Context)


    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/everything?q=matches&from=2022-${new Date().getMonth()+1}-${new Date().getDate()}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS}`).then((data)=>{
            setDataUse(data.data.articles)
          })        
    },[])


    const goToPage=(e:any)=>{
        //Get All Data Of The Click Item 
        let Alldata=e.currentTarget.getAttribute("datatype").split("##$$##")
        let DataSaveContext={urlToImage:Alldata[0],title:Alldata[1],author:Alldata[2],content:Alldata[3],description:Alldata[4],publishedAt:Alldata[5],url:Alldata[6]}
  
        window.localStorage.newsDataSave=JSON.stringify(DataSaveContext)
        //Save The Data In The Context Api To Can Use iT
        DataContext.setSpecific_Data(DataSaveContext)
        Navi("/newsPage")
      }
  



  return (
    <div className='other-news-cotainer'>
        {DataUse!==false?DataUse.map(({urlToImage,title,publishedAt,author,content,description,url}:any,i:any)=>(
            <div key={i} className="container-other-news" onClick={goToPage}   datatype={`${urlToImage}##$$##${title}##$$##${author}##$$##${content}##$$##${description}##$$##${publishedAt}##$$##${url}`}>
                <img src={urlToImage} alt="" />
                <div className='text-container'>
                    <p>{title.slice(0,40)}</p>
                </div>

            </div>
        )):<></>}
      
    </div>
  )
}

export default Other_News
