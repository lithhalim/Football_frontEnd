import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { Catagory_Create_Context } from '../../context-api/All_News';

function Item_section({DataUse}:any) {
    const {urlToImage,title,author,content,description,publishedAt,url}=DataUse;
    let DataContext=useContext(Catagory_Create_Context);
    const Navi=useNavigate()


    let DataAllString=`${urlToImage}##$$##${title}##$$##${author}##$$##${content}##$$##${description}##$$##${publishedAt}##$$##${url}`
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
    <div className='item-add' onClick={goToPage} datatype={DataAllString}>
      <img src={urlToImage} alt="" />
      <p>{title.slice(0,45)}</p>
    </div>
  )
}

export default Item_section
