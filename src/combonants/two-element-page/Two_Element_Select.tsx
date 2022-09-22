import React, { useContext } from 'react'
import { TwoPlear_Create_Context } from '../../context-api/Select_Two_Plear'
import Header from '../two-element-page/1-header/Header';
import Scoure_Two from './2-scoure/scoure';
import Select_Two from './3-select/Select_Two';
import "./style/style.scss"

function Two_Element_Select() {
    const contextTwoPlear=useContext(TwoPlear_Create_Context);
  return (
    <div className='twi-element-container'>
        <Header Datause={contextTwoPlear.all_Data}/>
        <Scoure_Two  Datause={contextTwoPlear.all_Data}/>
        <Select_Two Datause={contextTwoPlear.all_Data}/>
    </div>
  )
}

export default Two_Element_Select