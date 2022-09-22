import React from 'react';
import Other_News from './Other_News';
import Slider_Use from './Slider-Use';
import "./style/style.scss";

function Home_News() {
  return (
    <div className='home-news-container'>
        <Slider_Use />
        <p className='topstores'>Top Stories</p>
        <Other_News/>

    </div>
  )
}

export default Home_News
