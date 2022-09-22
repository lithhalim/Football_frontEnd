import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SportsIcon from '@mui/icons-material/Sports';
import StadiumIcon from '@mui/icons-material/Stadium';
import PublicIcon from '@mui/icons-material/Public';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import "./style/style.scss"
function Info_TwoPlear({Datause}:any) {
    console.log(Datause)
    const {country_name,event_date,event_referee,event_stadium,event_time,league_season,stage_name,event_home_formation,event_away_formation}=Datause

  return (
    <div className='info-two-plear'>
        <p className='header-name'>MATCH INFO </p>
        <ul className='match-info'>
            <li>
                <CalendarMonthIcon style={{fontSize:"2.1em"}}/>
                <div>
                    <p className='first-item'>{event_date} ({league_season})</p>
                    <p className='secand-item'>Date</p>
                </div>
            </li> 
            <li>
                <SportsIcon style={{fontSize:"2.1em"}}/>
                <div>
                    <p className='first-item'>{event_referee}</p>
                    <p className='secand-item'>Referee</p>
                </div>
            </li>
            <li>
                <StadiumIcon style={{fontSize:"2.1em"}}/>
                <div>
                    <p className='first-item'>{event_stadium}</p>
                    <p className='secand-item'>Venue</p>
                </div>
            </li>

            <li>
                <PublicIcon style={{fontSize:"2.1em"}}/>
                <div>
                    <p className='first-item'>{country_name}</p>
                    <p className='secand-item'>Country</p>
                </div>
            </li>   
            <li>
                <Diversity3Icon style={{fontSize:"2.1em"}}/>
                <div>
                    <p className='first-item'>{event_home_formation} </p>
                    <p className='secand-item'>Formation Home Team</p>
                </div>
            </li>
            <li>
                <Diversity3Icon style={{fontSize:"2.1em"}}/>
                <div>
                    <p className='first-item'> {event_away_formation}</p>
                    <p className='secand-item'>Formation Away Team</p>
                </div>
            </li>                
                
             

        </ul>
      
    </div>
  )
}

export default Info_TwoPlear
