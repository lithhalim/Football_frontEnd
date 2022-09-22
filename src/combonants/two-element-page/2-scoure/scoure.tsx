import React from 'react';
import "./style/style.scss";

function Scoure_Two({Datause}:any) {
    console.log(Datause)

    const {home_team_logo,home_team_key,event_time,event_status,event_final_result,event_home_team,event_away_team,away_team_logo,away_team_key}=Datause;
  return (
    <ul className='scoure-container-two-plear'>
        <li datatype={home_team_key} className="first-team-container">
            <img src={home_team_logo} alt="" />
            <p className='team1-scoure'>{event_home_team}</p>
        </li>
        <li className='middel-item-two'>
            <h1>{event_final_result}</h1>
            <p>{event_time}</p>
        </li>
        <li datatype={away_team_key} className="secand-team-container">
            <img src={away_team_logo} alt="" />
            <p className='team2-scoure'>{event_away_team}</p>
        </li>
    </ul>
  )
}

export default Scoure_Two