import axios from 'axios'
import React, { useEffect, useState } from 'react'
import H2H_Two_Element from './H2H-Two-Element';
import Header_h2h from './Header-h2h';
import "./style/style.scss"

function H2H_TwoTeam({Datause}:any) {
    const [DataUsige,setDataUsige]=useState(false);
    const {home_team_key,away_team_key}=Datause;

    useEffect(()=>{
        axios.get(`https://apiv2.allsportsapi.com/football/?met=H2H&APIkey=${process.env.REACT_APP_API}&firstTeamId=${home_team_key}&secondTeamId=${away_team_key}`).
        then((data:any)=>(setDataUsige(data.data.result.H2H)))
    },[Datause])





  return (
    <div className='head-to-head-container'>
        {DataUsige!==false?
            <div>
                <Header_h2h DataUsige={DataUsige}/>
                <H2H_Two_Element DataUsige={DataUsige} Datause={Datause}/>
            </div>
        :<></>}

    </div>
  )
}

export default H2H_TwoTeam
