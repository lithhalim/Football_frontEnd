import React, { useContext } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Item_Team_Plear from './item';
import "./style/style.scss"
import { TwoPlear_Create_Context } from '../../../../context-api/Select_Two_Plear';
import { useNavigate } from 'react-router';


function Two_team_container({DataUse}:any) {
  const {event_time}=DataUse;
  const contextDataSaver=useContext(TwoPlear_Create_Context);
  const Navi=useNavigate()

  const Gotopage=()=>{
    contextDataSaver.setAll_data(DataUse)
    window.localStorage.Two_Plear_Saver_Section=JSON.stringify(DataUse)
    Navi("/TwoplearPgae")
  }

  return (
    <div className='two-team-container' onClick={Gotopage}>
        <div className='left-side-section'>
          <p className='time-section'>{event_time}</p>
          <Item_Team_Plear dataUse={DataUse}/>
        </div>
        <p className='add-favorate-icon'><StarBorderIcon/>   </p> 
    </div>
  )
}

export default Two_team_container
