import React from 'react'

function Item_Team_Plear({dataUse}:any) {
  const {event_away_team,event_home_team,home_team_logo,away_team_logo  } =dataUse;
  return (
        <ul className='two-team'>
                <li>
                    <img src={home_team_logo} alt="" />
                    <p>{event_home_team}</p>
                </li>
                <li>
                    <img src={away_team_logo} alt="" />
                    <p>{event_away_team}</p>
                </li>
        </ul>  
  )
}

export default Item_Team_Plear
