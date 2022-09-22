import React, { useContext } from 'react';
import { Catagory_Create_Context } from '../../../context-api/All_News';
import News_bar from "../../news-bar/News-bar";

import "./style/style.scss"

function News_Page() {
    let DataContext=useContext(Catagory_Create_Context);
    console.log(DataContext.Specific_Data)
    const {author,content,description,publishedAt,title,url,urlToImage    }=DataContext.Specific_Data
  return (
    <div className='News-page-container'>
        <div className='main-section'>
            <h1>{title}</h1>
            <ul className='header-main'>
                <li>
                    <img src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png" alt="" />
                    <div>
                        <p className='nameNews'>{author.slice(0,15)}</p>
                        <p className='NameChanell'>BBC NEWS</p>
                    </div>
                </li>
                <li>
                    <p>{publishedAt.slice(0,10)}</p>
                </li>
            </ul>
            <img className='image-news' src={urlToImage} alt="" />
            <p className='description'>{description}</p>
            <p className='content'> {content}</p>
        </div>
        <News_bar/>
    </div>
  )
}

export default News_Page