import React from 'react'

function H2H_Two_Element({DataUsige,Datause}:any) {
    const {home_team_key,away_team_key,event_away_team,event_home_team,away_team_logo,home_team_logo}=Datause;
    let homeItem=event_home_team;
    let awayItem=event_away_team


  return (
    <div className='Two-Element-head'>
        {DataUsige.map(({event_home_team,event_away_team,event_final_result,event_date,event_status}:any,i:any)=>(
                    <ul className='head-container' key={i}>
                    <li>
                        <div className='first-side'>
                            <p style={{width:"60px"}}>{event_date.slice(0,4)}</p>
                            {homeItem==event_home_team?
                             <img src={home_team_logo} alt="" />
                            :<img src={away_team_logo} alt="" /> }                                                    
                            <p>{event_home_team}</p>
                        </div>
                        <p className='secand-side'>{event_final_result.split("-")[0]}</p>
                    </li>
                    <li>
                        <div className='first-side'>
                            <p style={{width:"60px"}}>{event_status.slice(0,3)}</p>
                            {awayItem==event_away_team?
                             <img src={away_team_logo} alt="" />
                            :<img src={home_team_logo} alt="" /> }                                                    
                            <p>{event_away_team}</p>
                        </div>
                        <p className='secand-side'>{event_final_result.split("-")[0]}</p>
                    </li>
                </ul>        
        ))}

      
    </div>
  )
}

export default H2H_Two_Element
